import styles from "./index.module.scss";
import Intake from "./Intake/index.jsx";
import Tip from "./Tip/index.jsx";

// imgs

import intake1 from "../../../assets/img/main/daily-intake-1.svg";
import intake2 from "../../../assets/img/main/daily-intake-2.svg";
import intake3 from "../../../assets/img/main/daily-intake-3.svg";
import watermelon from "../../../assets/img/main/watermelon.svg";
import oranges from "../../../assets/img/main/oranges.svg";
import grapes from "../../../assets/img/main/grapes.svg";

// weather icons

import sun from "../../../assets/img/main/weather-images/sun.png";
import cloud from "../../../assets/img/main/weather-images/cloud.png";
import clouds from "../../../assets/img/main/weather-images/clouds.png";
import rain from "../../../assets/img/main/weather-images/rain.png";
import rainyDay from "../../../assets/img/main/weather-images/rainy-day.png";
import thunderstorm from "../../../assets/img/main/weather-images/thunderstorm.png";
import snowfall from "../../../assets/img/main/weather-images/snowfall.png";
import mist from "../../../assets/img/main/weather-images/mist.png";

const Dashboard = ({ typeOfTip, subtitleTip, calculateWater, dailyIntakeWater, averageWaterIntake }) => {
  let lat = "0",
    lon = "0";

  async function getApproximateLocation() {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return { lat: data.latitude, lon: data.longitude };
  }

  async function updateLocation() {
    const location = await getApproximateLocation();

    lat = location.lat;
    lon = location.lon;
  }

  async function getWeatherData() {
    await updateLocation();

    let apiKey = "2ab0375a16d843323f9d2cdc7391ff56";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let temp = Math.ceil(data.main.temp);
        let weatherIconId = data.weather[0].icon.slice(0, -1);

        let weatherDescription;
        let weatherIcon;

        switch (weatherIconId) {
          case "01":
            weatherDescription = "Clear";
            weatherIcon = sun;
            break;
          case "02":
            weatherDescription = "Clear";
            weatherIcon = sun;
            break;
          case "03":
            weatherDescription = "Cloudy";
            weatherIcon = cloud;
            break;
          case "04":
            weatherDescription = "Cloudy";
            weatherIcon = clouds;
            break;
          case "09":
            weatherDescription = "Rainy";
            weatherIcon = rain;
            break;
          case "10":
            weatherDescription = "Rainy";
            weatherIcon = rainyDay;
            break;
          case "11":
            weatherDescription = "Stormy";
            weatherIcon = thunderstorm;
            break;
          case "13":
            weatherDescription = "Snowy";
            weatherIcon = snowfall;
            break;
          case "50":
            weatherDescription = "Misty";
            weatherIcon = mist;
            break;
          default:
            weatherDescription = "Usual";
            weatherIcon = sun;
        }

        console.log(temp, weatherDescription, weatherIcon);
      });
  }

  return (
    <div>
      <div className={styles.weather}>
        {/* <p>{getWeatherData()}</p> */}
      </div>
      <div className={styles.intakes}>
        <Intake
          nameElement="Daily"
          amount={dailyIntakeWater}
          numberElement="1"
          imgForEl={intake1}
        />
        <Intake
          nameElement="Average"
          amount={averageWaterIntake()}
          numberElement="2"
          imgForEl={intake2}
        />
        <Intake
          nameElement="Total"
          amount={calculateWater()}
          numberElement="3"
          imgForEl={intake3}
        />
      </div>
      <div className={styles.currentChosenMenuLink}></div>
      <div className={styles.tipsBoard}>
        {typeOfTip} Tips
        <span className={styles.subtitleTip}>{subtitleTip} </span>
        <div className={styles.tipsRow}>
          <Tip
            numberElement="1"
            tipName="Watermelon"
            tipText="It contains 97% water in it. A good choice to stay hydrated."
            src={watermelon}
          />
          <Tip
            numberElement="2"
            tipName="Oranges"
            tipText="It contains 72% water in it. It’s tangy nature helps with skin care."
            src={oranges}
          />
          <Tip
            numberElement="3"
            tipName="Grapes"
            tipText="It contains vitamin ‘C’ which helps with retaining water."
            src={grapes}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
