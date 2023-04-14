import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Water Reminder</p>
      <Link className={styles.buttonStart} to="/profile">Continue</Link>
    </div>
  )
}

export default Start;