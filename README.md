# Cool-Tweets

## [Demo](http://protective-verse.surge.sh/)
frontend hosted on [Surge](https://surge.sh/) and api hosted on [Zeit/now](https://zeit.co/now)

### Get Started
1. **Clone the project**. `git clone https://github.com/jforaker/cool-tweets.git`
2. **Open two terminal tabs**
- first tab: `cd api` and then `npm install`
- second tab: `cd client` and then `npm run setup`
3. **In the `api` tab Run the server (will start on port 8080)**. `npm start`
4. **In the `client` tab Run the react app (will start on port 3000)**. `npm start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically.
 

### Technologies
Cool-Tweets uses the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [Express](https://expressjs.com/)  |   Fast, unopinionated, minimalist web framework for Node.js.    | 
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)    |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel. | 
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |


### Other Open Source libraries used:
[twit](https://github.com/ttezel/twit) - Twitter API Client for node (REST & Streaming API)

[react-bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework, rebuilt for React


#### Note: 
Surge provides very basic hosting without functionality for redirects (unless you have a [paid account](https://surge.sh/help/adding-redirects)), therefore refreshing on a nested route will throw an error.
