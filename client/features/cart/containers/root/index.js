// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { cartListIdsSelector } from '../../selectors';
import type { State } from '../../../../types';
import Component from '../../components/root';
import * as Actions from '../../actions';

const mapStateToProps = (state: State) => ({
  list: cartListIdsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
