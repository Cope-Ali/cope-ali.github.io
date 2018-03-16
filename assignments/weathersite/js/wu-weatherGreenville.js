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


// 10 day forecast
var tenDay = new XMLHttpRequest();
tenDay.open("GET", "https://api.wunderground.com/api/6710307f40d51364/forecast10day/q/CA/Greenville.json", true);
tenDay.send();

tenDay.onload = function () {
    var text = JSON.parse(tenDay.responseText);
    console.log(text);
    // day 1
    var weekday = text.forecast.simpleforecast.forecastday["0"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["0"].date.day;
    document.getElementById('day1').innerHTML = weekday + " " + date;
    document.getElementById('imgday1').src = text.forecast.simpleforecast.forecastday["0"].icon_url.replace("http", "https");
    document.getElementById('high1').innerHTML = text.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low1').innerHTML = text.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    //Day 2
    var weekday = text.forecast.simpleforecast.forecastday["1"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["1"].date.day;
    document.getElementById('day2').innerHTML = weekday + " " + date;
    document.getElementById('imgday2').src = text.forecast.simpleforecast.forecastday["1"].icon_url.replace("http", "https");
    document.getElementById('high2').innerHTML = text.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('low2').innerHTML = text.forecast.simpleforecast.forecastday["1"].low.fahrenheit;

    //Day 3
    var weekday = text.forecast.simpleforecast.forecastday["2"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["2"].date.day;
    document.getElementById('day3').innerHTML = weekday + " " + date;
    document.getElementById('imgday3').src = text.forecast.simpleforecast.forecastday["2"].icon_url.replace("http", "https");
    document.getElementById('high3').innerHTML = text.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('low3').innerHTML = text.forecast.simpleforecast.forecastday["2"].low.fahrenheit;

    //Day 4
    var weekday = text.forecast.simpleforecast.forecastday["3"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["3"].date.day;
    document.getElementById('day4').innerHTML = weekday + " " + date;
    document.getElementById('imgday4').src = text.forecast.simpleforecast.forecastday["3"].icon_url.replace("http", "https");
    document.getElementById('high4').innerHTML = text.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    document.getElementById('low4').innerHTML = text.forecast.simpleforecast.forecastday["3"].low.fahrenheit;

    //Day 5
    var weekday = text.forecast.simpleforecast.forecastday["4"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["4"].date.day;
    document.getElementById('day5').innerHTML = weekday + " " + date;
    document.getElementById('imgday5').src = text.forecast.simpleforecast.forecastday["4"].icon_url.replace("http", "https");
    document.getElementById('high5').innerHTML = text.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    document.getElementById('low5').innerHTML = text.forecast.simpleforecast.forecastday["4"].low.fahrenheit;

    //Day 6
    var weekday = text.forecast.simpleforecast.forecastday["5"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["5"].date.day;
    document.getElementById('day6').innerHTML = weekday + " " + date;
    document.getElementById('imgday6').src = text.forecast.simpleforecast.forecastday["5"].icon_url.replace("http", "https");
    document.getElementById('high6').innerHTML = text.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    document.getElementById('low6').innerHTML = text.forecast.simpleforecast.forecastday["5"].low.fahrenheit;

    //Day 7
    var weekday = text.forecast.simpleforecast.forecastday["6"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["6"].date.day;
    document.getElementById('day7').innerHTML = weekday + " " + date;
    document.getElementById('imgday7').src = text.forecast.simpleforecast.forecastday["6"].icon_url.replace("http", "https");
    document.getElementById('high7').innerHTML = text.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    document.getElementById('low7').innerHTML = text.forecast.simpleforecast.forecastday["6"].low.fahrenheit;

    //Day 8
    var weekday = text.forecast.simpleforecast.forecastday["7"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["7"].date.day;
    document.getElementById('day8').innerHTML = weekday + " " + date;
    document.getElementById('imgday8').src = text.forecast.simpleforecast.forecastday["7"].icon_url.replace("http", "https");
    document.getElementById('high8').innerHTML = text.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    document.getElementById('low8').innerHTML = text.forecast.simpleforecast.forecastday["7"].low.fahrenheit;

    //Day 9
    var weekday = text.forecast.simpleforecast.forecastday["8"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["8"].date.day;
    document.getElementById('day9').innerHTML = weekday + " " + date;
    document.getElementById('imgday9').src = text.forecast.simpleforecast.forecastday["8"].icon_url.replace("http", "https");
    document.getElementById('high9').innerHTML = text.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('low9').innerHTML = text.forecast.simpleforecast.forecastday["8"].low.fahrenheit;

    //Day 10
    var weekday = text.forecast.simpleforecast.forecastday["9"].date.weekday_short;
    var date = text.forecast.simpleforecast.forecastday["9"].date.day;
    document.getElementById('day10').innerHTML = weekday + " " + date;
    document.getElementById('imgday10').src = text.forecast.simpleforecast.forecastday["9"].icon_url.replace("http", "https");
    document.getElementById('high10').innerHTML = text.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
    document.getElementById('low10').innerHTML = text.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
}


