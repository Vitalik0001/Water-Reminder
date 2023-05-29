import React from "react";
import styles from "./index.module.scss";
import CircularProgressWithLabel from './ProgressBar/index.jsx';
import waterImages from "../../../assets/img/main/water-Images.svg";
import waterStar from "../../../assets/img/main/water-star.svg";
import {useDispatch, useSelector} from "react-redux";
import {handleChangeValue, handleChange, incNum, decNum} from "../../../redux/waterCounter/slice";
import {motion} from "framer-motion";


const Water = () => {
  const dispatch = useDispatch();
  const percentage = useSelector(state => state.dailyIntake.percentages);
  const numFromInput = useSelector(state => state.dailyIntake.numberFromInput);

  const waterBalance = useSelector(state => state.humanData.waterBalance);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div>
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
            <div>
              <p className={styles.waterTitle}>Your Daily Intake: <span>{waterBalance} ml</span></p>
              <p className={styles.waterSubtitle}>
                <span>Water reminder</span> is a smart calculator to calculate the water balance in your body. Using it, you will always keep the rate of water within the norm.
              </p>
              <div className={styles.waterCalculator}>
                <div className={styles.calculatorGroup}>
                  <div>
                    <button
                      className={styles.buttonMinus}
                      type="button"
                      onClick={() => dispatch(decNum())}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <input
                      type="number"
                      min={0}
                      max={3000}
                      className={styles.inputWater}
                      value={numFromInput}
                      onChange={(e) => dispatch(handleChange(e.target.value))}
                    />
                  </div>
                  <div>
                    <button
                      className={styles.buttonPlus}
                      type="button"
                      onClick={() => dispatch(incNum())}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className={styles.buttonAdd} type="button" onClick={() => dispatch(handleChangeValue(waterBalance))}>
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
            <CircularProgressWithLabel value={percentage} />
            <div className={styles.waterTipsList}>
              <ul className={styles.waterList}>
                <li>Drink water before, during and after exercise.</li>
                <li>Carry a water bottle with you for easy access to drinking water while at home, work or on the go.</li>
                <li>Liven up water by adding citrus wedges, cucumber or some other sliced fruit or vegetable.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Water;
