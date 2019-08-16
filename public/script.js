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
icon.set('card-weather-hourly-hour6-icon', 'clear-day')
icon.set('card-weather-hourly-hour7-icon', 'clear-day')
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
card_weather_current_summary = document.querySelector('[card-weather-current-summary]')

//----------------- Hourly Forecast
//Times
card_weather_hourly_hour1_time = document.querySelector('[card-weather-hourly-hour1-time]')
card_weather_hourly_hour2_time = document.querySelector('[card-weather-hourly-hour2-time]')
card_weather_hourly_hour3_time = document.querySelector('[card-weather-hourly-hour3-time]')
card_weather_hourly_hour4_time = document.querySelector('[card-weather-hourly-hour4-time]')
card_weather_hourly_hour5_time = document.querySelector('[card-weather-hourly-hour5-time]')
card_weather_hourly_hour6_time = document.querySelector('[card-weather-hourly-hour6-time]')
card_weather_hourly_hour7_time = document.querySelector('[card-weather-hourly-hour7-time]')
//Temps
card_weather_hourly_hour1_temperature = document.querySelector('[card-weather-hourly-hour1-temperature]')
card_weather_hourly_hour2_temperature = document.querySelector('[card-weather-hourly-hour2-temperature]')
card_weather_hourly_hour3_temperature = document.querySelector('[card-weather-hourly-hour3-temperature]')
card_weather_hourly_hour4_temperature = document.querySelector('[card-weather-hourly-hour4-temperature]')
card_weather_hourly_hour5_temperature = document.querySelector('[card-weather-hourly-hour5-temperature]')
card_weather_hourly_hour6_temperature = document.querySelector('[card-weather-hourly-hour6-temperature]')
card_weather_hourly_hour7_temperature = document.querySelector('[card-weather-hourly-hour7-temperature]')
//Summary
card_weather_hourly_summary = document.querySelector('[card-weather-hourly-summary]')

//----------------- Weekly Forecast
//Days
card_weather_weekly_day_dayName1 = document.querySelector('[card-weather-weekly-day-dayName1]')
card_weather_weekly_day_dayName2 = document.querySelector('[card-weather-weekly-day-dayName2]')
card_weather_weekly_day_dayName3 = document.querySelector('[card-weather-weekly-day-dayName3]')
card_weather_weekly_day_dayName4 = document.querySelector('[card-weather-weekly-day-dayName4]')
card_weather_weekly_day_dayName5 = document.querySelector('[card-weather-weekly-day-dayName5]')
//Highs
card_weather_weekly_day1_high = document.querySelector('[card-weather-weekly-day1-high]')
card_weather_weekly_day2_high = document.querySelector('[card-weather-weekly-day2-high]')
card_weather_weekly_day3_high = document.querySelector('[card-weather-weekly-day3-high]')
card_weather_weekly_day4_high = document.querySelector('[card-weather-weekly-day4-high]')
card_weather_weekly_day5_high = document.querySelector('[card-weather-weekly-day5-high]')
//Lows
card_weather_weekly_day1_low = document.querySelector('[card-weather-weekly-day1-low]')
card_weather_weekly_day2_low = document.querySelector('[card-weather-weekly-day2-low]')
card_weather_weekly_day3_low = document.querySelector('[card-weather-weekly-day3-low]')
card_weather_weekly_day4_low = document.querySelector('[card-weather-weekly-day4-low]')
card_weather_weekly_day5_low = document.querySelector('[card-weather-weekly-day5-low]')
//Summary
card_weather_weekly_summary = document.querySelector('[card-weather-weekly-summary]')


//************************************************************************************************/
//--------------------------------------- Functions ---------------------------------------
//************************************************************************************************/

//----------------- Function to set current time //-----------------
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

//----------------- Function to change background based on if its day or night //-----------------
function setBackground(){
    var currentTime = new Date().getHours();
    
    if (currentTime > 20 || currentTime < 6) {
        document.body.className = "night";
    }
    else {
        document.body.className = "day";
    }    
}

//----------------- Looks for a place being typed in and activates the weather //-----------------
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

