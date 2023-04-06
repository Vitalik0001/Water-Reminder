import styles from "./index.module.scss";

const Start = () => {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Water Reminder</p>
      <a className={styles.buttonStart} href="/">Continue</a>
    </div>
  )
}

export default Start;