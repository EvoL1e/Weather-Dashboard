var searchCity = document.querySelector('#cityList');
var fiveDayForecast = document.querySelector('#fiveDayForecast');
var dayForecast = document.querySelector('#dayForecast');
var saerchBttn = document.querySelector('#searchBttn');
var dayForecastUrl = 'api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=975674d0f1b0a4b58701d7630dcc95d1';
var fiveDayForecastUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&appid=975674d0f1b0a4b58701d7630dcc95d1';
var fiveDayRespons;
var dayResponse;
var localyStoredCities = Window.localStorage

function getApi(requestUrl, savedData) {
    fetch(requestUrl)
      .then(function (response) {
        // Check the console first to see the response.status
        console.log(response.status);
        // Then write the conditional based on that response.status value
        if (response.status !== 200) {
          responseText.textContent = response.status;
        }
        // Make sure to display the response on the page
        var derivedData = response.json();
        
        //
        savedData = JSON.parse(derivedData);      
    })
        .then(function (data) {
        console.log(data);
        });
}

function getForecast() {
    getApi(dayForecast, dayResponse);
    getApi(fiveDayForecast, fiveDayRespons);
}

function displayForecast() {


    
}

/*function localSaveCities() {
    for (var i = 0; i < localSaveCities.length; i++) {
        localyStoredCities.getItem(i)
    }
}*/

function scriptStart() {
    searchCity();
    getForecast();
    displayForecast();
}

saerchBttn.addEventListener('click', function(event){
    event.preventDefault();
    scriptStart();
})