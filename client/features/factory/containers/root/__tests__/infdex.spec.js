import React from 'react';
import { shallow } from 'enzyme';
import Factory from '..';

describe('Factory container', () => {
  describe('form', () => {
    describe('mapPropsToValues', () => {
      it('should return an object containing an empty size field value', () => {
        const wrapper = shallow(<Factory />);
        const props = wrapper.props();
        expect(props.initialValues).toEqual({
          size: '',
        });
      });
    });
    
    describe('validation', () => {
      it('should validate required size field', () => {
        const wrapper = shallow(<Factory />);
        const schema = wrapper.props().validationSchema();
        return schema.validate({ size: '' }).catch((error) => {
          expect(error.message).not.toEqual('');
        });
      });
    });
  });
});
