import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import App from './containers/App.jsx'

if (process.env.NODE_ENV !== 'production') {
  const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
    )
  }
  render(App)
  if (module.hot) module.hot.accept('./containers/App.jsx', () => render(App));
} else {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) module.hot.accept('./containers/App.jsx', () => render(App));