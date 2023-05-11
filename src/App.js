import React from "react";
import { Routes, Route } from "react-router-dom";
import dayjs from "dayjs";
import Start from "./components/Start/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Main from "./components/Main/index.jsx";
import Dashboard from "./components/Main/Dashboard/index.jsx";
import Food from "./components/Main/Food/index.jsx";
import Water from "./components/Main/Water/index.jsx";
import imgData from "./data.js";
import user from './assets/img/profile/user.png';

export default function App() {
  const [humanImg, setHumanImg] = React.useState(user);
  const [bmrData, setBmrData] = React.useState(0); // for weight 
  const [waterBalance, setWaterBalance] = React.useState(0); // water rate per day
  const [dailyIntakeWater, setDailyIntakeWater] = React.useState(0); // water which you drank

  const [waterLogElement, setWaterLogElement] = React.useState([]); // for widget and water buttons

  const [formData, setFormData] = React.useState(
    {
      gender: "",
      username: "Username",
      name: "",
      age: "",
      weight: "",
      height: "",
      activity: ""
    }
  );

  function handleChange(event) {
    setFormData(prevFormData => {
      if (formData.name.includes(" ")) {
        return {
          ...prevFormData,
          [event.target.name]: ""
        }
      } else {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
      }
    })
  }

  const getHumanImg = (event) => {
    let humanArray;
    if (event.target.value === "male") {
      humanArray = imgData.male;
    } else {
      humanArray = imgData.female;
    }
    const randomNumber = Math.floor(Math.random() * humanArray.length);
    setHumanImg(humanArray[randomNumber].url);
  }

  const calculateCalories = () => {
    let numberActivity = 0;

    if (formData.activity === "minimal") {
      numberActivity = 1.2;
    } else if (formData.activity === "low") {
      numberActivity = 1.375;
    } else if (formData.activity === "average") {
      numberActivity = 1.55;
    } else if (formData.activity === "high") {
      numberActivity = 1.64;
    } else if (formData.activity === "very high") {
      numberActivity = 1.9;
    }

    if (formData.gender === "male") {
      const bmrInfoMale = (9.99 * formData.weight) + (6.25 * formData.height) - (4.92 * formData.age) + 5;
      const result = Math.round(bmrInfoMale * numberActivity);
      setBmrData(result);
    } else if (formData.gender === "female") {
      const bmrInfoFemale = (9.99 * formData.weight) + (6.25 * formData.height) - (4.92 * formData.age) - 161;
      const result = Math.round(bmrInfoFemale * numberActivity);
      setBmrData(result);
    } 
    return bmrData;
  }

  const calculateWater = () => {
    if (formData.gender === "male") {
      const waterInfoMale = Math.round(formData.weight * 40);
      setWaterBalance(waterInfoMale);
    } else if (formData.gender === "female") {
      const waterInfoFemale = Math.round(formData.weight * 30);
      setWaterBalance(waterInfoFemale);
    }
    return waterBalance;
  }

  const averageWaterIntake = () => {
    return dailyIntakeWater / 2;
  }

  let time = dayjs();
  const dataForCalendar = time.format("ddd, D MMM YYYY");
  const setTimeLog = time.format("h:mm a");

  return (
    <Routes>
      <Route path="/" element={
        <Start />} 
      />
      <Route path="profile" element={         
        <Profile 
          onChange={handleChange} 
          formData={formData}
          formDataName={formData.name}
          humanImg={humanImg}
          getHumanImg={getHumanImg}
          calculateCalories={calculateCalories}
        />} 
      />
      <Route path="main" element={          
        <Main 
          userName={formData}
          humanImg={humanImg}
          calculateWater={calculateWater}
          dailyIntakeWater={dailyIntakeWater}
          waterLogElement={waterLogElement}
          dataForCalendar={dataForCalendar}
        />} 
      >
        <Route index element={<Dashboard 
            typeOfTip='Hydration'
            subtitleTip='Consuming fruit juices keeps up the hydration level.'
            calculateWater={calculateWater}
            dailyIntakeWater={dailyIntakeWater}
            averageWaterIntake={averageWaterIntake}
          />} 
        />
        <Route path="food" element={<Food 
            typeOfTip='Dietary'
            subtitleTip='Healthy food keeps our body in good shape and improves physical condition.'
            calculateCalories={calculateCalories}
          />} 
        />
        <Route path="water" element={<Water 
            dailyIntakeWater={dailyIntakeWater}
            setDailyIntakeWater={setDailyIntakeWater}
            waterBalance={waterBalance}
            setWaterLogElement={setWaterLogElement}
            setTimeLog={setTimeLog}
          />} 
        />
      </Route>
    </Routes>
  )
}
