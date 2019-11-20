const tibiaAPI = require('../lib')


testCharacterInfo()
testGuildByName()
testGuildByWorld()
testHighscoresGetByWorld()
testHighscoresGetByWorldAndType()
testHighscoresGetByWorldTypeAndVocation()
testHousesGetHousesByWorld()
testHousesGetByWorldAndTown()
testHousesGetByWorldAndTownAndType()
testHousesGetByWorldAndId()
testGetLatestNews()
testGetNewsTickers()
testGetNewsByID()
testWorldsGetAll()
testWorldsGetByName()

// Worlds test
async function testWorldsGetByName() {
    try {
        let worldByName = await tibiaAPI.worlds.getByName('Lutabra')
        if (worldByName.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}


async function testWorldsGetAll() {
    try {
        let allWorlds = await tibiaAPI.worlds.getAll()
        if (allWorlds.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

// News test

async function testGetNewsByID() {
    try {
        let newById = await tibiaAPI.news.getNewsById('3575')
        if (newById.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}


async function testGetNewsTickers() {
    try {
        let newsStickers = await tibiaAPI.news.getNewsTickers()
        if (newsStickers.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testGetLatestNews() {
    try {
        let latestNews = await tibiaAPI.news.getLatestNews()
        if (latestNews.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}


// Houses test
/**
 * Default value of town is Ab’Dendriel.
You can use following fields instead: Ab’Dendriel, Ankrahmun, Carlin, Darashia, Edron, Farmine, Gray Beach, Kazordoon, Liberty Bay, Port Hope, Rathleton, Svargrond, Thais, Venore and Yalahar (or yeah, all the Tibia cities).

Default value of type is houses.
You can use following fields instead: houses and guildhalls. 
 */
async function testHousesGetByWorldAndId() {
    try {
        let housesByWorldAndId = await tibiaAPI.houses.getByWorldAndId('Lutabra', '40211')
        if (housesByWorldAndId.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testHousesGetByWorldAndTownAndType() {
    try {
        // houses or guildhalls
        let housesByWorldAndTownAndType = await tibiaAPI.houses.getByWorldTownAndType('Lutabra', 'thais', 'houses')
        if (housesByWorldAndTownAndType.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testHousesGetByWorldAndTown() {
    try {
        let housesByWorldAndTown = await tibiaAPI.houses.getByWorldAndTown('Lutabra', 'thais')
        if (housesByWorldAndTown.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testHousesGetHousesByWorld() {
    try {
        let housesByWorld = await tibiaAPI.houses.getByWorld('Lutabra')
        if (housesByWorld.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}


// Highscores test
async function testHighscoresGetByWorldTypeAndVocation() {
    // types experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty
    // You can use following fields instead: all, druid, knight, paladin and sorcerer.
    try {
        let highscoresInfoByWorldTypeAndVocation = await tibiaAPI.highscores.getByWorldTypeAndVocation('Lutabra', 'experience', 'knight')
        if (highscoresInfoByWorldTypeAndVocation.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testHighscoresGetByWorldAndType() {
    try {
        let highscoresInfoByWorldAndType = await tibiaAPI.highscores.getByWorldAndType('Lutabra', 'experience')
        if (highscoresInfoByWorldAndType.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}

async function testHighscoresGetByWorld() {
    try {
        let highscoresInfo = await tibiaAPI.highscores.getByWorld('Lutabra')
        if (highscoresInfo.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}


// Guilds test
async function testGuildByName() {
    try {
        let guildInfo = await tibiaAPI.guilds.getByName('Skeletin Alliance')
        if (guildInfo.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}
async function testGuildByWorld() {
    try {
        let guildInfo = await tibiaAPI.guilds.getByWorld('Lutabra')
        if (guildInfo.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}
// Characters test
async function testCharacterInfo() {
    try {
        let characterInfo = await tibiaAPI.characters.getInfoByName('Akox Shena')
        if (characterInfo.information) console.log('Test OK')
    } catch (error) {
        console.log(error)
    }
}