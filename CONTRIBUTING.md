## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

- Running `yarn install` in the components's root directory will install everything you need for development.

## Development

- `yarn start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

- `yarn test` runs the tests with `jest`.

- `yarn build` builds the component for publishing to npm in the `dist` folder.

- `yarn build:demo` builds the demo app in the `dist` folder.

## Packaging
For packaging and transforms `parcel` and `bable` have been used. The `.babelrc`
is there because of `jest`, otherwise the default `parcel` configs would work build
the react project properly.

Initially I had used nwb and later neutrinojs, however they were unnecessary for this extremely small project, which is basically one single component. So, using
`parcel` and removing extra folders simplified everything a great deal. 
