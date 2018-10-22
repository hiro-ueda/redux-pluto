/* @flow */
import { createAction, handleActions } from "redux-actions";
import { steps } from "redux-effects-steps";
import { fetchrRead } from "redux-effects-fetchr";
// リクエスト送信、 成功、 失敗の Action Type を作成する util
import { createAsyncActionTypes } from "./utils";

/**
 * Action types
 */
const HELLO = "redux-proto/hello";
const HELLO_CHANGE_VISIBILITY = `${HELLO}/visibility/change`;

// BFF の API 呼び出しの Action Typesを定義
const [
  HELLO_GET_COMMENTS_REQUEST,
  HELLO_GET_COMMENTS_SUCCESS,
  HELLO_GET_COMMENTS_FAIL,
] = createAsyncActionTypes(`${HELLO}/get/comments`);

/**
 * Action creators
 */
export const changeVisibility = createAction(HELLO_CHANGE_VISIBILITY);

//  BFF の API 呼び出しに用いる ActionCreater を定義
export const getCommentsRequest = createAction(HELLO_GET_COMMENTS_REQUEST);
export const getCommentsSuccess = createAction(HELLO_GET_COMMENTS_SUCCESS);
export const getCommentsFail = createAction(HELLO_GET_COMMENTS_FAIL);

// component 側で呼び出す関数を定義
export function getComments() {
  return steps(
    getCommentsRequest({ resource: "hello" }),
    ({ payload }) => fetchrRead(payload), // 先程作成した name が hello の service 内の read メソッドを呼び出す
    [getCommentsSuccess, getCommentsFail],
  );
}

/**
 * Initial state
 */

export type State = {
  isVisible: boolean,
  comments: Array<{ id: string, text: string }>,
  loading: boolean,
  loaded: boolean,
};

const INITIAL_STATE = {
  isVisible: true,
  comments: [], // INITIAL_STATE に comments を追加
  loading: false,
  loaded: false,
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
    [HELLO_GET_COMMENTS_REQUEST]: state => ({
      ...state,
      loading: true,
      loaded: false,
    }),
    // request が成功した際には、受け取った comments を state に追加する
    [HELLO_GET_COMMENTS_SUCCESS]: (state, action) => {
      const {
        payload: {
          data: { comments },
        },
      } = action;
      return {
        ...state,
        comments,
        loading: false,
        loaded: true,
      };
    },
    // request が失敗した際には、受け取った error を state に追加する
    [HELLO_GET_COMMENTS_FAIL]: (state, action) => {
      const { error } = action;
      return {
        ...state,
        error,
        loading: false,
        loaded: false,
      };
    },
  },
  INITIAL_STATE,
);
