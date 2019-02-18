/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import createStore from './store';
import rootSaga from './sagas';
import client from './config/apollo';
import './config/math';
import GlobalStyle from './style';
import routes from './features/app/routes';
import App from './features/app/components/root';

const initialData = {};
const store = createStore(initialData, window.__NODE_ENV__ !== 'production');
store.runSaga(rootSaga);

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App routes={routes} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
