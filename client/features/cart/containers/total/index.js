// @flow
import { connect } from 'react-redux';
import { cartListTotalSelector } from '../../selectors';
import type { State } from '../../../../types';
import Component from '../../components/total';

const mapStateToProps = (state: State) => ({
  price: cartListTotalSelector(state),
});

export default connect(
  mapStateToProps,
)(Component);
