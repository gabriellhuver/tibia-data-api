const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getAll = async function () {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/worlds.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}
exports.getByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/world/${name}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}