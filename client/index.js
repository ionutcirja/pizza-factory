/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import createStore from './store';
import client from './config/apollo';
import GlobalStyle from './style';
import routes from './features/app/routes';
import App from './features/app/components/root';

const initialData = {};
const store = createStore(initialData, window.__NODE_ENV__ !== 'production');

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App routes={routes} />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
