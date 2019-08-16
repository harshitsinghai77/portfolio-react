const express = require('express');
const router = express.Router();
const location = require('./location.js')
const forecast = require('./forecast.js')

let result;
router.post("/address", (req, res) => {
    let address = req.body.address;
    location.getLocation(address).then((result) => {
            forecast.getForecast(result.latitude, result.longitude).then((forecastData) => {
                result = {
                    address: result.address,
                    summary : forecastData.currently.summary,
                    temp : `${Math.round((5/9) * (forecastData.currently.temperature))}°C`,
                    apparentTemperature : forecastData.currently.apparentTemperature,
                    hourlySummary : forecastData.hourly.summary,
                    humidity : forecastData.currently.humidity,
                    pressure : forecastData.currently.pressure,
                    windSpeed : forecastData.currently.windSpeed,
                    ozone : forecastData.currently.ozone,
                    latitude : forecastData.latitude,
                    longitude : forecastData.longitude,
                    time : new Date(forecastData.currently.time * 1000).toGMTString(),
                }
                res.status(200).send(result)
            }, (error) => {
                res.status(400).send(error)
            })
        }, (message) => {
            res.status(200).send(message);
    })
});


module.exports = router;
