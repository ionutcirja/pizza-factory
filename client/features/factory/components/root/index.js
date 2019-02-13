// @flow
import React from 'react';
import SizesQuery from '../../containers/sizes-query';
import FormField from '../../../forms/components/form-field';
import Loading from '../loading';
import Error from '../error';

type SizesProps = {
  options: Array<string>,
};

export const Sizes = ({ options }: SizesProps) => (
  <FormField
    name="size"
    type="select"
    placeholder="Select pizza size"
    options={options}
  />
);

type Props = {
  handleSubmit: Function,
};

const Factory = ({
  handleSubmit,
}: Props) => (
  <form onSubmit={handleSubmit}>
    <SizesQuery
      LoadingWrapper={Loading}
      ErrorWrapper={Error}
      Component={Sizes}
    />
  </form>
);

export default Factory;
