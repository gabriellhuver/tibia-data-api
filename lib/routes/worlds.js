const request = require('request')

exports.getAll = async function () {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/worlds.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}
exports.getByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/world/${name}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}