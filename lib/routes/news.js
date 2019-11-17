const request = require('request')

exports.getLatestNews = async function () {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/latestnews.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}
exports.getNewsTickers = async function () {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/newstickers.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}
exports.getNewsById = async function (newsid) {
    return new Promise((resolve, reject) => {
        request.get(`https://api.tibiadata.com/v2/news/${newsid}.json`, (error, response, body) => {
            if (error) reject(error)
            resolve(body)
        })
    })
}