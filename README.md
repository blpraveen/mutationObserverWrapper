mutationObserverWrapper
=======================

A small, simple javascript wrapper for the MutationObserver API. 

**USAGE**

```javascript
var newObserver = new observerWrapper({ target: document.body });

newObserver.observe(function( node ){
if ( node.className ){
    if ( node.className.search("someClass") > -1 ){
        if ( node.ptag === "added" ){
            // node.className has been added to the DOM
        } else if ( node.ptag === "removed" ){
            // node.className has been removed from the DOM
        }
    }

}
});
```

