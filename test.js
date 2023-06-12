let lat = '0',
    lon = '0'

async function getApproximateLocation() {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return { lat: data.latitude, lon: data.longitude };
}

async function updateLocation() {

    const location = await getApproximateLocation();

    lat = location.lat;
    lon = location.lon;
}

async function getWeatherData() {
    await updateLocation()

    let apiKey = '2ab0375a16d843323f9d2cdc7391ff56';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            let temp = Math.ceil(data.main.temp);
            let weatherIconId = data.weather[0].icon.slice(0, -1);

            let weatherDescription = '';
            let weatherIcon = '';

            switch (weatherIconId) {
                case '01':
                    weatherDescription = 'Clear'
                    weatherIcon = '/sun.png';
                    break
                case '02':
                    weatherDescription = 'Clear'
                    weatherIcon = '/sun.png';
                    break
                case '03':
                    weatherDescription = 'Cloudy'
                    weatherIcon = '/cloud.png';
                    break
                case '04':
                    weatherDescription = 'Cloudy'
                    weatherIcon = '/clouds.png';
                    break
                case '09':
                    weatherDescription = 'Rainy'
                    weatherIcon = '/rain.png';
                    break
                case '10':
                    weatherDescription = 'Rainy'
                    weatherIcon = '/rainy-day.png';
                    break
                case '11':
                    weatherDescription = 'Stormy'
                    weatherIcon = 'thunderstorm.png';
                    break
                case '13':
                    weatherDescription = 'Snowy'
                    weatherIcon = '/snowfall.png';
                    break
                case '50':
                    weatherDescription = 'Misty'
                    weatherIcon = '/mist.png';
                    break
                default:
                    weatherDescription = 'Usual'
                    weatherIcon = '/sun.png';
            }


            console.log(temp, weatherDescription, weatherIcon)

        });
};

getWeatherData()

