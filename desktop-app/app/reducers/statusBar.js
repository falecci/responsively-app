// @flow
import {SET_STATUS_BAR_VISIBILITY} from '../actions/statusBar';

export type StatusBarStateType = {visible: boolean};

export default function app(
  state: StatusBarStateType = {
    visible: true,
  },
  action: Action
) {
  switch (action.type) {
    case SET_STATUS_BAR_VISIBILITY:
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
}
