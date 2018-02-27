---
layout: module
title: Lesson 6&#58; Code the Composition 
---

## Overview
Code the Composition (app) to run when the asset created event occurs.

## Exercises

1. Code the context:

```
 /* get Adobe Context */
  composer.retain(
    composer.sequence(
      params => ({key: ":oauth:" + params.asset.user_id, fields: "token"}),
      'cache/persist'
    )
  ),
```
2. Add the `sensei-imagequality` action:

```
composer.sequence(
   params => ({
        "image": params.imageObject
   }),
   'sensei-imagequality'
)

```

4. Add the `sensei-bodycrop` action:
```
composer.sequence(
   params => ({
        "image": params.imageObject
   }),
   'sensei-bodycrop'
)
```        
5. Add the `sensei-autoswatch` action

6. Add the `aem-copy-asset` action

7. Add the `sensei-autotag` action

8. Add the `aem-update-tags` action 

9. Code the `cc-upload-manual` action


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="lesson5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="lesson7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
