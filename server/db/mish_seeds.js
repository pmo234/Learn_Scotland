use learn_scotland
db.dropDatabase()

db.questions.insertMany([

    {
        "question":"What is the capital of Scotland?",
        "img": "./img/oldflag.jpeg",
        "img2": "./img/logo512.png",
        "answer":"Edinburgh",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "Range of stats"
    },
    {
        "question":"What is the national animal of Scotland?",
        "img": "./img/oldflag.jpeg",
        "answer":"Unicorn",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },


    {
        "question":"the capital?",
        "answer":"Edinburgh",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "Range of stats"
    },

    {
        "question":"is ",
        "answer":"Edinburgh",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "Range of stats"
    },

    {
        "question":"What ",
        "answer":"Edinburgh",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "Range of stats"
    }
]);