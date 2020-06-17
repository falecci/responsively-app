// @flow
import React, {useEffect} from 'react';
import {ipcRenderer} from 'electron';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StatusBar from '../../components/StatusBar';
import {setStatusBarVisibility} from '../../actions/statusBar';
import {STATUS_BAR_VISIBILITY_CHANGE} from '../../constants/pubsubEvents';

const StatusBarContainer = props => {
  useEffect(() => {
    ipcRenderer.on(STATUS_BAR_VISIBILITY_CHANGE, (_, visible) => {
      props.setStatusBarVisibility(visible);
    });
  }, []);

  return <StatusBar visible={props.visible} />;
};

function mapStateToProps(state) {
  return {
    visible: state.statusBar.visible,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setStatusBarVisibility}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBarContainer);
