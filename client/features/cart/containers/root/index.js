// @flow
import { connect } from 'react-redux';
import { cartListIdsSelector } from '../../selectors';
import type { State } from '../../../../types';
import Component from '../../components/root';

const mapStateToProps = (state: State) => ({
  list: cartListIdsSelector(state),
});

export default connect(
  mapStateToProps,
)(Component);
