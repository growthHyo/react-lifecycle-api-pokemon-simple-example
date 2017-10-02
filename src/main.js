import React from 'react'
import ReactDOM from 'react-dom'

import './tests'
import '../views/index.pug'
import '../assets/index.scss'
import Root from './containers/root'

if (module.hot) {
  module.hot.accept('./tests', () => {
    console.log('OK');
  })
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    ReactDOM.render(
      <Root/>,
      document.getElementById('root')
    );
  });
}
