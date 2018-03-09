---
layout: module
title: Exercise 2&#58; Manual Image Processing
---

## Overview
In this exercise you will add code to check the overall quality score received from the previous **Adobe Sensei Image Quality** function. When the quality score does not meet an acceptable range, you will call an action to upload it back to Creative Cloud for manual processing.

## Steps
1. In Visual Studio Code, open the `exercises/exercise-2/composition.js` file. 

2. Locate the `TODO` comment block and add the following snippet:

        /* TODO: ... */
        composer.if(
          params => params.scores.quality > 0.64,
          /* if quality is met, process the image and upload to AEM */
          (params) => params,
          /* if quality is NOT met, copy asset to manual process folder in CC */
         '/adobe/acp-assets-0.5.0/cc-upload-manual')

   > **HINT:** Look back to the results of the previous exercise to remind you of the `quality` score returned for an image.

## Try it!
1. First preview your composition again to ensure your new changes are shown before moving on:

       app preview ~/adobe-sensei-actions-lab/exercises/exercise-2/composition.js

      ![](images/exercise2-flow.png)

2. Next, update the currently deployed version of the `asset_created_composition` with your edited version:

       app update asset_created_composition ~/adobe-sensei-actions-lab/exercises/exercise-2/composition.js

3. Open the browser to your Creative Cloud instance and trigger the `asset_created` event by uploading a low quality image into it. One has been included for you within the projects `~/adobe-sensei-actions-lab/stock-photos` folder by the name of `quality-fail.png`.

5. Switch back to the **Adobe I/O Runtime Shell** to find your session by running the following command:

       session list

6. Locate the most recent `asset_created_composition` running and click on the session id to view the result. When it was run successfully the **RESULTS** tab JSON will show the scores indicating the quality value is indeed less than **0.64**:

      ![](images/quality-scores.png)

    Also note how the **SESSION FLOW** tab at the bottom shows the path ended with the `cc-upload-manual` action:

      ![](images/cc-upload-manual.png)

7. Now go back into your Creative Cloud instance and you should see that a new folder was created called `manual` and contains the `quality-fail.png` file.

      ![](images/manual-process.png)

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
