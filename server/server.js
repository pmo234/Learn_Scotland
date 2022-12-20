const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

//________Misha. this connection is under construction _____
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("learn_scotland");
    const questionsCollection = db.collection("questions");
    const forumCollection = db.collection("forum");
    const usersCollection = db.collection("users");
    const singleQCollection = db.collection("singlequestions");
    const MultiQCollection = db.collection("multiquestions");
    const questionsRouter = createRouter(questionsCollection);
    const forumRouter = createRouter(forumCollection);
    const usersRouter = createRouter(usersCollection);
    const singleQRouter = createRouter(singleQCollection);
    const MultiQRouter = createRouter(MultiQCollection);
    app.use("/api/questions", questionsRouter);
    app.use("/api/forum", forumRouter);
    app.use("/api/users", usersRouter);
    app.use("/api/singlequestions", singleQRouter);
    app.use("/api/multiquestions", MultiQRouter);
  })
  .catch(console.error);

app.listen(9000, function () {
  console.log("App running on port 9000");
});
// ________________________________________________________

// MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("learn_scotland");
//     const questionsCollection = db.collection("questions");
//     const questionsRouter = createRouter(questionsCollection);
//     app.use("/api/questions", questionsRouter);
//   })
//   .catch(console.error);

// MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("learn_scotland");
//     const forumCollection = db.collection("forum");
//     const forumRouter = createRouter(forumCollection);
//     app.use("/api/forum", forumRouter);
//   })
//   .catch(console.error);

// MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("learn_scotland");
//     const usersCollection = db.collection("users");
//     const usersRouter = createRouter(usersCollection);
//     app.use("/api/users", usersRouter);
//   })
//   .catch(console.error);

//   MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("learn_scotland");
//     const usersCollection = db.collection("singlequestions");
//     const usersRouter = createRouter(usersCollection);
//     app.use("/api/singlequestions", usersRouter);
//   })
//   .catch(console.error);

//   MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
//   .then((client) => {
//     const db = client.db("learn_scotland");
//     const usersCollection = db.collection("multiquestions");
//     const usersRouter = createRouter(usersCollection);
//     app.use("/api/multiquestions", usersRouter);
//   })
//   .catch(console.error);

// app.listen(9000, function () {
//   console.log("App running on port 9000");
// });
