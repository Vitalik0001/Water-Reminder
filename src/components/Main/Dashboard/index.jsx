import styles from "./index.module.scss";
import {useSelector} from "react-redux";
import Intake from "./Intake/index.jsx";
import Tip from "./Tip/index.jsx";
import Weather from "./Weather";
import { motion } from "framer-motion";

// img
import intake1 from "../../../assets/img/main/daily-intake-1.svg";
import intake2 from "../../../assets/img/main/daily-intake-2.svg";
import intake3 from "../../../assets/img/main/daily-intake-3.svg";
import watermelon from "../../../assets/img/main/watermelon.svg";
import oranges from "../../../assets/img/main/oranges.svg";
import grapes from "../../../assets/img/main/grapes.svg";

const Dashboard = () => {
  const averageIntake = useSelector(state => state.dailyIntake.averageIntake);
  const totalIntake = useSelector(state => state.dailyIntake.sumFromInput);
  const waterBalance = useSelector(state => state.humanData.waterBalance);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={styles.weather}>
        <Weather />
      </div>
      <div className={styles.intakes}>
        <Intake
          nameElement="Daily"
          amount={totalIntake}
          numberElement="1"
          imgForEl={intake1}
        />
        <Intake
          nameElement="Average"
          amount={averageIntake}
          numberElement="2"
          imgForEl={intake2}
        />
        <Intake
          nameElement="Total"
          amount={waterBalance}
          numberElement="3"
          imgForEl={intake3}
        />
      </div>
      <div className={styles.currentChosenMenuLink}></div>
      <div className={styles.tipsBoard}>
        <p>Hydration Tips</p>
        <span className={styles.subtitleTip}>Consuming fruit juices keeps up the hydration level.</span>
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
    </motion.div>
  );
};

export default Dashboard;
