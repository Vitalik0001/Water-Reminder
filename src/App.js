import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./components/Start/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Main from "./components/Main/index.jsx";
import imgData from "./data.js";
import user from './assets/img/profile/user.png';

export default function App() {
  const [humanImg, setHumanImg] = React.useState(user);
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

  return (
    <Routes>
      <Route path="/" element={
        <Start />} 
      />
      <Route path="/profile" element={         
        <Profile 
          onChange={handleChange} 
          formData={formData}
          formDataName={formData.name}
          humanImg={humanImg}
          getHumanImg={getHumanImg}
        />} 
      />
      <Route path="/profile/main*" element={          
        <Main 
          userName={formData}
          humanImg={humanImg}
        />} 
      />
    </Routes>
  )
}
