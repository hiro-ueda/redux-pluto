import { create as createAxios } from "axios";
import { read, create } from "./utils";

export default class Hello {
  constructor(config) {
    this.name = "hello";
    // server の設定ファイル (src/server/configs) の中から agreed 向けの axios を設定
    this.axios = createAxios(config.agreed.config.axios);
    this.pathname = "hello";
  }

  read(req, resource, params = {}, config) {
    return read(this.axios, this.name, this.pathname, params, {});
  }

  create(req, resource, params, body, config) {
    return create(this.axios, this.name, this.pathname, body, params, {});
  }
}
