import styles from "./index.module.scss";

const Tip = ({ numberElement, tipName, tipText, src }) => {
  const number = numberElement;
  let backgroundColor = "";

  number === "1"
  ? (backgroundColor = "#EDFFEF")
  : number === "2"
  ? (backgroundColor = "#FFF2EC")
  : number === "3"
  ? (backgroundColor = "#EDFFEF")
  : number === "4"
  ? (backgroundColor = "#FFF2EC")
  : number === "5"
  ? (backgroundColor = "#EDFFEF")
  : (backgroundColor = "#F4F2FF");

  return (
    <div
      className={styles.tipBody}
      style={{backgroundColor: backgroundColor}}
    >
      <img className={styles.foodImg} alt="foodimg" src={src} />
      <div className={styles.info}>
        <div className={styles.tipName}> {tipName} </div>
        <div className={styles.tipText}>{tipText} </div>
      </div>
    </div>
  );
};

export default Tip;
