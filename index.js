
function receivesAFunction(callback) {
    // Do something with the callback function
    callback();
  }
  
  receivesAFunction(function() {
    console.log('Callback function called');
  });




  function returnsANamedFunction() {
    function namedFunction() {
      // function body here
    }
    return namedFunction;
  }

  const myNamedFunction = returnsANamedFunction();
myNamedFunction();



const returnsAnAnonymousFunction = () => {
  return function() {
    // function body here
  }
}
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();
