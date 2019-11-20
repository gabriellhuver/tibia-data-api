const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/highscores/${world}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}
exports.getByWorldAndType = async function (world, type) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/highscores/${world}/${type}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}
exports.getByWorldTypeAndVocation = async function (world, type, vocation) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/highscores/${world}/${type}/${vocation}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}