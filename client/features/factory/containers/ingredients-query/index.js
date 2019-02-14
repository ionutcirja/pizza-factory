// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Query } from 'react-apollo';
import { GET_SIZE_BY_NAME } from '../../queries';

type Props = {
  size: string,
  LoadingWrapper: ComponentType<any>,
  ErrorWrapper: ComponentType<any>,
  Component: ComponentType<any>,
};

const IngredientsQuery = ({
  size,
  LoadingWrapper,
  ErrorWrapper,
  Component,
}: Props) => (
  <Query
    query={GET_SIZE_BY_NAME}
    variables={{ name: size }}
    skip={!size}
  >
    {({ data, loading, error }) => {
      const { pizzaSizeByName } = data || {};
      
      if (loading) {
        return (
          <LoadingWrapper
            message="Loading pizza ingredients..."
          />
        );
      }
      
      if (error) {
        return (
          <ErrorWrapper
            message="Pizza ingredients couldn't be retrieved at this time. Please try again later."
          />
        );
      }
      
      return (
        <Component {...pizzaSizeByName} />
      );
    }}
  </Query>
);

export default IngredientsQuery;
