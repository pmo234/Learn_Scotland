use learn_scotland
db.dropDatabase()

db.questions.insertMany([
  {
    image: "https://pbs.twimg.com/media/EeBWO97VoAMZm3W.jpg",
    question:
      "John Logie Baird invented this in 1926. There are now over 1.5 billion around the world. What is it?",
    answer: "television",
    false1: "telephone",
    false2: "telegram",
    false3: "telescope",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "https://cdn.britannica.com/19/180119-138-29F20103/Overview-invention-telephone-focus-work-Alexander-Graham.jpg",
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
    image: "https://i2-prod.dailyrecord.co.uk/incoming/article21336654.ece/ALTERNATES/s615/0_JS203970484.jpg",
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
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t31.18172-8/1506197_269767449848280_904406115_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=eegXT75U4GEAX923kT_&_nc_ht=scontent-lcy1-1.xx&oh=00_AfCXUy-jGPNx3UNSn0EKSre7Iq4uLQLlvXkJ8rXdkCLjIw&oe=63CA728B",
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
    image: "./img/tunnock.jpeg",
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
    image: "https://www.masterclass.com/cdn-cgi/image/width=1920,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/4bOtAKNWHtuj0qKVfy9kwT/b372869f15f26dc94eb0ac7fd8d6c02c/AdobeStock_174850669.jpeg",
    question:
      "Scotland if famous for it's fabrics - jute from Dundee, tartan from the Highlands, but what island is famous for making tweed?",
    answer: "Harris",
    false1: "Lewis",
    false2: "Bara",
    false3: "Islay",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
  {
    image: "https://www.freeworldmaps.net/europe/united-kingdom/scotland/scotland-physical-map.jpg",
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
    image: "https://www.historic-uk.com/wp-content/uploads/2017/04/loch-ness-monster-2800x1440.jpg",
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
    image: "https://www.royal.uk/sites/default/files/images/encyclopaedia/editrs164498_401186-lpr_0.jpg",
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
    image: "https://i2-prod.mirror.co.uk/incoming/article22359600.ece/ALTERNATES/s1200d/0_Castle1.jpg",
    question: "The world's oldest what, can be found in Stirling castle?",
    answer: "Football",
    false1: "Suit of armour",
    false2: "Golf ball",
    false3: "Tree",
    info: "Yes it's a football. It is believed to date from the 16th century, and may have belonged to Mary Queen of Scots. England may claim football's coming home, but Scots might claim otherwise.",
    statistics: ["one", "two", "three", "one", "three", "one", "one"],
  },
]);

db.mapquestions.insertMany([{
  "img": "./img/ben_nevis.jpeg",
  "position": {"lat": 56.7969, "lng": -5.0036},
  "question": "Scotland, and the UK's tallest mountain is Ben Nevis. Can you click on it's position?",
  "info": "Ben Nevis stands 1345m tall, and is the highest point for 700km around. It was once an active volcano, and it's name can be translate as 'venomous mountain'. The summit is reached by over 150,000 hikers a year, and in 1911 the Ford company even drove a car to the top.",
},
{
  "img": "./img/monument-450.jpg",
  "position": {"lat": 56.1388, "lng": -3.9179},
  "question": "This is the Wallace monument, a landmark built to commemorate William Wallace's victory over the English army. It overlooks the battlefield, but do you know where it is?",
  "info": "The victory was at the Battle of Stirling Bridge, so unsurprisingly the monument stands above the city of Stirling.",
},
{
  "img": "./img/whisky_still.jpeg",
  "position": {"lat": 55.6301, "lng": -6.1522},
  "question": "Scotland is famous for it's whiskys, that come from all over the country, but some of the most well known are from the Isle of Islay. Do you know where it is?",
  "info": "The photo is a whisky pot still, which is a key item used in the making of the spirit. In Scottish Gaelic whisky is known as uisge beatha, which means water of life, and instead of cheers you may here people saying slainte."
},
{
  "img": "./img/culloden.jpeg",
  "position": {"lat": 57.4877, "lng": -4.1421},
  "question": "The last pitched battle to occur on British soil took place in Culloden in 1746, but can you find where it is?",
  "info": "It's very close to Inverness, the northernmost city in the UK. At the battle, the Jacobite rebellion was defeated by the British Government, and Bonnie Prince Charlie's claim to the throne was lost.",
},
{
  "img": "./img/old_man_hoy.jpeg",
  "position": {"lat": 58.8833, "lng": -3.4167},
  "question": "This is the Old Man of Hoy, and you can visit him if you travel to the Orkneys. Does that help you find it?",
  "info": "The Old Man of Hoy is a 449-foot sea stack on Hoy, part of the Orkney archipelago off the north coast of Scotland. Formed from Old Red Sandstone, it is one of the tallest stacks in the United Kingdom. The Old Man is popular with climbers, and was first climbed in 1966."
}])

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
        "score1":5,
        "score2":0,
        "score3":25,
        "score4":0,
        "comments":["This is a picture of something a found 0"],
        "image":"This is an image"

    },
    {
        "name":"David",
        "from":"Derby",
        "score1":4,
        "score2":3,
        "score3":20,
        "score4":4,
        "comments":["This is a picture of something a found 1"],
        "image":"This is an image"
    },
    {
        "name":"Struan",
        "from":"Wales",
        "score1":1,
        "score2":3,
        "score3":19,
        "score4":3,
        "comments":["This is a picture of something a found 2"],
        "image":"This is an image"
    },
    {
        "name":"Misha",
        "from":"Russia",
        "score1":2,
        "score2":2,
        "score3":22,
        "score4":2,
        "comments":["This is a picture of something a found 3"],
        "image":"This is an image"
    },
    {
        "name":"Jamie",
        "from":"Bonnyrigg",
        "score1":1,
        "score2":1,
        "score3":15,
        "score4":1,
        "comments":["This is a picture of something a found 5"],
        "image":"This is an image"

    }
]);
