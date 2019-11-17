const request = require('request')

exports.getInfoByName = async function (name) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/characters/${name}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(body)
        })
    })
}