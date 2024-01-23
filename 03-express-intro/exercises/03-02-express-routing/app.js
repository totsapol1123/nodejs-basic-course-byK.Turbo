import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

app.get("/users", (req, res) => {
  // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const num = req.query.id;
  res.send(`Users ID: ${num} --(query)`);
});

app.post("/users", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const num = req.query.id;
  const name = req.query.name;

  res.send(`Users ID: ${num} , name has been updated to ${name} --(query)`);
});

app.get("/users/:userId", (req, res) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
  const id = req.params.userId;
  res.send(`User ID: ${id} --(params)`);
});

app.post("/users/:userId", (req, res) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
  const id = req.body.id;
  const name = req.body.name;
  console.log(id);
  console.log(name);
  res.send(`Users ID: ${id},name has been updated to ${name} --(post body)`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