//----------------- Function to set all the weather data //-----------------
function setWeatherData(data, place){
    //get time and date info
    const now = new Date();
    var currentHour = now.getHours();
    var currentDay = now.getDay();
    hours = getForecastHours(currentHour);
    days = getForecastDays(currentDay);

    //-------Current Conditions//-------
    icon.set('currentIcon', data.currently.icon)
    card_weather_current_temp.textContent = data.currently.temperature.toFixed(0)
    card_weather_current_high.textContent = data.daily.data[0].apparentTemperatureHigh.toFixed(0)
    card_weather_current_low.textContent = data.daily.data[0].apparentTemperatureLow.toFixed(0)
    card_weather_current_wind.textContent = data.currently.windSpeed.toFixed(0)
    card_weather_current_rain.textContent = data.currently.precipProbability.toFixed(0)
    card_weather_current_summary.textContent = data.currently.summary
    
    //-------Hourly Forecast//-------
    //Times
    card_weather_hourly_hour1_time.textContent = hours[0];
    card_weather_hourly_hour2_time.textContent = hours[1];
    card_weather_hourly_hour3_time.textContent = hours[2];
    card_weather_hourly_hour4_time.textContent = hours[3];
    card_weather_hourly_hour5_time.textContent = hours[4];
    //Temps
    card_weather_hourly_hour1_temperature.textContent = data.hourly.data[0].apparentTemperature.toFixed(0)
    card_weather_hourly_hour2_temperature.textContent = data.hourly.data[1].apparentTemperature.toFixed(0)
    card_weather_hourly_hour3_temperature.textContent = data.hourly.data[2].apparentTemperature.toFixed(0)
    card_weather_hourly_hour4_temperature.textContent = data.hourly.data[3].apparentTemperature.toFixed(0)
    card_weather_hourly_hour5_temperature.textContent = data.hourly.data[4].apparentTemperature.toFixed(0)
    card_weather_hourly_hour6_temperature.textContent = data.hourly.data[5].apparentTemperature.toFixed(0)
    card_weather_hourly_hour7_temperature.textContent = data.hourly.data[6].apparentTemperature.toFixed(0)
    //Icons
    icon.set('card-weather-hourly-hour1-icon', data.hourly.data[0].icon)
    icon.set('card-weather-hourly-hour2-icon', data.hourly.data[1].icon)
    icon.set('card-weather-hourly-hour3-icon', data.hourly.data[2].icon)
    icon.set('card-weather-hourly-hour4-icon', data.hourly.data[3].icon)
    icon.set('card-weather-hourly-hour5-icon', data.hourly.data[4].icon)
    icon.set('card-weather-hourly-hour6-icon', data.hourly.data[5].icon)
    icon.set('card-weather-hourly-hour7-icon', data.hourly.data[6].icon)
    //Summary
    card_weather_hourly_summary.textContent = data.hourly.summary

    //-------Weekly Forecast//-------
    //Times
    //Highs
    card_weather_weekly_day1_high.textContent = data.daily.data[0].apparentTemperatureHigh.toFixed(0);
    card_weather_weekly_day2_high.textContent = data.daily.data[1].apparentTemperatureHigh.toFixed(0);
    card_weather_weekly_day3_high.textContent = data.daily.data[2].apparentTemperatureHigh.toFixed(0);
    card_weather_weekly_day4_high.textContent = data.daily.data[3].apparentTemperatureHigh.toFixed(0);
    card_weather_weekly_day5_high.textContent = data.daily.data[4].apparentTemperatureHigh.toFixed(0);
    //Lows
    card_weather_weekly_day1_low.textContent = data.daily.data[0].apparentTemperatureLow.toFixed(0);
    card_weather_weekly_day2_low.textContent = data.daily.data[1].apparentTemperatureLow.toFixed(0);
    card_weather_weekly_day3_low.textContent = data.daily.data[2].apparentTemperatureLow.toFixed(0);
    card_weather_weekly_day4_low.textContent = data.daily.data[3].apparentTemperatureLow.toFixed(0);
    card_weather_weekly_day5_low.textContent = data.daily.data[4].apparentTemperatureLow.toFixed(0);
    //Icons
    icon.set('card-weather-weekly-day1-icon', data.hourly.data[0].icon)
    icon.set('card-weather-weekly-day2-icon', data.hourly.data[1].icon)
    icon.set('card-weather-weekly-day3-icon', data.hourly.data[2].icon)
    icon.set('card-weather-weekly-day4-icon', data.hourly.data[3].icon)
    icon.set('card-weather-weekly-day5-icon', data.hourly.data[4].icon)

    //Sumary
    card_weather_weekly_summary.textContent = data.daily.summary    

}

//----------------- Calculates an hours array to display for hourly forecast //-----------------
function getForecastHours(currentHour){
    hours = []
    lateHours = [1,2,3,4,5,6,7,8,9,10,11,0]

    for(var i = 1; i < 8; i++){
        if(currentHour > 12){
            hours[i] = lateHours[(currentHour-12)] + i + " PM";
        }
        else{
            hours[i] = currentHour + i + " AM";
        }        
    }
    return hours;
}

//----------------- Calculates a days array to display for weekly forecast //-----------------
function getForecastDays(currentDay){
    daysList = ["Mon", "Tues", "Wed", "Thr", "Fri", "Sat", "Sun"]
    days = [];

    return days;
}


//----------------- Refreshes needed functions //-----------------
setInterval(function(){ setBackground(); }, 1000);
setInterval(function(){ setTime(); }, 1000);
