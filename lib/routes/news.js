const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.getLatestNews = async function () {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/latestnews.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}
exports.getNewsTickers = async function () {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/newstickers.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}
exports.getNewsById = async function (newsid) {
    return new Promise((resolve, reject) => {
        request.get(`${MAIN_URI}/news/${newsid}.json`, (error, response, body) => {
            if (error || response.statusCode !== 200) reject(error)
            resolve(JSON.parse(body))
        })
    })
}