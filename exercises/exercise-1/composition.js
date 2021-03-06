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
    }, params)
    /**
     * TODO: Invoke the /sensei/1.0/sensei-imagequality action
     * passing the imageObject as parameter
     */
)
  