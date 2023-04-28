import React from "react";
import styles from "./index.module.scss";
import CircularProgressWithLabel from './ProgressBar/index.jsx';
import waterImages from "../../../assets/img/main/water-Images.svg";
import waterStar from "../../../assets/img/main/water-star.svg";

const Water = ({ waterBalance, dailyIntakeWater, setDailyIntakeWater, setWaterLogElement }) => {
  const [numInput, setNumInput] = React.useState(0);
  const [percentages, setPercentages] = React.useState(0);

  const incNum = () => {
    if (numInput < 3000) {
      setNumInput(Number(numInput) + 50);
    }
  };
  const decNum = () => {
    if (numInput > 0) {
      setNumInput(numInput - 50);
    }
  };
  const handleChange = (e) => {
    setNumInput(e.target.value);
  };

  const handleChangeValue = () => {
    setWaterLogElement(prev => ([
      ...prev, 
      numInput
    ]));
    setDailyIntakeWater(dailyIntake => dailyIntake + Number(numInput));
    console.log(dailyIntakeWater);
    setPercentages(dailyIntakeWater * 100 / waterBalance);
  }

  return (
    <div className={styles.waterPage}>
      <div className={styles.waterGroup}>
        <div className={styles.waterImages}>
          <div className={styles.imgsWater}>
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
          </div>
          <div className={styles.calculateWater}>
            <div className={styles.inputGroupPrepend}>
              <p className={styles.waterTitle}>Your Daily Intake: <span>{waterBalance} ml</span></p>
              <p className={styles.waterSubtitle}>
                <span>Water reminder</span> is a smart calculator to calculate the water balance in your body. Using it, you will always keep the rate of water within the norm.
              </p>
              <div className={styles.waterCalculator}>
                <div className={styles.calculatorGroup}>
                  <div className={styles.stepperInput}>
                    <button
                      className={styles.buttonMinus}
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                  </div>
                  <div className={styles.stepperInputContent}>
                    <input
                      type="number"
                      min={0}
                      max={3000}
                      className={styles.inputWater}
                      value={numInput}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      className={styles.buttonPlus}
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className={styles.buttonAdd} type="button" onClick={handleChangeValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tipsWater}>
          <p>Status board</p>
          <span className={styles.subtitleTip}>This graph will help you monitor the amount of water in your body</span>
          <div className={styles.childrenTips}>
            <CircularProgressWithLabel value={percentages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Water;
