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
    },
    {
        "question":"What is the national animal of Scotland?",
        "answer":"Unicorn",
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
        "score1":10,
        "score2":90,
        "score3":80,
        "score4":70,
    },
    {
        "name":"David",
        "from":"Derby",
        "score1":60,
        "score2":100,
        "score3":40,
        "score4":80,
    },
    {
        "name":"Struan",
        "from":"Wales",
        "score1":50,
        "score2":90,
        "score3":90,
        "score4":10,
    },
    {
        "name":"Misha",
        "from":"Russia",
        "score1":70,
        "score2":70,
        "score3":70,
        "score4":70,
    },
    {
        "name":"Jamie",
        "from":"Bonnyrigg",
        "score1":10,
        "score2":0,
        "score3":40,
        "score4":100,
    }
    
]);