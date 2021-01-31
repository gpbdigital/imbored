import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
      options: [
      {
         "id": 1,
         "title": "Rave.dj",
         "description": "Create your own bangers and mash up your fave songs from YouTube.",
         "img": "",
         "link": "https://rave.dj/",
         "categories": ["fun"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 2,
         "title": "Erowid",
         "description": "A brief history of just about every single drug, available for human consumption.",
         "img": "",
         "link": "https://erowid.org/",
         "categories": ["educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 3,
         "title": "Randomstreetview.com",
         "description": "Snooping, but on a global level. Fancy a random trip around the world? Sure you might as well.",
         "img": "",
         "link": "https://randomstreetview.com/",
         "categories": ["fun"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 4,
         "title": "Zooniverse.org - People powered research",
         "description": "You could watch another episode of that random Netflix documentary you're determined to stick with. Or you could help scientists discover brand new supermassive black holes from your couch, your choice.",
         "img": "",
         "link": "https://www.zooniverse.org/",
         "categories": ["fun", "educational"],
         "time": ["1hr"]
       },
       {
         "id": 5,
         "title": "The Wiki Game",
         "description": "Race against players from all around the world to get to the next wiki page, using only hyperlinks.",
         "img": "",
         "link": "htps://www.thewikigame.com/",
         "categories": ["fun", "challenging"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 6,
         "title": "SaltyBet.com",
         "description": "A site where you can bet on fights between two AI bots. Playing with fake money is always fun!",
         "img": "",
         "link": "https://www.saltybet.com/",
         "categories": ["fun"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 7,
         "title": "Radiooooo.com",
         "description": "Pick the country, pick the decade from 1900's to today and let the music take you away on the most wonderful adventure.",
         "img": "",
         "link": "http://radiooooo.com/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 8,
         "title": "Sandspiel.club",
         "description": "A falling sand game that provides a relaxing and creative place to play with elements like sand, water, plants, and fire.",
         "img": "",
         "link": "https://sandspiel.club/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 9,
         "title": "Game About Squares",
         "description": "A Simple puzzle game that takes seconds to learn but impossible to master!",
         "img": "",
         "link": "http://gameaboutsquares.com",
         "categories": ["fun", "challenging"],
         "time": ["1hr"]
       },
       {
         "id": 10,
         "title": "Short Trip by Alexander Perrin",
         "description": "Take a journey through stunning hand drawn countryside, the perfect way to escape lockdown.",
         "img": "",
         "link": "https://alexanderperrin.com.au/paper/shorttrip/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 11,
         "title": "Combination Lock Cracker",
         "description": "If you dream of trying to crack a code on a simple lock, then this is the place for you! If not… best to avoid.",
         "img": "",
         "link": "http://www.combinationlock.co.uk/",
         "categories": ["fun", "challenging"],
         "time": ["1hr"]
       },
       {
         "id": 12,
         "title": "Scale of the Universe",
         "description": "Find out just how insignificant you REALLY are with this interactive and fascinating map of the universe, illustrating the size and scale of just about everything.",
         "img": "",
         "link": "https://scaleofuniverse.com/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 13,
         "title": "Historic Environment Viewer",
         "description": "On-line digital service provided by the Department of Arts, Heritage and the Gaeltacht to help everyone access the historic database of Ireland's most historical sites.",
         "img": "",
         "link": "https://webgis.archaeology.ie/historicenvironment/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 14,
         "title": "Draw a perfect circle",
         "description": "Can you draw a perfect circle? Spoiler Alert: it's very difficult.",
         "img": "",
         "link": "https://vole.wtf/perfect-circle/",
         "categories": ["fun", "challenging"],
         "time": ["5min"]
       },
       {
         "id": 15,
         "title": "Geoguessr.com",
         "description": "A geography game which takes you on a journey around the world and challenges your ability to recognize your surroundings.",
         "img": "",
         "link": "https://www.geoguessr.com",
         "categories": ["fun", "challenging"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 16,
         "title": "Chrome Music Lab",
         "description": "Make your own music from scratch, surely it's not that hard… amirite?",
         "img": "",
         "link": "https://musiclab.chromeexperiments.com/Song-Maker/",
         "categories": ["fun"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 17,
         "title": "Little Alchemy",
         "description": "Starting with four basic elements, you get the chance to start a brand new world. Sounds dreamy.",
         "img": "",
         "link": "https://littlealchemy.com/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 18,
         "title": "The Impossible Quiz",
         "description": "It's like Univeristy Challenge but with less Paxman.",
         "img": "",
         "link": "https://poki.com/en/g/the-impossible-quiz",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 19,
         "title": "Neal.fun",
         "description": "Bringing back the weird net, one page at a time.",
         "img": "",
         "link": "https://neal.fun/",
         "categories": ["fun", "educational", "challenging"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 20,
         "title": "Archive.org",
         "description": "Free universal access to books, movies & music.",
         "img": "",
         "link": "https://archive.org/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 21,
         "title": "Wayback Machine",
         "description": "424 billion archived web pages.",
         "img": "",
         "link": "https://archive.org/web/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 22,
         "title": "User Inyerface",
         "description": "This site shows the sheer frustration of poorly designed user experience, don't worry it's fun. Promise.",
         "img": "",
         "link": "https://userinyerface.com/",
         "categories": ["fun", "educational"],
         "time": ["5min"]
       },
       {
         "id": 23,
         "title": "The Useless Web",
         "description": "There is no point to this. Enjoy!",
         "img": "",
         "link": "https://theuselessweb.com/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 24,
         "title": "My 90s TV",
         "description": "Grab your tamagotchi stick on your Woman's Heart CD and settle in for hours of 90's TV nostalgia.",
         "img": "",
         "link": "https://www.my90stv.com/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 25,
         "title": "My 80s TV",
         "description": "Finally a chance to break out those immense shoulder pads again. Hours of 80's nostalgia to catch up on.",
         "img": "",
         "link": "https://www.my80stv.com/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 26,
         "title": "My 70s TV",
         "description": "If you remember the 70's you weren't there, that's what they say… isn't it? Hours of 70's nostalgia at your finger tips.",
         "img": "",
         "link": "https://www.my70stv.com/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 27,
         "title": "Human Benchmark",
         "description": "Test yourself against everyone with brain games and competitions galore.",
         "img": "",
         "link": "https://www.humanbenchmark.com/",
         "categories": ["educational", "challenging"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 28,
         "title": "Windows93.net",
         "description": "Relive the glory days of Windows '93 with an emulator of eh.. Windows '93!",
         "img": "",
         "link": "https://www.windows93.net/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 29,
         "title": "Drench - A colour board game",
         "description": "Drench the board with a single color to win the game. 30 moves to drench the board!",
         "img": "",
         "link": "http://www.flashbynight.com/drench/",
         "categories": ["fun", "challenging"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 30,
         "title": "Play Emulator",
         "description": "Play 100's of classic console games from the Snes, N64, PS1, Sega Megadrive and more.",
         "img": "",
         "link": "https://www.playemulator.com/",
         "categories": ["fun", "challenging"],
         "time": ["1hr", "all"]
       },
       {
         "id": 31,
         "title": "Sporcle.com",
         "description": "A perfect way to prep for your first post lock down pub quiz!",
         "img": "",
         "link": "https://www.sporcle.com/",
         "categories": ["fun", "educational", "challenging"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 32,
         "title": "Ome TV",
         "description": "Get to know random people from around the world, from the comfort of your couch. What could possibly go wrong?",
         "img": "",
         "link": "https://ome.tv/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 33,
         "title": "TV Tropes",
         "description": "An all-devouring pop-culture wiki, catalogs and cross-references recurrent plot devices, archetypes, and tropes in all forms of media.",
         "img": "",
         "link": "https://tvtropes.org/",
         "categories": ["fun", "educational"],
         "time": ["1hr", "all"]
       },
       {
         "id": 34,
         "title": "Expore.org - Animal livecams",
         "description": "Have a peak at live streams of 100's of different animals from around the world.",
         "img": "",
         "link": "https://explore.org/livecams/currently-live/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 35,
         "title": "Incognitube",
         "description": "Randomly watch millions of YouTube vids that have less than 100 views.",
         "img": "",
         "link": "https://www.incognitube.com/",
         "categories": ["fun"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 36,
         "title": "Classic Reload",
         "description": "6000+ random old school console games preserved and ready to play for future generations. They will thank us… maybe.",
         "img": "",
         "link": "https://classicreload.com/",
         "categories": ["fun", "educational", "challenging"],
         "time": ["5min", "1hr", "all"]
       },
       {
         "id": 37,
         "title": "Thispersondoesnotexist.com",
         "description": "Refresh to the page and the algorithm generates a hyper-realistic but absolutely fake image of a person.",
         "img": "",
         "link": "https://www.thispersondoesnotexist.com/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 38,
         "title": "Pixel Space by Josh Worth",
         "description": "Space. It's pretty big. This site shows just how big it is in a really easy and pretty mindblowing way.",
         "img": "",
         "link": "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 39,
         "title": "Hackertyper.net",
         "description": "Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture.",
         "img": "",
         "link": "https://hackertyper.net/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 40,
         "title": "Isitfridayyet.net",
         "description": "Is it Friday yet? Click to find out.",
         "img": "",
         "link": "http://isitfridayyet.net/",
         "categories": ["fun"],
         "time": ["5min"]
       },
       {
         "id": 41,
         "title": "Music Map",
         "description": "Type the name of a band and you'll be served a selection of bands and artists to search up on Spotify.",
         "img": "",
         "link": "https://www.music-map.com/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 42,
         "title": "Ian's Shoelace Site",
         "description": "People have been tripping over themselves to get onto this site. Sorry, it's a site all about Shoelaces.",
         "img": "",
         "link": "https://www.fieggen.com/shoelace/",
         "categories": ["fun"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 43,
         "title": "Futureme.org",
         "description": "The future you will be calm, reasonable and incredibly organised. Send future you an email to remind yourself how weren't any of those things years ago.",
         "img": "",
         "link": "https://www.futureme.org/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       },
       {
         "id": 44,
         "title": "Thetruesize.com",
         "description": "Is Greenland really as big as all of Africa? You may be surprised at what you find!",
         "img": "",
         "link": "https://thetruesize.com/",
         "categories": ["fun", "educational"],
         "time": ["5min", "1hr"]
       }


      ],
      user: {
        categories: [],
        time: "",
      },
      results: [],
      result: {
        id: "",
        title: "",
        description: "",
        img: "",
        link: "",
        categories: [],
        time: []
      }
    },

    mutations: {
      updateUserCategories(state, categories) {
        state.user.categories = categories;
      },
      updateUserTime(state, time) {
        state.user.time = time;
      },
      updateResult(state, result) {
        state.result.id = result.id;
        state.result.title = result.title;
        state.result.description = result.description;
        state.result.img = result.img;
        state.result.link = result.link;
        state.result.categories = result.categories;
        state.result.time = result.time;
      }
    },

    getters: {
      /*getUserResults: state => {
        return state.options.filter(time => state.user.time)
      }*/
    }

});