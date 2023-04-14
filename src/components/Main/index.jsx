import styles from "./index.module.scss";
import Dashboard from "./Dashboard/index";
import FoodCalories from "./Food/index";
import WaterLog from "./WaterLog/index";

// imgs

import logoDrop from "../../assets/img/main/logo-drop.png";
import waterDrop from "../../assets/img/main/water-drop.svg";
import dashboard from "../../assets/img/main/dashboard.svg";
import burger from "../../assets/img/main/burger.svg";
import setting from "../../assets/img/main/setting.svg";
import avatar from "../../assets/img/main/7342052.jpg";
import calendar from "../../assets/img/main/calendar.svg";
import bottle from "../../assets/img/main/water-bottle.svg";
import bottleBackground from "../../assets/img/main/water-bottle-bg.svg";



const Main = ({ userName }) => {
  
  const calendarDataMain = () => {
    const calendarDay = new Date().toDateString().slice(0, 3);
    const calendarDate = new Date().getDate();
    const calendarMonth = new Date().toDateString().slice(3, 7);
    const calendarYear = new Date().getFullYear();
    const result = `${calendarDay}, ${calendarDate} ${calendarMonth} ${calendarYear}`;

    return result;
  }

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.navBody}>
          <div className={styles.logo}>
            <img alt="logo-drop" src={logoDrop} />
            <p>Water Reminder</p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuWord}>Menu</div>
            <nav className={styles.menuNav}>
              <div className={styles.dashboard}>
                <img alt="dashboard" src={dashboard} />
                <a href="/">Dashboard</a>
              </div>
              <div className={styles.foodCalories}>
                <img alt="burger" src={burger} />
                <a href="/">Food Calories</a>
              </div>
              <div className={styles.water}>
                <img alt="water" src={waterDrop} />
                <a href="/">Water</a>
              </div>
            </nav>
          </div>
          <div className={styles.user}>
            <img src={avatar} className={styles.userImg} alt="user-img"></img>
            <div className={styles.userInfo}>
              <div className={styles.userMailName}>
                <p>Mathew Perry</p>
                <a href="/"><img alt="setting" src={setting} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerHeader}>
            <div className={styles.greeting}>
              Welcome back{" "}
              <span className={styles.userName}>{userName}!</span>
            </div>
          </div>
          <div>
            {/* <Dashboard 
              typeOfTip='Hydration'
              subtitleTip='Consuming fruit juices keeps up the hydration level.'
            /> */}
            <FoodCalories 
              typeOfTip='Dietary'
              subtitleTip='Healthy food keeps our body in good shape and improves physical condition.'
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.currentDay}>
            <img alt="calendar" src={calendar} />
            <p>{calendarDataMain()}</p>
          </div>
          <div className={styles.bottle}>
            <img src={bottle} alt="bottle" className={styles.bottleImg} />
            <img src={bottleBackground} alt="bottleBackground" className={styles.bottleImgBg} />
            <span className={styles.bottlePhrase}>Stay Hydrated and beat heat.</span>
          </div>
          <div className={styles.intakeGoal}>
            Intake Goal
            <span className={styles.waterMl}>18000 ml / 25000 ml</span>
          </div>
          <div className={styles.drinkLog}>
            Drink log
            <WaterLog waterAmount="100" time="02:00 pm" />
            <WaterLog waterAmount="100" time="02:00 pm" />
            <WaterLog waterAmount="100" time="02:00 pm" />
            <WaterLog waterAmount="100" time="02:00 pm" />
            <WaterLog waterAmount="100" time="02:00 pm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;