import assert from "power-assert";
import Immutable from "seamless-immutable";
import reducer, { changeVisibility } from "../hello"; // reducer と テストしたい関数（changeVisibility） をインポート

test("State: changeVisibility", done => {
  const changeVisibilityAction = changeVisibility("test");
  const INITIAL_STATE = Immutable({
    // INITIAL_STATE を イミュータブルなオブジェクトとして設定
    isVisible: false,
  });
  let state = reducer(INITIAL_STATE, changeVisibilityAction);
  assert.deepEqual(state, { isVisible: true });

  state = reducer(state, changeVisibilityAction);
  assert.deepEqual(state, { isVisible: false });
  done();
});
