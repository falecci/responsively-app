// @flow
export const SET_STATUS_BAR_VISIBILITY = 'SET_STATUS_BAR_VISIBILITY';

export function setStatusBarVisibility(visible) {
  return {
    type: SET_STATUS_BAR_VISIBILITY,
    visible,
  };
}
