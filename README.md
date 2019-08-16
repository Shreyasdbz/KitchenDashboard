# KitchenDashboard

###### Javascript based dashboard to display basic weather information. This uses Google Maps, Google Places, DarkSky and NewsAPI.org APIs.

## Requirements:
Needs Node.js and NPM installed

## Installation:

>#### 1) 
>>Navigate to the KitchenDashboard directory then run **npm install package**.

>#### 2) 
>>Create a **.env** file with two variables: **DARKSKY_API_KEY=** and **NEWSAPI_API_KEY=** Register with https://darksky.net/dev and https://newsapi.org for dev accounts and put your keys in those locations.

>#### 3) 
>>Create and new project on google console and enable maps and places APIs. Now copy that API key and place it in the proper script tag in index.html.

>#### 4) 
>>In the KitchenDashboard directory, run **node server.js**

>#### 5)
>>On your browser, go to **localhost:3001** or **[yourIPaddress]:3001** and enter the location in the search box.

### NOTE:
The CSS styling is designed primariy to be used on a 21" or bigger 1920 X 1080 monitor. I made this to be run on a raspberry pi. 