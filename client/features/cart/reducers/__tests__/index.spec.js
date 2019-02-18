import deepFreeze from 'deep-freeze';
import reducers from '..';

describe('Cart reducers', () => {
  it('should return the default state if the action type is not defined', () => {
    const initialState = { prop: 'value' };
    deepFreeze(initialState);
    expect(reducers(initialState, { type: 'UNDEFINED_ACTION' })).toEqual(initialState);
  });
  
  it('should add a new item into the cart list if action type is ADD_TO_CART', () => {
    const initialState = {
      prop: 'value',
      list: {
        1: {
          size: 'medium',
        },
      },
    };
    deepFreeze(initialState);
    expect(
      reducers(
        initialState,
        {
          type: 'ADD_TO_CART',
          payload: {
            2: {
              size: 'large',
            },
          },
        },
      ),
    ).toEqual({
      prop: 'value',
      list: {
        1: {
          size: 'medium',
        },
        2: {
          size: 'large',
        },
      },
    });
  });
  
  it('should update an item quantity into the cart list if action type is UPDATE_QUANTITY', () => {
    const initialState = {
      prop: 'value',
      list: {
        1: {
          size: 'medium',
          quantity: 3,
        },
      },
    };
    deepFreeze(initialState);
    expect(
      reducers(
        initialState,
        {
          type: 'UPDATE_QUANTITY',
          payload: {
            id: 1,
            value: 2,
          },
        },
      ),
    ).toEqual({
      prop: 'value',
      list: {
        1: {
          size: 'medium',
          quantity: 5,
        },
      },
    });
  });
  
  it('should remove an item from the cart list if action type is REMOVE_FROM_CART', () => {
    const initialState = {
      prop: 'value',
      list: {
        1: {
          size: 'medium',
        },
        2: {
          size: 'large',
        },
      },
    };
    deepFreeze(initialState);
    expect(
      reducers(
        initialState,
        {
          type: 'REMOVE_FROM_CART',
          payload: {
            id: '1',
          },
        },
      ),
    ).toEqual({
      prop: 'value',
      list: {
        2: {
          size: 'large',
        },
      },
    });
  });
});
