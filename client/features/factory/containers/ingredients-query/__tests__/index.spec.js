/* eslint-disable react/prop-types */
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import wait from 'waait';
import { GET_SIZE_BY_NAME } from '../../../queries';
import IngredientsQuery from '..';

describe('IngredientsQuery container', () => {
  const Loading = ({ message }) => (<span>{message}</span>);
  const Error = ({ message }) => (<span>{message}</span>);
  const Component = ({ basePrice }) => (
    <span>{basePrice}</span>
  );
  
  describe('render', () => {
    it('should render a loading message if query is in progress', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]} addTypename={false}>
          <IngredientsQuery
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Component}
            size="SMALL"
          />
        </MockedProvider>,
      );
      expect(wrapper.find('span').text()).toContain('Loading');
    });
    
    it('should render an error message if query was not successful', async () => {
      const mocks = [
        {
          request: {
            query: GET_SIZE_BY_NAME,
            variables: {
              name: 'MEDIUM',
            },
          },
          error: Error('error'),
        },
      ];
      const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <IngredientsQuery
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Component}
            size="MEDIUM"
          />
        </MockedProvider>,
      );
      
      await wait(0);
      wrapper.update();
      expect(wrapper.find('span').text()).toContain('try again later');
    });
  });
  
  it('should render the query response if query was successful', async () => {
    const mocks = [
      {
        request: {
          query: GET_SIZE_BY_NAME,
          variables: {
            name: 'LARGE',
          },
        },
        result: {
          data: {
            pizzaSizeByName: {
              maxToppings: 2,
              basePrice: 10,
              toppings: [
                {
                  topping: {
                    name: 'option 1',
                    price: 1,
                  },
                  defaultSelected: true,
                },
                {
                  topping: {
                    name: 'option 2',
                    price: 1.2,
                  },
                  defaultSelected: false,
                },
              ],
            },
          },
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <IngredientsQuery
          LoadingWrapper={Loading}
          ErrorWrapper={Error}
          Component={Component}
          size="LARGE"
        />
      </MockedProvider>,
    );
    
    await wait(1000);
    wrapper.update();
    expect(wrapper.find('span').text()).toEqual('10');
  });
});
