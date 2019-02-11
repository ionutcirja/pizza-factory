// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Switch, Route } from 'react-router';

type Props = {
  routes: Array<{
    key: 'string',
    path: string,
    component: ComponentType<Props>,
  }>,
};

const App = ({ routes }) => [
  <Switch key="routes">
    {routes.map(route => (
      <Route
        key={route.key}
        {...route}
      />
    ))}
  </Switch>,
];

export default App;
