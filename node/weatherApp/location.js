const request = require('request')

const getLocation = (address) => {
    return new Promise((resolve, reject) => {
        const location = encodeURIComponent(address)
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_GEOCODE_API}`,json : true}, (error, response, body) => {
            if(error){
                reject('Unable to connect to server')
            }else if (body.status === 'ZERO_RESULTS'){
                reject('Address does not exist. Please try to be more specific.')
            } else if(body.status === 'OK') {
                const result = body.results[0];
                resolve({
                    address : result.formatted_address,
                    latitude : result.geometry.location.lat,
                    longitude : result.geometry.location.lng
                })
            }
        });
    })
}

module.exports.getLocation = getLocation