import React from 'react';
import { shallow } from 'enzyme';
import { SelectField } from '..';

describe('SelectField component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      field: {
        name: 'select',
        value: '',
      },
      form: {
        touched: {},
        errors: {},
      },
      options: [
        'option1',
        'option2',
        'option3',
      ],
      label: 'label',
      theme: {
        colours: {
          grey: 'grey',
          black: 'black',
          red: 'red',
        },
      },
    };
  });
  
  describe('render', () => {
    it('should render a select field containing a list of options', () => {
      const wrapper = shallow(<SelectField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should render a disabled select field if disabled prop value is truthy', () => {
      propsToRender.disabled = true;
      const wrapper = shallow(<SelectField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a disabled default option if placeholder prop value is truthy', () => {
      propsToRender.placeholder = 'select an option';
      const wrapper = shallow(<SelectField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should render an error if field is touched and'
      + ' there is an error defined for the current field', () => {
      propsToRender.form = {
        touched: {
          select: true,
        },
        errors: {
          select: 'some error',
        },
      };
      const wrapper = shallow(<SelectField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
