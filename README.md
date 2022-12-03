# A functional approach to data structures in Typescript

## State of the project
I'm keeping this project at 0.0.x state until a decent amount of functionality is present.

## What and Why?
The goal of this project is to provide functional style support
for common data sctructures and operations.
There are some good Object Oriented alternatives, but Javascript
has first class Functions, allowing us to also harness the power
of the functional approach.
As seen in other use cases (including React.js), functional style
programming done properly in Javascript may yield several benefits,
such as **smaller bundle sizes** and **performance gains**.

## Why Typescript?
Although not perfect, Typescript has some pretty good support por functional programming style. The benefits of Typescript in structured projects, like this one, tend to **vastly outclass** the burdens of dealing with the compiler and other knows drawbacks. Check out the Typescript official resources if you are not aware of such benefits.

## Immutability and Side Effects 
For the initial version of this project, we won't dive fully into immutability and pure functions. That said, I'm a big fan of both ideas and its benefits and might implement both in the future. This project is certainly open for immutable structures and pure operations. This just won't be the focus until we have at least a decent MVP.
When dealing with Javascript VMs, sometimes you need fine control over when and where to use mutation and side effects. We do have great libraries, like immer, handling this scope currently, so we better focus on the data structures and operations themselves.