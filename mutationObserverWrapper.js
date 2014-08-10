var observerWrapper = function( options ){

    this.defaults = {
        attributes: false, 
        childList: true, 
        subtree: true,
        characterData: false 
    };

    this.target = options.target || document.body;

}

observerWrapper.prototype.mutate = function ( mutations ){
    var _this = this;
    mutations.forEach(function( mutation ) {
        var newNodes = mutation.addedNodes; 
        if( newNodes !== null ) { 
                newNodes = [].slice.apply(newNodes);
                newNodes.forEach(function(newNode){
                    _this.callback.call( _this.observer, newNode );
                });
        }
    });
}

observerWrapper.prototype.observe = function( callback ){
    this.callback    = callback;
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    this.observer    = new MutationObserver( this.mutate.bind(this) );
    this.observer.observe( this.target, this.defaults );
}
