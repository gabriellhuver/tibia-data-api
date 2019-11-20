const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/guilds/${world}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}

exports.getByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/guild/${name}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}