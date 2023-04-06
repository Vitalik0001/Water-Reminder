import styles from "./index.module.scss";
import Intake from "./Intake/index.jsx";
import Tip from "./Tip/index.jsx";

// imgs

import intake1 from '../../../assets/img/main/daily-intake-1.svg';
import intake2 from '../../../assets/img/main/daily-intake-2.svg';
import intake3 from '../../../assets/img/main/daily-intake-3.svg';
import watermelon from "../../../assets/img/main/watermelon.svg";
import oranges from "../../../assets/img/main/oranges.svg";
import grapes from "../../../assets/img/main/grapes.svg";

const Dashboard = ({ typeOfTip, subtitleTip }) => {
  return (
    <div>
      <div className={styles.weather}></div>
      <div className={styles.intakes}>
        <Intake nameElement="Daily" amount="5000" numberElement="1" imgForEl={intake1} />
        <Intake nameElement="Average" amount="2500" numberElement="2" imgForEl={intake2} />
        <Intake nameElement="Total" amount="17000" numberElement="3" imgForEl={intake3} />
      </div>
      <div className={styles.currentChosenMenuLink}>
      </div>
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
            number="2"
            tipName="Oranges"
            tipText="It contains 72% water in it. It’s tangy nature helps with skin care."
            src={oranges}
          />
          <Tip
            number="3"
            tipName="Grapes"
            tipText="It contains vitamin ‘C’ which helps with retaining water."
            src={grapes}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;