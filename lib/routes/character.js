const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getInfoByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/characters/${name}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}