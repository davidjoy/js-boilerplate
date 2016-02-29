# node-boilerplate

Boilerplate code for node web applications.  Includes:

- babel
- express
- react
- redux
- reselect
- memoizee
- redux-router
- isomorphic-fetch
- webpack with:
    - hot client reloading
    - style-loader
    - less-loader
    - redbox-react
    - production build
- various testing goodies

## Setup

- npm install

## To run in development mode

- npm start
- Visit http://localhost:8000

## To build for production

- npm run build

## To run in production

- npm run build:start
- Visit http://localhost:8000

## Notes

I won't claim this is the "right" way to set up a project - it makes sense to me though, and it's what I use in my own projects.  Mostly I just want everything to be clear and in a reasonable place so I don't have to think about it.   

I cribbed a lot off of a few other boilerplate/example projects for a bunch of the nitty-gritty configuration.  Special thanks to:

- https://github.com/erikras/react-redux-universal-hot-example
- https://github.com/christianalfoni/webpack-express-boilerplate
- https://github.com/vesparny/react-kickstart

I still find some of the webpack/express configuration a bit mystifying, so those projects helped out a ton.  Thanks!

## Future

- orm2 or sequelize
- passport
- isomorphic react
