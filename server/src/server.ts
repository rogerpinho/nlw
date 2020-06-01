import express from "express";

const app = express();

app.get("/users", (req, resp) => {
  resp.json({"users": "Roger"});
});

app.listen(3333);