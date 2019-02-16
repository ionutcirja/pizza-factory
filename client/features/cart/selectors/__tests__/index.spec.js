import {
  cartListSelector,
  cartListNumSelector,
} from '..';

describe('Cart selectors', () => {
  describe('cartListSelector', () => {
    it('should return the cart list', () => {
      const list = {
        1: { size: 'large' },
        2: { size: 'medium' },
      };
      expect(cartListSelector({ cart: {} })).toEqual({});
      expect(cartListSelector({ cart: { list } })).toEqual(list);
    });
  });
  
  describe('cartListNumSelector', () => {
    it('should return the cart list items number', () => {
      const list = {
        1: { size: 'large', quantity: 1 },
        2: { size: 'medium', quantity: 4 },
      };
      expect(cartListNumSelector({ cart: { list } })).toEqual(5);
    });
  });
});
