import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxGroupField } from '..';

describe('CheckboxGroupField component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      field: {
        name: 'option',
        value: [],
      },
      list: [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 4,
        },
      ],
      maxAllowed: 3,
      form: {
        touched: {},
        errors: {},
        setFieldValue: jest.fn(),
      },
      theme: {
        colours: {
          grey: 'grey',
          black: 'black',
          red: 'red',
          blue: 'blue',
        },
      },
    };
  });
  
  describe('render', () => {
    it('should render a list of checkboxes', () => {
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should render check checkboxes if their values are already in the field values list', () => {
      propsToRender.field.value = ['1', '2'];
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render some disabled checkboxes if their values are not in the field values list'
      + ' and the maximum allowed checked checkboxes number is already met', () => {
      propsToRender.field.value = ['1', '2', '3'];
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should render an error if field is touched and'
      + ' there is an error defined for the current field', () => {
      propsToRender.form = {
        touched: {
          option: true,
        },
        errors: {
          option: 'some error',
        },
      };
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('events handlers', () => {
    it('should add a checkbox value into the values list on change if it is not already contained', () => {
      propsToRender.field.value = ['1'];
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      wrapper.find('Checkbox').at(2).props().onChange({ target: { value: '2' } });
      expect(propsToRender.form.setFieldValue).toHaveBeenCalledWith('option', ['1', '2']);
    });
  
    it('should remove a checkbox value from the values list on change if it is already contained', () => {
      propsToRender.field.value = ['1', '2'];
      const wrapper = shallow(<CheckboxGroupField {...propsToRender} />);
      wrapper.find('Checkbox').at(1).props().onChange({ target: { value: '1' } });
      expect(propsToRender.form.setFieldValue).toHaveBeenCalledWith('option', ['2']);
    });
  });
});
