import styles from "./index.module.scss";
import waterDroplet from "../../../assets/img/main/waterDroplet.svg";

const WaterLog = ({ waterAmount, time }) => {
  return (
    <div className={styles.logBody}>
      <div className={styles.leftHalf}>
        <img
          className={styles.waterDropImg}
          alt="waterdrop"
          src={waterDroplet}
        />
        <div className={styles.waterAmount}>{waterAmount} ml</div>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.time}> {time}</div>
      </div>
    </div>
  );
};

export default WaterLog;
