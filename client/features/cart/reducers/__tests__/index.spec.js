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
});
