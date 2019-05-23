## shap.js

This repository wraps the javascript functionality in [shap](https://github.com/slundberg/shap) so that underlying components can be used directly.

We currently only expose the `AdditiveForceVisualizer` component.

### Usage

* `yarn add https://github.com/wealthsimple/shap.js`
* update webpack.config to include `node_modules/shap` for babel-loader / JSX transforming
* `import { AdditiveForceVisualizer } from 'shap.js'`

Full example with sample props in the /example folder.
