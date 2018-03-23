/**
* Asset Created Event Handler.
* Sample event:
{
    "event": {
        "xdmEventEnvelope:objectType": "xdmAsset",
        "activitystreams:object": {
            "xdmAsset:format": "image/jpeg",
            "xdmAsset:etag": "123456789000",
            "xdmAsset:asset_id": "urn:aaid:sc:eu:123456-78900-41c8-b7b3-80dd286b3a87",
            "xdmAsset:path": "/files/path/to/image.jpg",
            "xdmAsset:asset_name": "image.jpg",
            "@type": "xdmAsset"
        },
        "activitystreams:actor": {
            "@type": "xdmImsUser",
            "xdmImsUser:id": "111222333444555666777@AdobeID"
        },
        "activitystreams:generator": {
            "@type": "xdmContentRepository",
            "xdmContentRepository:root": "https://cc-api-storage.adobe.io"
        },
        "activitystreams:to": {
            "@type": "xdmImsUser",
            "xdmImsUser:id": "111222333444555666777@AdobeID"
        },
        "@type": "xdmCreated",
        "activitystreams:published": "2018-03-01T18:55:42.60Z",
        "@id": "urn:oeid:sc:aeadee02-5304-4623-96d3-ca5fa7b981fc"
    }
    "asset": {
        "asset_id": "urn:aaid:sc:eu:123456-78900-41c8-b7b3-80dd286b3a87",
        "url": "https://cc-api-storage.adobe.io/id/urn:aaid:sc:eu:123456-78900-41c8-b7b3-80dd286b3a87",
        "pathname": "/files/path/to/image.jpg",
        "user_id": "111222333444555666777@AdobeID",
        "mime_type": "image/jpeg",
        "filename": "image.jpg",
        "type": "xdmAsset"
    },
    "event_id": "122222-6526-4719-894f-fa0077c51865"
}
*/
composer.sequence(
  /* get Adobe Context */
  composer.retain(
    composer.sequence(
      params => ({key: ":oauth:" + params.asset.user_id, fields: "token"}),
      'cache/persist'
    )
  ),
  /* decorate event with the context */
  ({result, params}) => Object.assign({}, {
    context: {
      token: result.value.token
    },
    imageObject: {
      uri: params.asset.url,
      headers: {
        "Authorization": "Bearer " + result.value.token,
        "X-Api-Key": params.config.cc_apiKey
      }
    }
  }, params),
  /**
   * Invoke the '/sensei/1.0/sensei-imagequality' action
   * passing the imageObject as parameter
   */
  composer.retain(
    composer.sequence(
      params => ({
        "image": params.imageObject
      }),
    '/sensei/1.0/sensei-imagequality'
    )
  ),
  /* grab image quality results */
  ({result, params}) => Object.assign({}, result, params),
  /** 
   * Check the image quality. If quality is not met, upload
   * the asset into a folder invoking the '/adobe/acp-assets-0.5.0/cc-upload-manual' action.
   * Use composer.if( <condition>, <then>, <else>) construct.
   * For <then> you can choose to simply return the params using: 
   * (params) => params
   */
  composer.if(
    params => params.scores.quality > 0.62,
    /**
     * If quality is met, process the image and upload to AEM.
     */
    composer.sequence(
      /**
       *  Use the action '/sensei/1.0/sensei-bodycrop' to crop the body.
       */
      composer.retain(
        composer.sequence(
          params => ({
            "image": params.imageObject
          }),
        '/sensei/1.0/sensei-bodycrop'
        )
      ),
      /* grab bodycrop results */
      ({result, params}) => Object.assign({},
        { crops: result },
        params
      ),
      /**
       * Invoke '/sensei/1.0/sensei-autoswatch'
       */
      composer.retain(
        composer.sequence(
          params => ({
            "image": params.imageObject,
            "results": 2,
            "size": 0
          }),
        '/sensei/1.0/sensei-autoswatch'
        )
      ),
      /* grab autoswatch results */
      ({result, params}) => Object.assign({}, result, params),
      /** Copy asset to AEM 
       *  invoking '/adobe/acp-assets-0.5.0/aem-copy-asset-and-crop' action
       */
      '/adobe/acp-assets-0.5.0/aem-copy-asset-and-crop',
      /**
       * Autotag the image invoking '/sensei/1.0/sensei-autotag' action.
       */
      composer.retain(
        composer.sequence(
          params => ({
            "image": params.imageObject,
            "confidence": 0.5,
            "results": 20
          }),
        '/sensei/1.0/sensei-autotag',
        (r) => { r.tags.push({"tag": "created with io runtime", "confidence":"1"}); return r; }
        )
      ),
      /* grab autotag results */
      ({result, params}) => Object.assign({}, result, params),
      /**
       * Update the tags in AEM Assets by invoking '/adobe/acp-assets-0.5.0/aem-update-tags'
       */
      '/adobe/acp-assets-0.5.0/aem-update-tags',
      /**
       * Return the result as-is
       */
      result => result
    ),
    /* if quality is NOT met, copy asset to manual process folder in CC */
   '/adobe/acp-assets-0.5.0/cc-upload-manual')
)