const tibiaAPI = require('../lib')


//testCharacterInfo()
//testGuildByName()
//testGuildByWorld()
//testHighscoresGetByWorld()
//testHighscoresGetByWorldAndType()
//testHighscoresGetByWorldTypeAndVocation()
//testHousesGetHousesByWorld()
//testHousesGetByWorldAndTown()
//testHousesGetByWorldAndTownAndType()
//testHousesGetByWorldAndId()
//testGetLatestNews()
//testGetNewsTickers()
//testGetNewsByID()
//testWorldsGetAll()
//testWorldsGetByName()

// Worlds test
function testWorldsGetByName() {
    try {
        tibiaAPI.worlds.getByName('Lutabra').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}


function testWorldsGetAll() {
    try {
        tibiaAPI.worlds.getAll().then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

// News test

function testGetNewsByID() {
    try {
        tibiaAPI.news.getNewsById('3575').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}


function testGetNewsTickers() {
    try {
        tibiaAPI.news.getNewsTickers().then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testGetLatestNews() {
    try {
        tibiaAPI.news.getLatestNews().then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}


// Houses test
function testHousesGetByWorldAndId() {
    try {
        tibiaAPI.houses.getByWorldAndId('Lutabra', '40211').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testHousesGetByWorldAndTownAndType() {
    try {
        tibiaAPI.houses.getByWorldTownAndType('Lutabra', 'thais', 'houses').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testHousesGetByWorldAndTown() {
    try {
        tibiaAPI.houses.getByWorldAndTown('Lutabra', 'thais').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testHousesGetHousesByWorld() {
    try {
        tibiaAPI.houses.getByWorld('Lutabra').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}


// Highscores test
function testHighscoresGetByWorldTypeAndVocation() {
    // types experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty
    // You can use following fields instead: all, druid, knight, paladin and sorcerer.
    try {
        let highscoresInfoByWorldTypeAndVocation = await tibiaAPI.highscores.getByWorldTypeAndVocation('Lutabra', 'experience', 'knight')
        console.log(highscoresInfoByWorldTypeAndVocation)
    } catch (error) {
        console.log(error)
    }
}

function testHighscoresGetByWorldAndType() {
    try {
        let highscoresInfoByWorldAndType = await tibiaAPI.highscores.getByWorldAndType('Lutabra', 'experience')
        console.log(highscoresInfoByWorldAndType)
    } catch (error) {
        console.log(error)
    }
}

async function testHighscoresGetByWorld() {
    try {
        let highscoresInfo = await tibiaAPI.highscores.getByWorld('Lutabra')
        console.log(highscoresInfo)
    } catch (error) {
        console.log(error)
    }
}


// Guilds test
async function testGuildByName() {
    try {
        let guildInfo = await tibiaAPI.guilds.getByName('Skeletin Alliance')
        console.log(guildInfo)
    } catch (error) {
        console.log(error)
    }
}
function testGuildByWorld() {
    try {
        let guildInfo = tibiaAPI.guilds.getByWorld('Lutabra')
        console.log(guildInfo)
    } catch (error) {
        console.log(error)
    }
}
// Characters test
async function testCharacterInfo() {
    try {
        let response = await tibiaAPI.characters.getInfoByName('Akox Shena')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}