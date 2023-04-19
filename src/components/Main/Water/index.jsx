import React from "react";
import styles from "./index.module.scss";
import waterImages from "../../../assets/img/main/water-Images.svg";
import waterStar from "../../../assets/img/main/water-star.svg";
import iconBurger from "../../../assets/img/main/burger-tips.png";
import iconHotDog from "../../../assets/img/main/hot-dog-tips.png";
import iconMeat from "../../../assets/img/main/meat-tips.png";
import Tip from "../../../components/Main/Dashboard/Tip/index.jsx";

const Water = ({ typeOfTip, subtitleTip }) => {
const [num, setNum]= React.useState(0);
const incNum = () => {
  if(num < 3000) {
    setNum(Number(num) + 50 );
  }
};
const decNum = () => {
  if(num > 0) {
    setNum( num - 50 );
  }
}
const handleChange = (e) => {
  setNum(e.target.value);
}

  return (
    <div className={styles.waterPage}>
      <div className={styles.waterGroup}>
        <div className={styles.waterImages}>
          <img 
            className={styles.waterDropImage}
            src={waterImages}
            alt="waterDrop"
          />
          <img 
            className={styles.waterStarImage}
            src={waterStar}
            alt="waterStart"
          />
        <div className={styles.calculateCalories}>
        <div className={styles.inputGroupPrepend}>
          <p>Your Daily Intake</p>
          <div className={styles.stepperInput}>
            <button className={styles.outlinePrimary} type="button" onClick={decNum}>-</button>
          <div className={styles.stepperInputContent}>
            <input type="text" maxLength={4} className={styles.formControl} value={num} onChange={handleChange}/>
          </div>
          <button className={styles.outlinePrimary} type="button" onClick={incNum}>+</button>
          </div>
          <button className={styles.buttonsClick} type="button">Click me</button>
        </div>
        </div> 
        </div>
        <div className={styles.tipsCalories}>
          <p>{typeOfTip} Tips</p>
          <span className={styles.subtitleTip}>{subtitleTip}</span>
        <div className={styles.childrenTips}>
          <Tip   
            numberElement="4"
            tipName="Burger"
            tipText="One of the most impressive benefits of eating burgers is that you can get a hefty dose of protein."
            src={iconBurger}
          />
          <Tip  
            numberElement="5"
            tipName="Hot-dog"
            tipText="Hot dogs may help improve gut health due to their high protein and fat content." 
            src={iconHotDog}                                                                              
          />
          <Tip
            numberElement="6"
            tipName="Meat"
            tipText="Red meat provides us with iron, zinc and B vitamins. Meat is one of the main sources of vitamin B12 in the diet."
            src={iconMeat}                                                                                
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Water;