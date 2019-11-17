const request = require('request')

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        try {
            request.get(`https://api.tibiadata.com/v2/houses/${world}.json`, (error, response, body) => {
                if (error) reject(error)
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

exports.getByWorldAndTown = async function (world, town) {
    return new Promise((resolve, reject) => {
        try {
            request.get(`https://api.tibiadata.com/v2/houses/${world}/${town}.json`, (error, response, body) => {
                if (error) reject(error)
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}
exports.getByWorldTownAndType = async function (world, town, type) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/houses/${world}/${town}/${type}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}
exports.getByWorldAndId = async function (world, houseid) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/house/${world}/${houseid}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}