// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { cartIdSelector } from '../../selectors';
import type { State } from '../../../../types';
import Component from '../../components/item';
import * as Actions from '../../actions';

type Props = {
  id: string,
};

const mapStateToProps = (state: State, props: Props) => ({
  ...cartIdSelector(props.id)(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
