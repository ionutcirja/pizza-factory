import React from 'react';
import { shallow } from 'enzyme';
import FormField, { FieldWrapper } from '..';

jest.mock('../text', () => () => <input type="text" />);

describe('FormField component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {};
  });
  
  describe('render', () => {
    it('should render a TextField component if type prop value is undefined', () => {
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a TextField component if type prop value is text', () => {
      propsToRender.type = 'text';
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a SelectField component if type prop value is select', () => {
      propsToRender.type = 'select';
      propsToRender.options = [
        'option 1',
        'option 2',
        'option 3',
      ];
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a CheckboxGroupField component if type prop value is checkbox_group', () => {
      propsToRender.type = 'checkbox_group';
      propsToRender.list = [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
      ];
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('componentWillUnmount', () => {
    it('should reset the field value to an empty string if isFieldArray prop value is falsy', () => {
      propsToRender = {
        type: 'text',
        name: 'id',
        field: {
          name: 'id',
        },
        form: {
          touched: {},
          errors: {},
          setFieldValue: jest.fn(),
          setFieldError: jest.fn(),
          setFieldTouched: jest.fn(),
        },
      };
      const wrapper = shallow(<FieldWrapper {...propsToRender} />);
      wrapper.instance().componentWillUnmount();
      expect(propsToRender.form.setFieldValue).toHaveBeenCalledWith(
        'id',
        '',
      );
      expect(propsToRender.form.setFieldError).toHaveBeenCalledWith(
        'id',
        '',
      );
      expect(propsToRender.form.setFieldTouched).toHaveBeenCalledWith(
        'id',
        false,
      );
    });
  
    it('should reset the field value to an empty array if isFieldArray prop value is truthy', () => {
      propsToRender = {
        type: 'text',
        name: 'id',
        field: {
          name: 'id',
        },
        isFieldArray: true,
        form: {
          touched: {},
          errors: {},
          setFieldValue: jest.fn(),
          setFieldError: jest.fn(),
          setFieldTouched: jest.fn(),
        },
      };
      const wrapper = shallow(<FieldWrapper {...propsToRender} />);
      wrapper.instance().componentWillUnmount();
      expect(propsToRender.form.setFieldValue).toHaveBeenCalledWith(
        'id',
        [],
      );
      expect(propsToRender.form.setFieldError).toHaveBeenCalledWith(
        'id',
        '',
      );
      expect(propsToRender.form.setFieldTouched).toHaveBeenCalledWith(
        'id',
        false,
      );
    });
  });
});
