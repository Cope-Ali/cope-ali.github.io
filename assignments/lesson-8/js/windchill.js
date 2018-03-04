
var high = parseFloat(document.getElementById("high").innerHTML);
var low = parseFloat(document.getElementById("low").innerHTML);
var t = (high + low) / 2;
var s = parseFloat(document.getElementById("wind").innerHTML);
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
var chill = Math.round(f * 10) / 10;
document.getElementById("windChill").innerHTML = chill;
console.log(high, low, t, s, f);
