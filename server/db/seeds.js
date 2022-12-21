use learn_scotland
db.dropDatabase()


db.questions.insertMany([
  {
    image: "",
    question:
      "John Logie Baird invented this in 1926. There are now over 1.5 billion around the world. What is it?",
    answer: "television",
    false1: "telephone",
    false2: "telegram",
    false3: "telescope",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "The telephone was invested by Scotsman Alexander Graham Bell in 1876. What was said on the first ever phone call?",
    answer: "Mr Watson - come here - I want to see you",
    false1: "Testing, testing, 123",
    false2: "Can you hear me?",
    false3: "What's up?",
    info: "Not everyone agrees who invented the telephone. However, Alexander Graham Bell usually gets the credit. In 1876 he sent the first words by telephone. Later that year Bell made the first long-distance call. He talked with his assistant, who was 3.2 kilometers away. By 1915 people could place telephone calls across the United States. Telephone service across the Atlantic Ocean began in 1927. The first mobile phones appeared in the late 1970s.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "It's a fact of life - everyone goes to the toilet, but what type of bend do you find on most modern loos?",
    answer: "s",
    false1: "b",
    false2: "z",
    false3: "u",
    info: "Yes, Scots have really thought of everything - we can't poo without thinking of ways to perfect it. Flushing toilets have actually existed in some form for thousands of years - the ancient Stone Age site of Skara Brae on Scotland's Orkney Islands had one. However, it wasn't until 1755 when Scottish mechanic Alexander Cumming developed the 'S bend' - an invention still in use today. Without it life would be a lot smellier",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question: "What's the image above?",
    answer: "tyre",
    false1: "snake skin",
    false2: "leather handbag",
    false3: "road",
    info: "It's a tyre, like you find on every bike or car, and it was invented by a Scotsman. Yes, John Boyd Dunlop, who was born in Ayrshire gives his name to Dunlop tyres. Dunlop was actually a veterinary surgeon by trade, running a hugely successful practice, but it was his attempts to make pneumatic tyres for his son's tricycle that made him famous. Dunlop's invention was picked up by a group of cyclists, who instantly began winning races and the success of the design quickly spread.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "This is the Scott monument in Edinburgh, but what was it built to celebrate?",
    answer: "Sir Walter Scott",
    false1: "Scott of the Antarctic",
    false2: "Scotland winning the men's football World Cup",
    false3: "Scottish independence",
    info: "Sir Walter Scott is perhaps Scotland's most famous novelist. His books include Ivanhoe, Rob Roy, and Waverley (which Edinburgh's main train station is actually named after).",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "elephant house cafe",
    question:
      "What record breaking series of novels was partly written in this cafe? (Hint: You can see Edinburgh castle through the window)",
    answer: "Harry Potter",
    false1: "Narnia",
    false2: "Mr Men & Little Miss",
    false3: "His Dark Materials",
    info: "Yes it's Harry Potter, and the castle inspired Hogwarts itself. JK Rowling now lives in the city, which has been her adopted home for more than 20 years. Many other locations in Scotland influenced the books and films.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "Which of these mythical beast is actually the national animal of Scotland?",
    answer: "Unicorn",
    false1: "Dragon",
    false2: "The Loch Ness Monster",
    false3: "Griffin",
    info: "It's a unicorn and it can actually be seen on Scotland's royal coat of arms. We know that it has been a symbol of the country since at least the 1500s.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "lines on a golf club",
    question: "Say what you see",
    answer: "Golf club",
    false1: "Microphone",
    false2: "Toaster",
    false3: "Shoe",
    info: "It's a golf club. The sport was invented in the country, and St Andrews (a city on the east coast) is now known as the home of golf, although Leith may dispute that. There are now 587 courses scattered across the nation.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "tunnocks",
    question:
      "This is a Tunnock's teacake, a Scottish treat. It is made up of biscuit, chocolate and what else?",
    answer: "Marshmallow",
    false1: "Jam",
    false2: "Haggis",
    false3: "Peanut butter",
    info: "Quintessentially Scottish, Tunnock's teacakes are filled with marshmallow. The bakery that makes them was established in 1890, but it wasn't until 1956 that this product was born. The company is also well known for other delicious items like their caramel wafer.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "tweed",
    question:
      "Scotland if famous for it's fabrics - jute from Dundee, tartan from the Highlands, but what island is famous for making tweed?",
    answer: "Harris",
    false1: "Lewis",
    false2: "Bara",
    false3: "Islay",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "map showing distance from top to bottom",
    question:
      "Scotland measures roughly 730km long at it's longest point, but which group of islands are it's most northerly?",
    answer: "Shetland Isles",
    false1: "Inner Hebrides",
    false2: "Outer Hebrides",
    false3: "Orkney islands",
    info: "Yup the Shetland Isles, and they are in fact closer to Oslo in Norway than they are to London. Scotland actually has over 900 islands, of which only about 100 are inhabited.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "Ben Nevis",
    question:
      "Scotland's, and in fact the United Kingdom's tallest mountain is Ben Nevis, but whereabouts is it?",
    answer: "image1",
    false1: "image2",
    false2: "image3",
    false3: "image4",
    info: "Ben Nevis stands 1345m tall, and is the highest point for 700km around. It was once an active volcano, and it's name can be translate as 'venomous mountain'. The summit is reached by over 150,000 hikers a year, and in 1911 the Ford company even drove a car to the top.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "can we play song?",
    question:
      "Scotland's national anthem is 'Flower of Scotland'. Can you name the flower, and what instrument might you expect it to be played on?",
    answer: "Thistle and bagpipes",
    false1: "Rose and piano",
    false2: "Daffodil and harp",
    false3: "Orchid and guitar",
    info: "Thistles and bagpipes, what could be more Scottish? The songs lyrics refer to the victory of the Scots, led by Robert I, over Edward II of England at the Battle of Bannockburn in 1314",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "loch photo",
    question:
      "In Scotland, lakes are often known as Lochs, and the country has some huge ones, but can you pick the deepest one?",
    answer: "Loch Morar",
    false1: "Loch Ness",
    false2: "Loch Lomond",
    false3: "Loch Muick",
    info: "It's Loch Morar, with a depth of 328m, but it's not the biggest. Loch Lomond is the longest, and Loch Ness is the biggest by volume - it needs to be to give Nessy somewhere to hide!",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "This dandy is James VI of Scotland, who went on to become James I of England too. He is celebrated every year in the UK on what date?",
    answer: "5th November",
    false1: "25th December",
    false2: "31st October",
    false3: "4th July",
    info: "On Bonfire Night, 5th November, the UK celebrates the failure of the plot to destroy parliament, and kill James I. The plotters were foiled, captured, and convicted, the most famous of which is Guy Fawkes.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question:
      "Scotland has a gruesome and grizzly facet to it's history. Perhaps one of it's most shocking moments is when Queen Elizabeth I of England ordered the death of her cousin Mary Queen of Scots, but which of these items belonged to her?",
    answer: "the penecuik jewels image",
    false1: "",
    false2: "",
    false3: "",
    info: "These are the Penicuik Jewels, that are thought to have belonged to Mary. Mary, although Queen of the Scots, actually spent most of her life either in France or England.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "",
    question: "The world's oldest what, can be found in Stirling castle?",
    answer: "Football",
    false1: "Suit of armour",
    false2: "Golf ball",
    false3: "Tree",
    info: "Yes it's a football. It is believed to date from the 16th century, and may have belonged to Mary Queen of Scots. England may claim football's coming home, but Scots might claim otherwise.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
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


db.multiquestions.insertMany([

    {
        "question":"What is the capital of Scotland?",
        "answer":"Edinburgh",
        "wrongAnswer1": "Glasgow",
        "wrongAnswer2": "Scotland",
        "wrongAnswer3": "London",
        "statistics": ["one", "two", "three", "one", "three", "one", "one"],
        "info": "Range of stats"
    },
    {
        "question":"What is the national animal of Scotland?",
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


db.singlequestions.insertMany([
    {
        "question":"What is the capital of Scotland?",
        "answer":"Edinburgh",
    },
    {
        "question":"What is the longest river in Scotland?",
        "answer":"Tay",
    },
    {
        "question":"What is the national animal of Scotland?",
        "answer":"Unicorn",
    },
    {
        "question":"What is the tallest mountain in Scotland?",
        "answer":"Ben Nevis",
    },
    {
      "question":"In which county can you find Aberdeen?",
      "answer":"Aberdeenshire",
    },
    {
      "question":"White and what other color can you find on the Scottish flag?",
      "answer":"blue",
    },
    {
      "question":"Ms. Sturgeon is the current First Minister for Scotland. What is her first name?",
      "answer":"Nicola",
    },
    {
      "question":"Which Scottish actor was the first James Bond?",
      "answer":"Sean Connery",
    },
    {
      "question":"Who was the Patron Saint of Scotland?",
      "answer":"St Andrew",
    },
    {
      "question":"Which famous University did Prince William attend?",
      "answer":"St Andrews",
    },
    {
      "question":"What animal is used for hagis?",
      "answer":"sheep",
    },
    {
      "question":"Which city in Scotland is considered the granite city?",
      "answer":"Aberdeen",
    },
    {
      "question":"Where can you find Scotlands famous monster?",
      "answer":"Loch Ness",
    },
    {
      "question":"Which city is Scotland's newest city?",
      "answer":"Dunfermline",
    },
    {
      "question":"What is the name of the famous Harry Potter Bridge?",
      "answer":"Glenfinnan Viaduct",
    },
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