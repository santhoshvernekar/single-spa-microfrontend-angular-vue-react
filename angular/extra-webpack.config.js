const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
// temp fix for
  // An unhandled exception occurred: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 // - configuration.entry['main'] should not contain the item '\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0&sockPath=/sockjs-node' twice.
 let removeDup = {};
 singleSpaWebpackConfig.entry.main = singleSpaWebpackConfig.entry.main.filter((item) => {
  if(!removeDup[item]) {
    removeDup[item] = true;
    return true;
  }
  return false;
 });
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
