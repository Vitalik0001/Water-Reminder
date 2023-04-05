import styles from "./index.module.scss";

import human from '../../assets/img/profile/7312343.jpg'
import change from "../../assets/img/profile/change.png";

const Profile = () => {
  return (
    <div className={styles.data}>
      <div className={styles.logo}>
        <img alt="logo" src={human} className={styles.human}/>
        <a href="/"><img alt="change" src={change} className={styles.change} /></a>
      </div>
      <h2 className={styles.title}>Username</h2>
      <div className={styles.user}>
        <div className={styles.name}>
          <p>Name</p>
          <input 
            className={styles.inputName}
            type="text" 
            name="name"
            placeholder="Write your name..."
          />
        </div>
        <div className={styles.weight}>
          <p>Weight</p>
          <input
            className={styles.inputNumber} 
            type="number" 
            step="1" 
            min="35" 
            max="100" 
            name="weight" 
            placeholder="35 kg"
          />
        </div>
        <div className={styles.height}>
          <p>Height</p>
          <input 
            className={styles.inputNumber} 
            type="number" 
            step="1" 
            min="140" 
            max="220" 
            name="height" 
            placeholder="140 cm"
          />
        </div>
      </div>
      <div className={styles.nextButton}>
        <a href="/">Next</a>
      </div>
    </div>  
  )
}

export default Profile;