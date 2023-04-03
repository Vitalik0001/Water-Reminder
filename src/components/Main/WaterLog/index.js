import styles from "./index.module.css";
import waterDroplet from '../../../img/main/waterDroplet.svg'

const WaterLog = (props) => {

    return (
        <div className={styles.logBody}>
            <div className={styles.leftHalf}>
                <img className={styles.waterDropImg} alt='waterdrop' src={waterDroplet} />
                <div className={styles.waterAmount}>{props.waterAmount} ml</div>
            </div>
            <div className={styles.rightHalf}>
                <div className={styles.time}> {props.time}</div>

            </div>

        </div>

    )
}

export default WaterLog;