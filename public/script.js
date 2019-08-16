//************************************************************************************************/
//--------------------------------------- HTML Variables ---------------------------------------
//************************************************************************************************/
//----------------- Default Icons
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

//----------------- Time and Date
card_timeDate_time = document.querySelector('[card-timeDate-time]')
card_timeDate_date_day = document.querySelector('[card-timeDate-date-day]')
card_timeDate_date_date = document.querySelector('[card-timeDate-date-date]')
card_timeDate_date_monthYear = document.querySelector('[card-timeDate-date-monthYear]')
card_timeDate_AMPM = document.querySelector('[card-timeDate-AMPM')


//----------------- Current Conditions
card_weather_current_temp = document.querySelector('[card-weather-current-temp]')
card_weather_current_high = document.querySelector('[card-weather-current-high]')
card_weather_current_low = document.querySelector('[card-weather-current-low]')
card_weather_current_wind = document.querySelector('[card-weather-current-wind]')
card_weather_current_rain = document.querySelector('[card-weather-current-rain]')

//----------------- Hourly Forecast
//Times
card_weather_hourly_hour1_time = document.querySelector('[card-weather-hourly-hour1-time]')
card_weather_hourly_hour2_time = document.querySelector('[card-weather-hourly-hour2-time]')
card_weather_hourly_hour3_time = document.querySelector('[card-weather-hourly-hour3-time]')
card_weather_hourly_hour4_time = document.querySelector('[card-weather-hourly-hour4-time]')
card_weather_hourly_hour5_time = document.querySelector('[card-weather-hourly-hour5-time]')
//Temps
card_weather_hourly_hour1_temperature = document.querySelector('[card-weather-hourly-hour1-temperature]')
card_weather_hourly_hour2_temperature = document.querySelector('[card-weather-hourly-hour2-temperature]')
card_weather_hourly_hour3_temperature = document.querySelector('[card-weather-hourly-hour3-temperature]')
card_weather_hourly_hour4_temperature = document.querySelector('[card-weather-hourly-hour4-temperature]')
card_weather_hourly_hour5_temperature = document.querySelector('[card-weather-hourly-hour5-temperature]')
//Icons
card_weather_hourly_hour1_icon = document.querySelector('[card-weather-hourly-hour1-icon]')
card_weather_hourly_hour2_icon = document.querySelector('[card-weather-hourly-hour1-icon]')
card_weather_hourly_hour3_icon = document.querySelector('[card-weather-hourly-hour1-icon]')
card_weather_hourly_hour4_icon = document.querySelector('[card-weather-hourly-hour1-icon]')
card_weather_hourly_hour5_icon = document.querySelector('[card-weather-hourly-hour1-icon]')


//************************************************************************************************/
//--------------------------------------- Functions ---------------------------------------
//************************************************************************************************/

function setTime(){
    var today = new Date();

    var currentHours = today.getHours();
    currentHours = (today.getHours() + 11) % 12 + 1;
    if (currentHours < 10)  currentHours = '0'+currentHours;

    var currentMins = today.getMinutes();
    if (currentMins < 10)  currentMins = '0'+currentMins;

    // var time = ((today.getHours() + 11) % 12 + 1) + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = currentHours + ":" + currentMins;

    if(today.getHours()>12){
        card_timeDate_AMPM.textContent = "PM"
    }
    else{
        card_timeDate_AMPM.textContent = "AM"
    }

    var dateStr = "";

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    dateStr += days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();

    card_timeDate_time.textContent = time;
    card_timeDate_date_day.textContent = days[today.getDay()];
    card_timeDate_date_date.textContent = today.getDate();
    card_timeDate_date_monthYear.textContent = months[today.getMonth()] + " " + today.getFullYear();
}

function setBackground(){
    var currentTime = new Date().getHours();
    
    if (currentTime > 20) {
        document.body.className = "night";
    }
    else {
        document.body.className = "day";
    }    
}

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


function setWeatherData(data, place){
    //get time and date info
    const now = new Date();
    var currentHour = now.getHours();
    hours = getForecastHours(currentHour);

    //-------Current Conditions------------------------------------------------------------------------------------------
    icon.set('currentIcon', data.currently.icon)
    card_weather_current_temp.textContent = data.currently.temperature.toFixed(0)
    card_weather_current_high.textContent = data.daily.data[0].apparentTemperatureHigh.toFixed(0)
    card_weather_current_low.textContent = data.daily.data[0].apparentTemperatureLow.toFixed(0)
    card_weather_current_wind.textContent = data.currently.windSpeed.toFixed(0)
    card_weather_current_rain.textContent = data.currently.precipProbability.toFixed(0)
    
    //-------Hourly Forecast------------------------------------------------------------------------------------------
    //Times
    card_weather_hourly_hour1_time.textContent = hours[0];
    card_weather_hourly_hour2_time.textContent = hours[1];
    card_weather_hourly_hour3_time.textContent = hours[2];
    card_weather_hourly_hour4_time.textContent = hours[3];
    card_weather_hourly_hour5_time.textContent = hours[4];
    //Temps
    //Icons

}

function getForecastHours(currentHour){
    hours = []

}

setInterval(function(){ setBackground(); }, 1000);
setInterval(function(){ setTime(); }, 1000);
