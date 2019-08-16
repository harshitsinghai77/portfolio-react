const request = require('request')


const getForecast = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url : `https://api.darksky.net/forecast/${process.env.dark_sky_key}/${lat},${lng}?exclude=minutely,daily,flags`,
            json: true}, (error, response, body) => {
                if(!error && response.statusCode === 200){
                    resolve(body)
                }
                else{
                    reject('Unable to fetch the weather report.Please try again later.')
                }
            }
        )
    })
}

module.exports.getForecast = getForecast