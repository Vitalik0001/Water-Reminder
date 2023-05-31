import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {calculateFromData, getHumanImg, handleChange} from "../../redux/humanData/slice";
import {motion} from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();

  const formDataInput = useSelector(state => state.humanData.formData);
  const humanImg = useSelector(state => state.humanData.humanImg);

  const isEmpty = () => {
    const dataInput = Object.values(formDataInput);
    return !dataInput.includes("");
  }

  const isCorrectName = (event) => {
    if (formDataInput.name.trim() === "") {
      event.target.style = "border-bottom: 1px solid red";
    } else {
      event.target.style = "";
    }
  }

  return (
    <div className={styles.data}>
      <motion.div
        className={styles.logo}
        initial={{scale: 0}}
        animate={{scale: 1}}
      >
        <img alt="logo" src={humanImg} className={styles.human}/>
      </motion.div>
      <h2 className={styles.title}>{formDataInput.name === "" ? formDataInput.username : formDataInput.name}</h2>
      <div className={styles.userInformation}>
        <div className={styles.user}>
          <div className={styles.gender}>
            <p>Gender</p>
            <div className={styles.radioInputs}>
              <label className={styles.radio}>
                <input type="radio" name="gender" onChange={(e) => dispatch(handleChange(e))} onClick={() => dispatch(getHumanImg('male'))} value="male"/>
                <span className={styles.name}>Male</span>
              </label>
              <label className={styles.radio}>
                <input type="radio" name="gender" onChange={(e) => dispatch(handleChange(e))} onClick={() => dispatch(getHumanImg('female'))} value="female"/>
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
              onChange={(e) => dispatch(handleChange(e))}
              onKeyDown={isCorrectName}
              value={formDataInput.name}
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
              onChange={(e) => dispatch(handleChange(e))}
              value={formDataInput.age}
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
              onChange={(e) => dispatch(handleChange(e))}
              value={formDataInput.weight}
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
              onChange={(e) => dispatch(handleChange(e))}
              value={formDataInput.height}
            />
          </div>
        </div>
        <div className={styles.radioButtonsElement}>
          <p className={styles.formText}>Activity</p>
          <form className={styles.form}>
            <label htmlFor="01">Minimal</label>
            <input id="01" type="radio" name="activity" value="minimal" onChange={(e) => dispatch(handleChange(e))} />
            <label htmlFor="02">Low</label>
            <input id="02" type="radio" name="activity" value="low" onChange={(e) => dispatch(handleChange(e))} />
            <label htmlFor="03">Average</label>
            <input id="03" type="radio" name="activity" value="average" onChange={(e) => dispatch(handleChange(e))} />
            <label htmlFor="04">High</label>
            <input id="04" type="radio" name="activity" value="high" onChange={(e) => dispatch(handleChange(e))} />
            <label htmlFor="05">Very high</label>
            <input id="05" type="radio" name="activity" value="very high" onChange={(e) => dispatch(handleChange(e))} />
          </form>
        </div>
      </div>
      { isEmpty() && <div className={styles.nextButton}>
        <Link to="/main" onClick={() => dispatch(calculateFromData())}>Next</Link>
      </div> }
    </div>  
  )
}

export default Profile;