const wApp = document.getElementById('weather-container')
const wForm = document.getElementById('iDform')
const wSearch = document.getElementById('iDsearch')
console.log(wApp)
// fetch
fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=07305&appid=ccf252913750bb60776aac7b2df7cc68`)
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data)
        
    })

    wApp.innerHTML=`
        <form action="http://api.openweathermap.org/geo/1.0/zip?zip=07305&appid="ccf252913750bb60776aac7b2df7cc68" id="iDform">
            <input type ="text" name="zip" size = "15" maxlength="5" />
            <button id="iDsearch">Search</button>

        </form>


            
            
        </div>

    `