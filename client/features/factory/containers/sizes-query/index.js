// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Query } from 'react-apollo';
import { GET_SIZES } from '../../queries';

type Props = {
  LoadingWrapper: ComponentType<any>,
  ErrorWrapper: ComponentType<any>,
  Component: ComponentType<any>,
};

const SizesQuery = ({
  LoadingWrapper,
  ErrorWrapper,
  Component,
}: Props) => (
  <Query query={GET_SIZES}>
    {({ data, loading, error }) => {
      const { pizzaSizes } = data || {};
      
      if (loading) {
        return (
          <LoadingWrapper
            message="Loading pizza sizes"
          />
        );
      }
      
      if (error) {
        return (
          <ErrorWrapper
            message="Pizza sizes couldn't be retrieved at this time. Please try again later"
          />
        );
      }
      
      return (
        <Component
          options={pizzaSizes.map(item => item.name)}
        />
      );
    }}
  </Query>
);

export default SizesQuery;
