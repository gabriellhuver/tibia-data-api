# Tibia Data API


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
$ npm install --save
```
### How To use
```js
const tibiaAPI = require('tibia-data-api')

async function example() {
    try {
        let characterInfo = await tibiaAPI.characters
            .getInfoByName('Akox Shena')
        console.log(characterInfo)
    } catch (error) {
        console.log(error)
    }
}
example()
```

Character info 
```js
    let characterInfo = await tibiaAPI.characters.getInfoByName('Akox Shena')
```
Guilds
```js
    let guildByWorld = await tibiaAPI.guilds.getByWorld('Lutabra')
    let guildByName = await tibiaAPI.guilds.getByName('Skeletin Alliance')
```
Highscores

Types: experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty.
Vocation: all, druid, knight, paladin and sorcerer.
```js
    let highscoresInfo = await tibiaAPI.highscores.getByWorld('Lutabra')
    let highscoresInfoByWorldAndType = await tibiaAPI.highscores
        .getByWorldAndType('Lutabra', 'experience')
    let highscoresInfoByWorldTypeAndVocation = await tibiaAPI.highscores
        .getByWorldTypeAndVocation('Lutabra', 'experience', 'knight')
```
Work in progress......