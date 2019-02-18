// @flow

export type FormFieldProps = {
  field: {
    name: string,
    value: any,
    onChange: Function,
    onBlur: Function,
  },
  form: {
    touched: {
      [key: string]: any,
    },
    errors: {
      [key: string]: any,
    },
    values: {
      [key: string]: any,
    },
    setFieldValue: Function,
    setFieldError: Function,
    setFieldTouched: Function,
  },
};

export type Action = {
  +type: string,
  +meta?: {
    [key: string]: any,
  },
  +payload: {
    [key: string]: any,
  },
};

export type Cart = {
  +loading: boolean,
  +message: string,
  +list: {
    [id: string]: {
      +size: string,
      +price: string,
      +toppings: Array<string>,
      +quantity: number,
    },
  },
};

export type State = {
  +cart: Cart,
};
