let city = document.querySelector('.city')
let tem = document.querySelector('.tem')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let cName = document.querySelector('input')
let ser = document.querySelector('button')
let weatherIcon = document.querySelector('.weather-icon')



ser.addEventListener('click', ()=>{
    let citiName = cName.value
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=5506071f67e5d4a45c458c795e3f4b4e&units=metric&q='

    document.querySelector('.weather').style.display = 'block'

    fetch(apiUrl +citiName)
    .then((alu)=>alu.json())
    .then((data)=>{
        console.log(data)
        city.innerHTML = data.name
             tem.innerHTML = Math.round(data.main.temp) + '°C'
        humidity.innerHTML = data.main.humidity + '%'
           wind.innerHTML = data.wind.speed + ' km/h'

                if(data.weather[0].main === 'Clouds'){
                weatherIcon.src = "images/clouds.png"

            }else if(data.weather[0].main === 'Clear'){
                weatherIcon.src = "images/clear.png"

            }else if(data.weather[0].main === 'Rain'){
                weatherIcon.src = "images/rain.png"

            }else if(data.weather[0].main === 'Drizzle'){
                weatherIcon.src = "images/drizzle.png"
            }
            else if(data.weather[0].main === 'Mist'){
                  weatherIcon.src = "images/mist.png"
            }
                    else if(data.weather[0].main === 'Snow'){
                weatherIcon.src = "images/snow.png"
            }
    })


    .catch((err)=>console.log(err))


})



