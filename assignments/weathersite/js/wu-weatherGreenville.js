// Current Conditions
var requestURL = 'https://api.wunderground.com/api/6710307f40d51364/conditions/q/CA/Greenville.json'
var requestCurrent = new XMLHttpRequest();
requestCurrent.open('GET', requestURL, true);
requestCurrent.send();

requestCurrent.onload = function(){
    var greenvilleWeather = JSON.parse(requestCurrent.responseText);
    console.log(greenvilleWeather);
    document.getElementById('currentTemp').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = greenvilleWeather.current_observation.icon_url.replace("http", "https");
    document.getElementById('weatherString').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('wind').innerHTML = greenvilleWeather.current_observation.wind_mph;
}

// Current Condtions text
var conditionsText = new XMLHttpRequest();
conditionsText.open("GET", "https://api.wunderground.com/api/6710307f40d51364/forecast/q/CA/Greenville.json", true );
conditionsText.send();

conditionsText.onload = function (){
    var text = JSON.parse(conditionsText.responseText);
    console.log(text);
    document.getElementById('weatherText').innerHTML = text.forecast.txt_forecast.forecastday["0"].fcttext;
}

