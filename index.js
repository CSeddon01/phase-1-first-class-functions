function receivesAFunction(spy) {
    return spy()
}

var returnsANamedFunction = function returnsANamedFunction() {
   return receivesAFunction
}
  
var returnsAnAnonymousFunction = function () {
    return function (){}
}


