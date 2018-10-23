import assert from "power-assert";
import configs from "../../configs";
import Hello from "../Hello";

test("Hello: create success", () => {
  const hello = new Hello(configs);
  const body = { text: "test" };
  hello.create("", "", "", body).then(result => {
    // レスポンス結果に id が含まれているか確認
    assert.ok(result.results.id);
    // 送信したテキストがそのまま返却されているか確認
    assert.equal(result.results.text, body.text);
  });
});
