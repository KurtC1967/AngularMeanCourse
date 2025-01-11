const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf1242l",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "ksajflaj132",
      title: "Secon server-side post",
      content: "This is coming from the server",
    },
  ];
  res.status(200).json({
    mssage: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
