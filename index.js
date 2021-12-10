//API DECLARATIONS PACAKAGES IMPORTING
const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express()
const PORT = 3000

//MIDDLEWARES OF THE API ( CORS , BODY-PARSER )
app.use(cors());
app.use(bodyParser.json())

//HOME PAGE ROUTING
app.get('/', (req, res) => {
    res.send('Hello Harry')
});

//API DATA SETS ( FOR GET REQUESTS )
let api_sets = [
  {
    "q": "Remember that the best relationship is one in which your love for each other exceeds your need for each other.",
    "a": "Dalai Lama",
  },
  {
    "q": "The greatest gift that you can give to others is the gift of unconditional love and acceptance. ",
    "a": "Brian Tracy",
  },
  {
    "q": "We suffer more often in imagination than in reality.  ",
    "a": "Seneca",
  },
  {
    "q": "Nourish the mind like you would your body. The mind cannot survive on junk food.",
    "a": "Brian Tracy",
  },
  {
    "q": "He is richest who is content with the least, for content is the wealth of nature.",
    "a": "Socrates",
 },
  {
    "q": "You use a glass mirror to see your face; you use works of art to see your soul.",
    "a": "George Bernard Shaw",
 },
  {
    "q": "Courage is the price that life exacts for granting peace.",
    "a": "Amelia Earhart",
  },
  {
    "q": "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.",
    "a": "Socrates",
  },
  {
    "q": "Be who you are and say what you feel because those who mind don't matter and those who matter don't mind.",
    "a": "Dr. Seuss",
  },
  {
    "q": "Great things are not accomplished by those who yield to trends and fads and popular opinion.",
    "a": "Jack Kerouac",
 },
  {
    "q": "Trust your instincts: my first reaction is almost invariably the right one.  ",
    "a": "Estee Lauder",
  },
  {
    "q": "He who permits himself to tell a lie once, finds it much easier to do it the second time.",
    "a": "Thomas Jefferson",
  },
  {
    "q": "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.",
    "a": "Sigmund Freud",
  },
  {
    "q": "Life doesn't get easier or more forgiving, we get stronger and more resilient.",
    "a": "Steve Maraboli",
  },
  {
    "q": "The only real mistake is the one from which we learn nothing. ",
    "a": "Henry Ford",
  },
  {
    "q": "Be happy in the moment, that's enough. Each moment is all we need, not more.",
    "a": "Mother Teresa",
  },
  {
    "q": "Contemplation often makes life miserable.  We should act more, think less, and stop watching ourselves live.",
    "a": "Nicolas Chamfort",
  },
  {
    "q": "A tiger doesn't lose sleep over the opinion of sheep.",
    "a": "Shahir Zag",
  },
  {
    "q": "You miss 100% of the shots you don't take.",
    "a": "Wayne Gretzky",
  },
  {
    "q": "I can live without money, but I cannot live without love.",
    "a": "Judy Garland",
  },
  {
    "q": "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    "a": "Albert Einstein",
  },
  {
    "q": "It is best to begin at the beginning.",
    "a": "Amelia Earhart",
  },
  {
    "q": "There are no limitations to the mind except those we acknowledge...",
    "a": "Napoleon Hill",
  },
  {
    "q": "The greatest work that kindness does to others is that it makes them kind themselves.",
    "a": "Amelia Earhart",
  },
  {
    "q": "Some people dream of success, while others wake up and work hard at it.",
    "a": "Napoleon Hill",
  },
  {
    "q": "We must not sit down and wait for miracles. Up and be going!",
    "a": "John Eliot",
  },
  {
    "q": "What people need and what they want may be very different.",
    "a": "Elbert Hubbard",
  },
  {
    "q": "Absorb what is useful, discard what is useless and add what is specifically your own.  ",
    "a": "Bruce Lee",
  },
  {
    "q": "At first dreams seem impossible, then improbable, then inevitable.",
    "a": "Christopher Reeve",
  },
  {
    "q": "I am thankful to all those who said no. It's because of them, I did it myself.  ",
    "a": "Wayne Dyer",
  },
  {
    "q": "Some people find fault like there is a reward for it.  ",
    "a": "Zig Ziglar",
  },
  {
    "q": "Teachers open the door. You enter by yourself. ",
    "a": "Chinese Proverb",
  },
  {
    "q": "You are free, and that is why you are lost. ",
    "a": "Franz Kafka",
  },
  {
    "q": "An inch of time is an inch of gold but you can't buy that inch of time with an inch of gold.",
    "a": "Chinese Proverb",
  },
  {
    "q": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    "a": "Roy T. Bennett",
  },
  {
    "q": "I would rather be hated for who I am than loved for who I'm not.  ",
    "a": "Wayne Dyer",
  },
  {
    "q": "Time goes from present to past.",
    "a": "Shunryu Suzuki",
  },
  {
    "q": "The more you are grateful for what you have the more you will have to be grateful for.  ",
    "a": "Zig Ziglar",
  },
  {
    "q": "Ideas do not reach perfection in a day, no matter how much study is put upon them.",
    "a": "Alexander Graham Bell",
  },
  {
    "q": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any.",
    "a": "Thomas Jefferson",
  },
  {
    "q": "An intelligence test sometimes shows a man how smart he would have been not to have taken it.",
    "a": "Laurence J. Peter",
  },
  {
    "q": "Old age is like everything else. To make a success of it, you've got to start young.",
    "a": "Theodore Roosevelt",
  },
  {
    "q": "Remember to look up at the stars and not down at your feet.",
    "a": "Stephen Hawking",
  },
  {
    "q": "People seldom do what they believe in. They do what is convenient, then repent.",
    "a": "Bob Dylan",
  },
  {
    "q": "Don't shortchange yourself when it comes to investing in your own better future.",
    "a": "Jim Rohn",
  },
  {
    "q": "The dreamers are the saviors of the worlds.",
    "a": "James Allen",
  },
  {
    "q": "Don't let someone elses. opinion become your reality.",
    "a": "Les Brown",
  },
  {
    "q": "Every moment you get is a gift. Spend it on things that matter. Don't spend it by dwelling on unhappy things.",
    "a": "Celestine Chua",
  },
  {
    "q": "Some men see things as they are and ask why. Others dream things that never were and ask why not.",
    "a": "George Bernard Shaw",
  },
  {
    "q": "The greatest value of a picture is when it forces us to notice what we never expected to see.",
    "a": "John Tukey",
  }
]

//API ROUTES
app.get('/api', (req, res) => {
    res.send(api_sets)
})

// POST METHOD ROTES
app.post('/api', function (req, res) {
    res.send(api_sets)
  })

  //LISTENING OUR APPS
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})



