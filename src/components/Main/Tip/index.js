import styles from "./index.module.css";

const Tip = (props) => {
    const number = props.number;
    let backgroundColor = '';

    number === '1' ? backgroundColor = '#EDFFEF' :
        number === '2' ? backgroundColor = '#FFF2EC' :
            backgroundColor = '#F4F2FF';


    return (
        <div className={styles.tipBody} style={{
            backgroundColor: backgroundColor
        }}>
            <img className={styles.foodImg} alt='foodimg' src={props.src} />
            <div className={styles.info}>
                <div className={styles.tipName}> {props.tipName} </div>
                <div className={styles.tipText}>{props.tipText} </div>
            </div>
        </div >
    )
}

export default Tip;