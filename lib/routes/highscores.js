const request = require('request')

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/highscores/${world}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}
exports.getByWorldAndType = async function (world, type) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/highscores/${world}/${type}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}
exports.getByWorldTypeAndVocation = async function (world, type, vocation) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/highscores/${world}/${type}/${vocation}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}