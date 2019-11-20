const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getByWorld = async function (world) {
    return new Promise((resolve, reject) => {
        try {
            request.get(`${MAIN_URI}/houses/${world}.json`, (error, response, body) => {
                if (error || response.statusCode !== 200) reject(error)
                resolve(JSON.parse(body))
            })
        } catch (error) {
            reject(error)
        }
    })
}

exports.getByWorldAndTown = async function (world, town) {
    return new Promise((resolve, reject) => {
        try {
            request.get(`${MAIN_URI}/houses/${world}/${town}.json`, (error, response, body) => {
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
        request.get(`${MAIN_URI}/houses/${world}/${town}/${type}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}
exports.getByWorldAndId = async function (world, houseid) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/house/${world}/${houseid}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}