const standard = require('@neutrinojs/standardjs');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');
const htmlTemplate = require('@neutrinojs/html-template');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    reactComponents(),
    jest(),
    htmlTemplate({
      // @neutrinojs/html-template includes a custom template that has more features
      // (eg appMountId and lang support) than the default html-webpack-plugin template:
      // https://github.com/jantimon/html-webpack-plugin/blob/master/default_index.ejs
      template: require.resolve('@neutrinojs/html-template/template.ejs'),
      appMountId: 'root',
      lang: 'en',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      // Override pluginId to add an additional html-template plugin instance
      pluginId: 'html',
    }),
  ],
};
