import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

describe('App component', () => {
  const Root = () => (<span>root component</span>);
  const Page = () => (<span>page component</span>);
  
  const propsToRender = {
    routes: [
      {
        key: 'root',
        path: '/',
        component: Root,
      },
      {
        key: 'page',
        path: '/page',
        component: Page,
      },
    ],
  };
  
  it('should render a collection of routes', () => {
    const wrapper = shallow(<App {...propsToRender} />);
    expect(wrapper).toMatchSnapshot();
  });
});
