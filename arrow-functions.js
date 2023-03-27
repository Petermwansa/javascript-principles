
//THE ARROW FUNCTION EXPRESSION
//they cannot be used as methods though
//cannot expressed as a constructor



//using arrow functions
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr2 = [5, 6, 13, 0, 1, 18, 23];

const sum = arr2.reduce((a, b) => a + b);
// 66

const even = arr2.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr2.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
})
  .then((b) => {
    // …
});

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);



//Traditional function 
(function (a) {
    return a + 100;
});

// 3. Remove the parameter parentheses
a => a + 100;



// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow function
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
};
