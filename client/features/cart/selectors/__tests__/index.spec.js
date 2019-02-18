import {
  cartListSelector,
  cartListNumSelector,
  cartListIdsSelector,
  cartIdSelector,
  cartListTotalSelector,
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
  
  describe('cartListIdsSelector', () => {
    it('should return an array containing the cart list items ids', () => {
      const list = {
        1: { size: 'large', quantity: 1 },
        2: { size: 'medium', quantity: 4 },
      };
      expect(cartListIdsSelector({ cart: { list } })).toEqual(['1', '2']);
    });
  });
  
  describe('cartIdSelector', () => {
    it('should return the selected item props and compute the total price based on quantity', () => {
      const list = {
        1: { size: 'large', quantity: 1, price: '1.2' },
        2: { size: 'medium', quantity: 4, price: '1.3' },
      };
      expect(cartIdSelector(2)({ cart: { list } })).toEqual({
        size: 'medium',
        quantity: 4,
        price: '5.2',
      });
    });
  });
  
  describe('cartListTotalSelector', () => {
    it('should return the selected item props and compute the total price based on quantity', () => {
      const list = {
        1: { size: 'large', quantity: 5, price: '1.2' },
        2: { size: 'medium', quantity: 4, price: '1.3' },
      };
      expect(cartListTotalSelector({ cart: { list } })).toEqual('11.2');
    });
  });
});
