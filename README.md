# js-boilerplate

Boilerplate code for getting a React/Redux JavaScript application up and running that demonstrates the following:

- Creating React components.
- Creating a Redux store with multiple combined reducers.
- Using reselect to write memoized selectors for derived data.
- Hot reloading with webpack.
- Dispatching Redux actions which get consumed by the store and used to update the React UI.
- Sweet ES6+ JavaScript syntax via Babel.

To run:

- npm install
- npm run dev
- Visit http://localhost:8080/index.html in your browser.

Things to try:

- Edit the text in one of the two boxes - note that "Hello World!" at the top follows along.
- Edit some JS code or some CSS.  Watch the magic of hot reloading!
- Use your browser's inspector to check out some code via the sourcemaps.
- Get crazy with the React Devtools.

Notes:

I'll never claim this is the "right" way to set up a project - far from it.  This is what I cobbled together from my understanding of the above modules and the others that you'll find in package.json.  That said, I tried to follow their best practices and keep things simple but extensible.   

I cribbed a lot off of https://github.com/erikras/react-redux-universal-hot-example.  Thanks to erikras for such a stellar example of a ton of technologies.

Next:

Adding asynchronous actions and a little express server.
