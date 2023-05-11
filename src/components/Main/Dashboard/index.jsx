import styles from "./index.module.scss";
import Intake from "./Intake/index.jsx";
import Tip from "./Tip/index.jsx";
import Weather from "./Weather";

// imgs

import intake1 from "../../../assets/img/main/daily-intake-1.svg";
import intake2 from "../../../assets/img/main/daily-intake-2.svg";
import intake3 from "../../../assets/img/main/daily-intake-3.svg";
import watermelon from "../../../assets/img/main/watermelon.svg";
import oranges from "../../../assets/img/main/oranges.svg";
import grapes from "../../../assets/img/main/grapes.svg";

// weather icons



const Dashboard = ({ typeOfTip, subtitleTip, calculateWater, dailyIntakeWater, averageWaterIntake }) => {


  return (
    <div>
      <div className={styles.weather}>
        <Weather />
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
