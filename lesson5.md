---
layout: module
title: Lesson 5&#58; Define Actions
---

## Overview

## Exercises

#### Add Supporting Actions
1. Create an action named `aem-copy-asset` to copy the asset from Creative Cloud to AEM 

    wsk action update aem-copy-asset ./actions/aem-assets/openwhisk-aem-assets-0.0.2.js --main action.copyFromCC

2. Create an action named `aem-update-tags` to update asset tags

    wsk action update aem-update-tags ./actions/aem-assets/openwhisk-aem-assets-0.0.2.js --main action.updateAssetTags

3. Create an action named `cc-upload-manual` to upload the manual CC assets

    wsk action update cc-upload-manual ./actions/cc-assets/openwhisk-cc-assets-0.0.2.js --main action.uploadManualProcess

#### Add Sensei Actions
1. Sensei Autotag - create an action named `sensei-autotag` 
    
    wsk action update sensei-autotag ./actions/sensei-autotag/blackbox-action.js --docker docker-senseiwins-release.dr-uw2.adobeitc.com/openwhisk-runtime/autotagging/nodejs:0.0.1 -m 2560 --param confidence 0.5 --param results 10

2. Sensei Image Quality - create an action named `sensei-image-quality`

    wsk action update sensei-imagequality ./actions/sensei-imagequality/blackbox-action.js --docker docker-senseiwins-release.dr-uw2.adobeitc.com/openwhisk-runtime/imagequality/nodejs:0.0.1 -m 2560

3. Body crop - create an action named `sensei-bodycrop`

    wsk action update sensei-bodycrop ./actions/sensei-bodycrop/blackbox-action.py --docker docker-senseiwins-release.dr-uw2.adobeitc.com/openwhisk-runtime/smartproductcrop/python:0.0.1 -m 2048

4. Auto swatch - create an action named `sensei-autoswatch`

    wsk action update sensei-autoswatch ./actions/sensei-autoswatch/blackbox-action.py --docker docker-senseiwins-release.dr-uw2.adobeitc.com/openwhisk-runtime/autoswatch/python:0.0.1 -m 2048

## Resources
- [Service Workers Explained](https://github.com/w3c/ServiceWorker/blob/master/explainer.md)
- [Service Worker Lifecycle](https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle)
- [Is Service Worker Ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [sw-precache](https://github.com/GoogleChrome/sw-precache) - popular project to help generate your service worker based on certain settings. Integrates with your build process.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
