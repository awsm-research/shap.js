var shapWebpackConfig = require('./node_modules/shap/javascript/webpack.config');

var updatedConfig = { ...shapWebpackConfig }
// since we run our build with shap as a dependency, we need to be more specific with their exclude
updatedConfig.module.rules[1].exclude = /(shap\/javascript\/node_modules|bower_components)/

module.exports = updatedConfig
