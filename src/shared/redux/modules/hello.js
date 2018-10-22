/* @flow */
import { createAction, handleActions } from "redux-actions";

/**
 * Action types
 */
const HELLO = "redux-proto/hello";
const HELLO_CHANGE_VISIBILITY = `${HELLO}/visibility/change`;

/**
 * Action creators
 */
export const changeVisibility = createAction(HELLO_CHANGE_VISIBILITY);

/**
 * Initial state
 */

export type State = {
  isVisible: boolean,
};

const INITIAL_STATE = {
  isVisible: true,
};

/**
 * Reducer
 */
export default handleActions(
  {
    [HELLO_CHANGE_VISIBILITY]: state => ({
      ...state,
      isVisible: !state.isVisible,
    }),
  },
  INITIAL_STATE,
);
