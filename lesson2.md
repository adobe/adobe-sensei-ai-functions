---
layout: module
title: Lesson 2&#58; Adobe I/O Runtime Shell
---

## Overview
The Adobe I/O Runtime Shell is a graphical interface to help you visualize and debug your serverless functions and compositions with great ease. It has been pre-installed on your machine and you will use it throughout the workshop. Before using it however, you must authorize your namespace to give yourself your own sandbox to play in for the duration of this lab.

## Setup
1. Open Finder and locate the Adobe I/O Runtime Shell ![](images/adobe-runtime-shell-logo.png):
2. Authorize your designated Adobe I/O Runtime namespace based on the auth key provided for your userid by entering the following command:

        auth add your_namespace_key_goes_here

    You should receive a response for your userid like shown below:

   ![](images/auth-namespace.png)

## Exercises
1. Using the Runtime Shell, create a new `app` (aka: `composition`) based on the built-in `hello.js` demo using the following command:

       app create hello-app @demos/hello.js

2. Invoke your `hello-app` with a `name` parameter:

       app invoke -p name sensei

3. Preview the `if.js` demo to see an example of an app with more of a flow structure:

       app preview @demos/if.js

 ![](images/if-flow.png)
  
 > Take a moment and click on the **Code** tab and notice how it uses the `authenticate` action as the condition, and takes the `welcome` or `login` action path depending on the result returned from `authenticate`. You can also click on any of the actions that make up this app to find out more details on the expected parameters etc...

           composer.if(
             /* cond */
             'authenticate',
             /* then */
             'welcome',
             /* else */
             'login')

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson3.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
