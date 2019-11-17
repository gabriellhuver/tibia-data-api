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
    try {
        // types experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty
        // You can use following fields instead: all, druid, knight, paladin and sorcerer.
        tibiaAPI.highscores.getByWorldTypeAndVocation('Lutabra', 'experience', 'knight').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testHighscoresGetByWorldAndType() {
    try {
        // types experience, magic, shielding, distance, sword, club, axe, fist, fishing, achievements and loyalty
        tibiaAPI.highscores.getByWorldAndType('Lutabra', 'experience').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

function testHighscoresGetByWorld() {
    try {
        tibiaAPI.highscores.getByWorld('Lutabra').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}

// Characters test
function testCharacterInfo() {
    try {
        tibiaAPI.characters.getInfoByName('Akox Shena').then((response) => {
            console.log(response)
        })
    } catch (error) {
        console.log(error)
    }
}
// Guilds test
function testGuildByName() {
    try {
        tibiaAPI.guilds.getByName('Skeletin Alliance').then((resolve, reject) => {
            if (reject) console.log(reject)
            console.log(resolve)
        })
    } catch (error) {
        console.log(error)
    }
}
function testGuildByWorld() {
    try {
        tibiaAPI.guilds.getByWorld('Lutabra').then((resolve, reject) => {
            if (reject) console.log(reject)
            console.log(resolve)
        })
    } catch (error) {
        console.log(error)
    }
}
