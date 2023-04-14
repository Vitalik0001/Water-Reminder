import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const Profile = ({ onChange, formData, formDataName, humanImg, getHumanImg }) => {
  const isEmpty = () => {
    const dataInput = Object.values(formData);
    if (dataInput.includes("")) {
      return false;
    } else {
      return true;
    }
  }

  const isCorrectName = (event) => {
    if (formDataName.trim() === "") {
      event.target.style = "border-bottom: 1px solid red";
    } else {
      event.target.style = "";
    }
  }

  return (
    <div className={styles.data}>
      <div className={styles.logo}>
        <img alt="logo" src={humanImg} className={styles.human}/>
      </div>
      <h2 className={styles.title}>{formData.name === "" ? formData.username : formData.name}</h2>
      <div className={styles.userInformation}>
        <div className={styles.user}>
          <div className={styles.gender}>
            <p>Gender</p>
            <div className={styles.radioInputs}>
              <label className={styles.radio}>
                <input type="radio" name="gender" onChange={onChange} onClick={getHumanImg} value="male"/>
                <span className={styles.name}>Male</span>
              </label>
              <label className={styles.radio}>
                <input type="radio" name="gender" onChange={onChange} onClick={getHumanImg} value="female"/>
                <span className={styles.name}>Female</span>
              </label>
            </div>
          </div>
          <div className={styles.name}>
            <p>Name</p>
            <input 
              className={styles.inputName}
              type="text" 
              name="name"
              maxLength={12}
              placeholder="Write your name..."
              onChange={onChange}
              onKeyDown={isCorrectName}
              value={formData.name}
            />
          </div>
          <div className={styles.age}>
            <p>Age</p>
            <input 
              className={styles.inputNumber} 
              type="number" 
              step="1" 
              min="12" 
              max="100" 
              name="age" 
              placeholder="12 y.o"
              onChange={onChange}
              value={formData.age}
            />
          </div>
          <div className={styles.weight}>
            <p>Weight</p>
            <input
              className={styles.inputNumber} 
              type="number" 
              step="1" 
              min="35" 
              max="100" 
              name="weight" 
              placeholder="35 kg"
              onChange={onChange}
              value={formData.weight}
            />
          </div>
          <div className={styles.height}>
            <p>Height</p>
            <input 
              className={styles.inputNumber} 
              type="number" 
              step="1" 
              min="140" 
              max="220" 
              name="height" 
              placeholder="140 cm"
              onChange={onChange}
              value={formData.height}
            />
          </div>
        </div>
        <div className={styles.radioButtonsElement}>
          <p className={styles.formText}>Activity</p>
          <form class={styles.form}>
            <label for="01">Minimal</label>
            <input id="01" type="radio" name="activity" value="minimal" onChange={onChange} />
            <label for="02">Low</label>
            <input id="02" type="radio" name="activity" value="low" onChange={onChange} />
            <label for="03">Average</label>
            <input id="03" type="radio" name="activity" value="average" onChange={onChange} />
            <label for="04">High</label>
            <input id="04" type="radio" name="activity" value="high" onChange={onChange} />
            <label for="05">Very high</label>
            <input id="05" type="radio" name="activity" value="very high" onChange={onChange} />
          </form>
        </div>
      </div>
      { isEmpty() && <div className={styles.nextButton}>
        <Link to="/profile/main/dashboard">Next</Link> 
      </div> }
    </div>  
  )
}

export default Profile;