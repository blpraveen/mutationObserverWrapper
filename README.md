mutationObserverWrapper
=======================

A small, simple javascript wrapper for the MutationObserver API. 

**USAGE**

var newObserver = new observerWrapper({ target: document.body });

newObserver.observe(function( node ){
	console.log(node.className);
});

