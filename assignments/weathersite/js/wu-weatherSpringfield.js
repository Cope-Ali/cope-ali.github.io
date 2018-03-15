// Current Conditions
var requestURL = 'https://api.wunderground.com/api/6710307f40d51364/conditions/q/OR/Springfield.json'
var requestCurrent = new XMLHttpRequest();
requestCurrent.open('GET', requestURL, true);
requestCurrent.send();

requestCurrent.onload = function(){
    var springfieldWeather = JSON.parse(requestCurrent.responseText);
    console.log(springfieldWeather);
    document.getElementById('currentTemp').innerHTML = springfieldWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = springfieldWeather.current_observation.icon_url.replace("http", "https");
    document.getElementById('weatherString').innerHTML = springfieldWeather.current_observation.weather;
    document.getElementById('wind').innerHTML = springfieldWeather.current_observation.wind_mph;
}

// Current Condtions text
var conditionsText = new XMLHttpRequest();
conditionsText.open("GET", "https://api.wunderground.com/api/6710307f40d51364/forecast/q/OR/Springfield.json", true );
conditionsText.send();

conditionsText.onload = function (){
    var text = JSON.parse(conditionsText.responseText);
    console.log(text);
    document.getElementById('weatherText').innerHTML = text.forecast.txt_forecast.forecastday["0"].fcttext;
}

