import React from 'react';
import ReactDOM from 'react-dom';
import { AdditiveForceVisualizer } from 'shap.js'

const data = require('./sample-input.json');

const Viz = () => (
  <AdditiveForceVisualizer {...data} />
);

ReactDOM.render(<Viz />, document.getElementById('root'));
