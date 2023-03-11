// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
  }

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

function doSomething(thing) {
    console.log(thing);
}
doSomething("Computer"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`)
}

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "Goodbye");

function add(x, y) {
    return x + y;
}

console.log(add(80, 9000));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));