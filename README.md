# Crossover test app

This is the test app crossover asked to do


## What was done

* Project done as per mockup. AngularJs is used as frontend framework.
* 7 unit tests are done, covering the main controller and service. Tests are done using Karma and Jasmine
* Styling is done as appropriate. Compass is used for SCSS to CSS conversion.
* Project dependencies are loaded via npm and bower

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools are used to initialize and test this app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone crossover-test

Clone the crossover-test repository using [git][git]:

```
git clone https://github.com/ashekthegreat/crossover.git
cd crossover
```

### Install Dependencies

I have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* I get the tools I depend upon via `npm`, the [node package manager][npm].
* I get the angular code via `bower`, a [client-side code package manager][bower].

I have preconfigured `npm` to automatically run `bower` so I can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools I need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
crossover-aap changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.


## Testing

There are two kinds of tests in the crossover-test application: Unit tests and end-to-end tests.

### Running Unit Tests

The crossover-test app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which I run with the [Karma Test Runner][karma]. I provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
