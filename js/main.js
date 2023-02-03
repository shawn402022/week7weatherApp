
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var tempMin = document.querySelector('.tempMin');
var tempMax = document.querySelector('.tempMax');
var tempFeel = document.querySelector('.tempFeel');
var wind = document.querySelector('.wind');
var pressure = document.querySelector('.pressure');





button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ccf252913750bb60776aac7b2df7cc68')
        .then(response => response.json())   
        .then(data => {
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var tempValue = data['main']['temp'];
            var tempMinValue = data['main']['temp_min'];
            var tempMaxValue = data['main']['temp_max'];
            var tempFeelValue = data['main']['feels_like'];
            var windValue = data['wind']['speed'];
            var pressureValue = data ['main']['pressure'];
            
            
            desc.innerHTML = "Sky - "+descValue;
            temp.innerHTML = "Temp - "+tempValue;
            tempMin.innerHTML = "Low - "+tempMinValue;
            tempMax.innerHTML = "High - "+tempMaxValue;
            tempFeel.innerHTML = "Chill - "+tempFeelValue;
            wind.innerHTML = "Wind - "+windValue;
            pressure.innerHTML = "Pressure - "+pressureValue;
            

        })
        
        

    .catch (err => alert('Wrong City Name!'))
})


