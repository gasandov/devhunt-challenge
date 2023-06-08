JavaScript Language:

a. What is the difference between null and undefined in JavaScript?
null means that it has a memory space and no value, whilie undefined means that there's not space in memory

b. Explain the concept of closures in JavaScript with an example.
closures are functions that keep in memory a "closure", meaning a variable or something that is remembered across the execution of the function e.g.

```JS
function sum(a) {
  return function innerSum(b) {
    return a + b;
  }
}

const sumBy10 = sum(10);

sumBy10(5) // 10 is getting clousured (remembered)
```

c. What is the event loop in JavaScript and how does it work?

The event loop starts by checking if there are any instructions that need to be executed.
If there are instructions, the event loop takes the first one and starts executing it.
While the instruction is being executed, the event loop keeps an eye out for other instructions that might need to be executed.
If it finds another instruction, it puts it aside for later and continues executing the current one.
Once the current instruction is finished, the event loop moves on to the next instruction in line and repeats the process.
This continues until all the instructions have been executed, and the event loop stops.

Node.js Framework:

a. What is Node.js and what are its main features?
node.js it's a framework/library that provides javascript the capabilities of being able to create and communicate with servers.

b. Explain the concept of asynchronous programming in Node.js. c. How does Node.js handle concurrent requests efficiently?
Node.js can initiate multiple tasks simultaneously and handle their completion separately. Node.js achieves efficient handling of concurrent requests through its non-blocking, event-driven architecture

React Framework:

a. What is React.js and why is it popular for building user interfaces?
react is a library that uses jsx, meaning a combination of html with javascript. Initially it was built as a single page library, meaning only one page will exists across the platform and views will be changed by mounting and unmounting new components

b. Explain the concept of virtual DOM and its advantages.
DOM is the syntatic representation of the html nodes/tags built as a tree structure
The virtual DOM it's a in memory DOM that keeps getting updated whenever some node inside the tree has to be updated and then it's replaced with the real DOM.

c. How does React handle component lifecycle events?
depending on react version if takes care of lifecyle events through hooks or life cycle events

useState, useEffect, useCallback

componentDidMount, shouldComponentUpdate
