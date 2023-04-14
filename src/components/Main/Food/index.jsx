import React from "react";
import styles from "./index.module.scss";
import burger from "../../../assets/img/main/burger-foodCalories.png";

const Food = ({ typeOfTip, subtitleTip }) => {

  return (
    <div className={styles.foodCalories}>
      <div className={styles.burgerGroup}>
        <div className={styles.burgerCalories}>
          <img 
            className={styles.foodBurger}
            src={burger}
            alt="burger"
          />
        </div>
        <div className={styles.calculateCalories}>
          <p className={styles.dailyCaloriesTitle}>Your Intake Goal: <span>3000 kl</span></p>
          <p className={styles.dailyCaloriesSubtitle}><span>Special nutrient calculator:</span> now you can easily find out everything about your favorite foods that you consume every day. To request, write the weight in grams or kg and the name of the product</p>
          <input type="text" name="text" className={styles.inputCalories} placeholder="Write products..."></input>
          <button className={styles.buttonSubmit}>Search</button>
        </div>
      </div>
      <div className={styles.tipsCalories}>
        <p>{typeOfTip} Tips</p>
        <span className={styles.subtitleTip}>{subtitleTip}</span>
      </div>
    </div>
  )
}

export default Food;
