import Factory from '../../factory/containers/root';
import Cart from '../../cart/containers/root';

export default [
  {
    key: 'factory',
    path: '/',
    exact: true,
    component: Factory,
  },
  {
    key: 'cart',
    path: '/cart',
    component: Cart,
  },
  {
    key: 'not-found',
    component: Factory,
  },
];
