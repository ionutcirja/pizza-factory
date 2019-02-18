import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '..';

jest.mock('uuid/v1', () => () => 'uuid');
jest.mock('../../../components/root', () => () => <span>mock</span>);

describe('Factory container', () => {
  describe('form', () => {
    describe('mapPropsToValues', () => {
      it('should return an object containing an empty size field value', () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.props().initialValues).toEqual({
          size: '',
          basePrice: 0,
          toppings: [],
        });
      });
    });
    
    describe('validation', () => {
      it('should validate required size field', () => {
        const wrapper = shallow(<Form />);
        return wrapper.props().validationSchema().validate({ size: '' }).catch((error) => {
          expect(error.message).not.toEqual('');
        });
      });
  
      it('should validate toppings field to contain at least one item', () => {
        const wrapper = shallow(<Form />);
        return wrapper.props().validationSchema().validate({ toppings: [] }).catch((error) => {
          expect(error.message).not.toEqual('');
        });
      });
    });
    
    describe('submit', () => {
      it('should extend the values by added a quantity value,'
        + ' call add to cart prop action and reset the form', () => {
        const values = {
          size: 'large',
          basePrice: 10,
          toppings: [
            {
              name: 'option 1',
              value: '0.1',
            },
            {
              name: 'option 2',
              value: '0.2',
            },
          ],
        };
        const bag = {
          props: {
            actions: {
              addToCart: jest.fn(),
            },
          },
          resetForm: jest.fn(),
        };
        const wrapper = shallow(<Form />);
        wrapper.props().handleSubmit(values, bag);
        expect(bag.props.actions.addToCart).toHaveBeenCalledWith({
          uuid: {
            size: 'large',
            price: '10.3',
            toppings: ['option 1', 'option 2'],
            quantity: 1,
          },
        });
        expect(bag.resetForm).toHaveBeenCalled();
      });
    });
  });
});
