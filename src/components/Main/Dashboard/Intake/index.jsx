import styles from "./index.module.scss";

const Intake = ({ nameElement, amount, numberElement, imgForEl }) => {
  const number = numberElement;
  let backgroundColor = "";
  let fontColor = "";
  number === "1"
    ? (backgroundColor = `url(${imgForEl})`)
    : number === "2"
    ? (backgroundColor = `url(${imgForEl})`)
    : (backgroundColor = `url(${imgForEl})`);
  number === "1"
    ? (fontColor = "#55A55E")
    : number === "2"
    ? (fontColor = "#5E5498")
    : (fontColor = "#9B715D");

  return (
    <div
      className={styles.intakeBody}
      style={{backgroundImage: backgroundColor}}
    >
      <div className={styles.percentageGraph}></div>
      <div className={styles.info}>
        <div
          className={styles.name}
          style={{color: fontColor}}
        >
          {nameElement} intake
        </div>
        <div
          className={styles.amount}
          style={{color: fontColor}}
        >
          {amount} ml
        </div>
      </div>
    </div>
  );
};

export default Intake;
