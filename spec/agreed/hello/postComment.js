module.exports = {
  request: {
    path: "/hello",
    method: "POST",
    body: {
      text: "{:text}",
    },
    values: {
      text: "hello",
    },
  },
  response: {
    body: {
      results: {
        id: "{randomString:id}",
        text: "{:text}",
      },
    },
  },
};
