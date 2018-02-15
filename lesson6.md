---
layout: module
title: Lesson 6&#58; Composition Creation/Trigger
---

## Overview
Create the Composition (app) to run when the asset created event occurs.

## Exercises
1. Open the Adobe I/O Runtime Shell (located in your Applications folder) 

2. Execute the following command to preview the Composition defined in the `[project-root]/compositions/saw.js` file.

        > app preview </path/to>/compositions/saw.js

2. When ready, deploy the app with the name `asset_created_composition` before moving to the next step:

        > app update asset_created_composition </path/to>/compositions/saw.js

3. Define an OpenWhisk Trigger

    When the webhook is invoked, it creates an internal OpenWhisk Event (trigger) called `cc_asset_created`. Configure this trigger using the commands bellow:

        > wsk trigger create cc_asset_created
        > wsk rule create cc_asset_created_rule cc_asset_created asset_created_composition
        > wsk rule enable cc_asset_created_rule

4. Create a configuration file called `config.json` to contain the Creative Cloud and AEM parameters required below:

        {
        "config": {
            "cc_apiKey": "--io-integration-api-key--",
            "aem_host": "52.191.166.198",
            "aem_port": "80",
            "aem_user_id": "admin",
            "aem_user_password": "--"
        }
        }        

5. Update the `cc_event_handler` action with the `new config.json`

        > wsk action update cc/cc_event_handler --param-file ./config.json

## Resources

Troubleshooting with Redis note needed??

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
