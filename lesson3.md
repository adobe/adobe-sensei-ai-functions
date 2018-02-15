---
layout: module
title: Lesson 3&#58; Webhook Creation
---

## Overview
Create a webhook action to be called when an *Asset Created* I/O event is fired.

## Exercises
1. Create a new package named `cc` using `wsk`

       wsk package create cc

2. Create a new action called [cc_event_handler](cc_event_handler.js) using the code defined in [cc_event_handler.js](cc_event_handler.js) within the `cc` package. This action will be used as the webhook that will respond to Creative Cloud I/O Events.

       wsk action create cc/cc_event_handler ./cc_event_handler.js --web true

## Resources

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
