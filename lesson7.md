---
layout: module
title: Exercise 3&#58; Sensei Body Crop
---

## Overview
In this exercise you will use the Sensei Body Crop function to identify reference points in the provided image to use for cropping out the body automatically.

## Steps
1. In Visual Studio Code, open `exercises/exercise-3/composition.js`. 
2. Just after the `TODO` block, add code to invoke the `/sensei/1.0/sensei-bodycrop` action to crop the body of the image. Use the same constructs used for `sensei-imagequality` and retain the result in a `crops` object for later processing. The only parameter required for this function is:

      `image` - the image to crop      

## Try it!
1. Preview your composition to ensure you see the `sensei-bodycrop` action:

       app preview ~/adobe-sensei-actions-lab/exercises/exercise-3/composition.js

    ![](images/exercise3-flow.png)

2. Next update the current `asset_created_composition` app with your new version:

       app update asset_created_composition ~/adobe-sensei-actions-lab/exercises/exercise-3/composition.js

3. Now open the browser to your Creative Cloud folder previously created again and trigger an `asset_created` event by uploading the `~/adobe-sensei-actions-lab/images/exercise3.png` image into it.

5. Switch back to the Adobe I/O Runtime Shell and type:

       session list

6. Locate the most recent `asset_created_composition` running and click on the session id to view the result. The response should return the cropped coordinates like below:
    
    ![](images/bodycrop-result.png)


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson8.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
