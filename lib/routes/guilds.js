const request = require('request')

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/guilds/${world}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}

exports.getByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/guild/${name}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}