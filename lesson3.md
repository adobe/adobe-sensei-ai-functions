---
layout: module
title: Lesson 3&#58; Webhook Creation & Registration
---

## Overview
Create and register a webhook action to be called when an ***Asset Created*** event is fired from Creative Cloud.

## Exercises
1. Configure a new webhook with I/O Events
  - Create a new package named `cc` using `wsk`
    ```bash
    $ wsk package create cc
  
  - Create a new action called [cc_event_handler](cc_event_handler.js) using the code defined in [cc_event_handler.js](cc_event_handler.js)

    ```bash
    $ wsk action create cc/cc_event_handler ./cc_event_handler.js --web true

## Resources

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
