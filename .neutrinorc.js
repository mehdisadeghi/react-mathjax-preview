const standard = require('@neutrinojs/standardjs');
const reactComponents = require('@neutrinojs/react-components');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    reactComponents(),
    jest(),
  ],
};
