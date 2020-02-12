var temperature;
var weatherSummary;
var desc;
var object;

window.onload = function () {

    temperature = document.getElementById("currentTemperature");
    weatherSummary = document.getElementById("weatherSummary");
    desc = this.document.getElementById("description");
}

function farenheitToCelsius(k) {

    return Math.round((k - 32) * 0.5556);
}

var getWeather = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            showWeather(lat, long)
        })
    } else {
        window.alert("Could not get location");
    }
}

function showWeather(lat, long) {
    var url = `https://api.darksky.net/forecast/1f1a7daa2c6727ab0a8e0e78e691ab4f/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object)
}

function displayWeather(object) {

    weatherSummary.innerHTML = "<p class='smaller'>City:<p>" + object.timezone;
    temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C";
    desc.innerHTML = "<p class='smaller'>Weather Description:<p>" + object.currently.summary;

}
