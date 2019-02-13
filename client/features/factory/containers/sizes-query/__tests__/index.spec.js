/* eslint-disable react/prop-types */
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';
import wait from 'waait';
import { GET_SIZES } from '../../../queries';
import SizesQuery from '..';

describe('SizesQuery container', () => {
  const Loading = ({ message }) => (<span>{message}</span>);
  const Error = ({ message }) => (<span>{message}</span>);
  const Component = ({ options }) => (
    <ul>
      {options.map(option => <li key={option}>{option}</li>)}
    </ul>
  );
  
  describe('render', () => {
    it('should render a loading message if query is in progress', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]} addTypename={false}>
          <SizesQuery
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Component}
          />
        </MockedProvider>,
      );
      expect(wrapper.find('span').text()).toContain('Loading');
    });
  
    it('should render an error message if query was not successful', async () => {
      const mocks = [
        {
          request: {
            query: GET_SIZES,
          },
          error: Error('error'),
        },
      ];
      const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <SizesQuery
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Component}
          />
        </MockedProvider>,
      );
  
      await wait(0);
      wrapper.update();
      expect(wrapper.find('span').text()).toContain('try again later');
    });
  
    it('should render the query response if query was successful', async () => {
      const mocks = [
        {
          request: {
            query: GET_SIZES,
          },
          result: {
            data: {
              pizzaSizes: [
                {
                  name: 'small',
                },
                {
                  name: 'medium',
                },
                {
                  name: 'large',
                },
              ],
            },
          },
        },
      ];
      const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <SizesQuery
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Component}
          />
        </MockedProvider>,
      );
    
      await wait(0);
      wrapper.update();
      expect(wrapper.find('ul').length).toEqual(1);
    });
  });
});
