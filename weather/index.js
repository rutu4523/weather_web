var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityinput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik="999727062a3e8a7a2c2f6d9bfa0e79aa"

function conversion(val)
{
    return(val-273).toFixed(3) //roundoff 3 decimal
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${conversion(tempature)} C</span>`
            description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML=`Wind Speed: <span>${windspeed} km/h<span>`
        })

        .catch(err =>alert('You Entered Wrong City Name'))
}
)