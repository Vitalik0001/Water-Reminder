import styles from "./index.module.css";

const Intake = (props) => {
    const number = props.number;
    let backgroundColor = '';
    let fontColor = '';
    number === '1' ? backgroundColor = '#EDFFEF' :
        number === '2' ? backgroundColor = '#F4F2FF' :
            backgroundColor = '#FFF2EC';
    number === '1' ? fontColor = '#55A55E' :
        number === '2' ? fontColor = '#5E5498' :
            fontColor = '#9B715D';

    return (
        <div className={styles.intakeBody} style={{
            backgroundColor: backgroundColor
        }}>
            <div className={styles.percentageGraph}></div>
            <div className={styles.info}>
                <div className={styles.name} style={{
                    color: fontColor
                }}> {props.name} intake</div>
                <div className={styles.amount} style={{
                    color: fontColor
                }}>{props.amount} ml</div>
            </div>
        </div>
    )
}

export default Intake;