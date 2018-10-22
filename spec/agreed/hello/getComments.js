module.exports = {
  request: {
    path: "/hello",
    method: "GET",
  },
  response: {
    body: {
      results: {
        // response の形式
        comments: [
          {
            id: "{:comments.0.id}",
            text: "{:comments.0.text}",
          },
          "{:comments.1-last}",
        ],
      },
    },
    values: {
      // response の値
      comments: [
        {
          id: "0001",
          text: "hello",
        },
        {
          id: "0002",
          text: "world",
        },
      ],
    },
  },
};
