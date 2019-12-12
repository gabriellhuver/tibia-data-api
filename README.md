# Tibia Data API

![](https://travis-ci.org/gabriellhuver/tibia-data-api.svg?branch=master) 

A simple NodeJS interface to https://tibiadata.com/ API

Modules:
- Characters
- Guilds
- Highscores
- Houses
- News
- Worlds

### Installation

Tibia data API requires [Node.js](https://nodejs.org/) to run.

```sh
$ npm install tibia-data-api --save
```

### How To use

```js

const tibiaAPI = require('tibia-data-api')

async function example() {
	try {
		let characterInfo = await tibiaAPI.characters.getInfoByName('Akox Shena')
		console.log(characterInfo)
	} catch (error) {
		console.log(error)
	}
}

example()

```

**Character info**

```js

let characterInfo = await tibiaAPI.characters.getInfoByName('Akox Shena')


```

**Guilds**

```js

let guildByWorld = await tibiaAPI.guilds.getByWorld('Lutabra')
let guildByName = await tibiaAPI.guilds.getByName('Skeletin Alliance')

```

**Highscores**
Types: experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty.
Vocation: all, druid, knight, paladin and sorcerer.

```js

let hgInfo = await tibiaAPI.highscores.getByWorld('Lutabra')
let hgInfoByWorldAndType = await tibiaAPI.highscores.getByWorldAndType('Lutabra', 'experience')
let hgByWorldTypeAndVocation = await tibiaAPI.highscores.getByWorldTypeAndVocation('Lutabra', 'experience', 'knight')

```

**Houses**

Types: houses or guildhalls
Cities: Ab’Dendriel, Ankrahmun, Carlin, Darashia, Edron, Farmine, Gray Beach, Kazordoon, Liberty Bay, Port Hope, Rathleton, Svargrond, Thais, Venore and Yalahar (or yeah, all the Tibia cities)

```js

let housesByWorld = await tibiaAPI.houses.getByWorld('Lutabra')
let housesByWorldAndTown = await tibiaAPI.houses.getByWorldAndTown('Lutabra', 'thais')
let housesByWorldAndTownAndType = await tibiaAPI.houses.getByWorldTownAndType('Lutabra', 'thais', 'houses')
let housesByWorldAndId = await tibiaAPI.houses.getByWorldAndId('Lutabra', '40211')

```

**News**

```js

let latestNews = await tibiaAPI.news.getLatestNews()
let newsStickers = await tibiaAPI.news.getNewsTickers()
let newById = await tibiaAPI.news.getNewsById('3575')

```

**Worlds**


```js

let allWorlds = await tibiaAPI.worlds.getAll()
let worldByName = await tibiaAPI.worlds.getByName('Lutabra')

```

**Author**
- [Gabriell Huver](https://github.com/gabriellhuver)
- Based on [https://tibiadata.com/](https://tibiadata.com/)