import { useState, useEffect } from "react";
import styles from "./index.module.scss";

import sun from "../../../../assets/img/main/weather-images/sun.png";
import cloud from "../../../../assets/img/main/weather-images/cloud.png";
import clouds from "../../../../assets/img/main/weather-images/clouds.png";
import rain from "../../../../assets/img/main/weather-images/rain.png";
import rainyDay from "../../../../assets/img/main/weather-images/rainy-day.png";
import thunderstorm from "../../../../assets/img/main/weather-images/thunderstorm.png";
import snowfall from "../../../../assets/img/main/weather-images/snowfall.png";
import mist from "../../../../assets/img/main/weather-images/mist.png";

const Weather = () => {
    const [temp, setTemp] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
        async function getApproximateLocation() {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            return { lat: data.latitude, lon: data.longitude };
        }

        async function updateLocation() {
            const location = await getApproximateLocation();
            const lat = location.lat;
            const lon = location.lon;

            let apiKey = "2ab0375a16d843323f9d2cdc7391ff56";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setTemp(Math.ceil(data.main.temp));
                    let weatherIconId = data.weather[0].icon.slice(0, -1);

                    switch (weatherIconId) {
                        case "01":
                            setWeatherDescription("Clear");
                            setWeatherIcon(sun);
                            break;
                        case "02":
                            setWeatherDescription("Clear");
                            setWeatherIcon(sun);
                            break;
                        case "03":
                            setWeatherDescription("Cloudy");
                            setWeatherIcon(cloud);
                            break;
                        case "04":
                            setWeatherDescription("Cloudy");
                            setWeatherIcon(clouds);
                            break;
                        case "09":
                            setWeatherDescription("Rainy");
                            setWeatherIcon(rain);
                            break;
                        case "10":
                            setWeatherDescription("Rainy");
                            setWeatherIcon(rainyDay);
                            break;
                        case "11":
                            setWeatherDescription("Stormy");
                            setWeatherIcon(thunderstorm);
                            break;
                        case "13":
                            setWeatherDescription("Snowy");
                            setWeatherIcon(snowfall);
                            break;
                        case "50":
                            setWeatherDescription("Misty");
                            setWeatherIcon(mist);
                            break;
                        default:
                            setWeatherDescription("Usual");
                            setWeatherIcon(sun);


                    }


                });
        }

        updateLocation();
    }, []);

    return (
        <div className={styles.container}>
            {weatherIcon && <img className={styles.image} src={weatherIcon} alt="weather-icon" />}
            {temp && <p className={styles.temp}>{temp}℃</p>}
            <div className={styles.sentenceCover}>
                {weatherDescription && <p className={styles.sentence}>It's a <span className={styles.day}> {weatherDescription} Day </span> today!</p>}
                {weatherDescription && <span className={styles.advice}>Don’t forget to take your water bottle with you.</span>}
            </div>
        </div>
    );
};

export default Weather;
