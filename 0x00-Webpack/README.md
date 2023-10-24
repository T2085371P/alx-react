What Is Webpack?

As its core, webpack is a static module bundler. In a particular project, webpack treats all files and assets as modules. Under the hood, it relies on a dependency graph. A dependency graph describes how modules relate to each other using the references (require and import statements) between files. In this way, webpack statically traverses all modules to build the graph, and uses it to generate a single bundle (or several bundles) — a JavaScript file containing the code from all modules combined in the correct order. 

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to setup Webpack for a basic project
Entry points, output, and loaders
How to add plugins
How to split your code into chunks
How to setup a dev server
