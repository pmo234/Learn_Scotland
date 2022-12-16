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

db.forum.insertMany([

    {
        "comment":"I really really really like this image",
        "image":"This is an image"
    },
    {
        "comment":"Scotland is bad",
        "image":"This is an image"
    }
]);

db.users.insertMany([

    {
        "name":"Peter",
        "from":"Belfast",
    },
    {
        "name":"David",
        "from":"Derby",
    }
]);