import assert from "power-assert";
import configs from "../../configs";
import Hello from "../Hello";

// モックの値が入っている agreed の json5ファイルをrequireする
const getComments = require("../../../../spec/agreed/hello/getComments.js");

test("Hello: read success", () => {
  const hello = new Hello(configs);
  hello.read().then(result => {
    // Hello service の read によるリクエストの結果と agreed の値を assertion する
    assert.deepEqual(result, getComments.response.values);
  });
});
