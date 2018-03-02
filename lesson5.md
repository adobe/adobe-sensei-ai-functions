---
layout: module
title: Lesson 5&#58; Sensei Image Quality
---

## Overview
In this exercise you will use the Adobe Sensei Image Quality function to 

## Exercises
1. Open the **Visual Studio Code** application on your worksation located under Applications or in the app toolbar.

2. In **Visual Studio Code**, go to **File | Open ** and locate the folder for the exercises and solutions pre-loaded on your workstation in your user directory at `~/adobe-sensei-ai-functions`.

3. Now open the `solutions/exercise-1/composition.js` file (go over the Composer concepts for `retain`, `sequence`).

4. Using the Adobe I/O Runtime Shell, preview the current session flow for exercise 1 with the following command:

      app preview ~/adobe-sensei-ai-functions/exercises/exercise-1/composition.js

5. Go back into VS Code and open `exercises/exercise-1`. Add the Sensei Image Quality function which is defined with an action name of `/sensei/1.0/sensei-imagequality`. You'll need to pass in the `imageObject` parameter for `image` and retain the results. Begin coding at the TODO block ```/**
     * TODO: Invoke the /sensei/1.0/sensei-imagequality action
     * passing the imageObject as parameter
     */```

     <!-- SOLUTION
     composer.retain(
      composer.sequence(
        params => ({
          "image": params.imageObject
        }),
      '/sensei/1.0/sensei-imagequality'
      )
    ),
    /* grab image quality results */
    ({result, params}) => Object.assign({}, result, params)-->

## Try it!
1. First preview your composition again to ensure your new changes are shown:

      app preview ~/adobe-sensei-ai-functions/exercises/exercise-1/composition.js

2. Next update the current `asset_created_composition` app with your new version:

      app update asset_created_composition ~/adobe-sensei-ai-functions/exercises/exercise-1/composition.js

3. Now open the browser to your Creative Cloud files again and navigate into the new folder you created in a previous step (**sensei-lab-1** for instance).

4. Trigger an `asset_created` event by uploading an image to this folder. We've provided one for testing within the `~/adobe-sensei-ai-functions/images` folder named `exercise-1.png`. Drag and drop the image into the folder.

5. Switch back to the Adobe I/O Runtime Shell and type:

      session list

  > This command will list all the sessions running, including actions and apps.
  
6. Locate the most recent `asset_created_composition` running and click on the session id to view the result.

> In the Adobe I/O Runtime Shell, you can execute the `action get /sensei/1.0/` command to view all of the current Adobe Sensei functions defined in your namespace for use.


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
