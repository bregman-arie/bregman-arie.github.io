---
layout: single
title:  "Kibana: Getting 'Forbidden' while trying to create an index pattern" 
permalink: /kibana-forbidden-index-pattern
description: "Getting foribdden while trying to create an index pattern. Easy fix"
date:   2020-03-01
categories: elastic
tags:
  - elk
  - kibana
---

If you go to Kibana and try to create an index pattern but get "Forbidden" it means you have a locked index and while it's read-only<br>
you will not be able to create an index pattern.

## Solution

In Kibana, go to "Dev Tools" by clicking on the wrench icon in the left side menu.<br>
Copy the following to Dev Tools Console

```
PUT .kibana/_settings
{
"index": {
"blocks": {
"read_only_allow_delete": false
}
}
}
```

Next, click on "send request" (green triangle when clicking on the block of code you entered)<br>
That's it, you should be able to create an index pattern successfully now.

If you still having issues, let me know in the comments.
