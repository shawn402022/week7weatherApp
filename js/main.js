const wApp = document.getElementById('weather-container')
const wForm = document.getElementById('iDform')
const wSearch = document.getElementById('iDsearch')
console.log(wApp)
// fetch
fetch(`https://api.openweathermap.org/data/2.5/weather?zip=07305,us&appid=ccf252913750bb60776aac7b2df7cc68`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.weather[0].description, data.main.temp, data.main.feels_like, data.wind.speed)
        for (const cWeather of data) {
            addWeather(cWeather.weather[0].description, cWeather.main.temp, cWeather.main.feels_like, cWeather.wind.speed)
        }
        console.log(data.weather[0].description, cWeather.main.temp, cWeather.main.feels_like, cWeather.wind.speed)
    })
    console.log(data.weather[0].description, cWeather.main.temp, cWeather.main.feels_like, cWeather.wind.speed)
    function addWeather(description, temp, feels_like, speed) {
        const weatherEl = document.createElement('div')
        weatherEl.classList.add('card')

        weatherEl.innerHTML = `
        <div class = 'card-body'>
            <h2>${description}</h2>
            <h2>${temp}</h2>
            <h2>${feels_like}</h2>
            <h2>${speed}</h2>
        </div>
        `

    }
