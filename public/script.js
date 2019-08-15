const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appplication/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        console.log(place)
        console.log(place.formatted_address)
        console.log(data)
        setWeatherData(data, place.formatted_address)
    })
})

//--------------------------------------- HTML Variables ---------------------------------------
//----------------- Icons
const icon = new Skycons({color: '#222'})
icon.set('currentIcon', 'clear-day')
icon.set('card-weather-hourly-hour1-icon', 'clear-day')
icon.set('card-weather-hourly-hour2-icon', 'clear-day')
icon.set('card-weather-hourly-hour3-icon', 'clear-day')
icon.set('card-weather-hourly-hour4-icon', 'clear-day')
icon.set('card-weather-hourly-hour5-icon', 'clear-day')
icon.set('card-weather-weekly-day1-icon', 'clear-day')
icon.set('card-weather-weekly-day2-icon', 'clear-day')
icon.set('card-weather-weekly-day3-icon', 'clear-day')
icon.set('card-weather-weekly-day4-icon', 'clear-day')
icon.set('card-weather-weekly-day5-icon', 'clear-day')
icon.play()
//----------------- Current Conditions
card_weather_current_temp = document.querySelector('[card-weather-current-temp]')
card_weather_current_high = document.querySelector('[card-weather-current-temp]')
card_weather_current_low = document.querySelector('[card-weather-current-temp]')
card_weather_current_wind = document.querySelector('[card-weather-current-temp]')
card_weather_current_rain = document.querySelector('[card-weather-current-temp]')
//----------------- Hourly Forecast
card_weather_current_high = document.querySelector('[card-weather-current-high]')
card_weather_current_low = document.querySelector('[card-weather-current-low]')


function setWeatherData(data, place){
    
}