use learn_scotland
db.dropDatabase()

db.questions.insertMany([

    {
        "question":"What is the capital of Scotland?",
        "answer":"Edinburgh",
    },
    {
        "question":"What is the national animal of Scotland?",
        "answer":"Unicorn",
    }
]);