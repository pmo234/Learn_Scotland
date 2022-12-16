const express = require("express");
const app = express();

// const cors = require("cors");

// app.use(cors())


app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then((client) => {
        const db = client.db('learn_scotland');
        const questionsCollection = db.collection('questions');
        const questionsRouter = createRouter(questionsCollection);
        app.use('/api/questions', questionsRouter);
    })
    .catch(console.error);

app.listen(9000, function () {
  console.log("App running on port 9000");
});
