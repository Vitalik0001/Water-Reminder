import styles from "./index.module.scss";
import Dashboard from "./Dashboard/index";
import Intake from "./Intake/index";
import Tip from "./Tip/index";
import WaterLog from "./WaterLog/index";

// imgs

import logoDrop from "../../assets/img/main/logo-drop.png";
import waterDrop from "../../assets/img/main/water-drop.svg";
import dashboard from "../../assets/img/main/dashboard.svg";
import burger from "../../assets/img/main/burger.svg";
import setting from "../../assets/img/main/setting.svg";
import avatar from "../../assets/img/main/7342052.jpg";
import intake1 from '../../assets/img/main/daily-intake-1.svg';
import intake2 from '../../assets/img/main/daily-intake-2.svg';
import intake3 from '../../assets/img/main/daily-intake-3.svg';
import calendar from "../../assets/img/main/calendar.svg";
import bottle from "../../assets/img/main/water-bottle.svg";
import bottleBackground from "../../assets/img/main/water-bottle-bg.svg";
import watermelon from "../../assets/img/main/watermelon.svg";
import oranges from "../../assets/img/main/oranges.svg";
import grapes from "../../assets/img/main/grapes.svg";


const Main = ({ typeOfTip, subtitleTip, userName }) => {
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
          <div className={styles.weather}></div>
          <div className={styles.intakes}>
            <Intake nameElement="Daily" amount="5000" numberElement="1" imgForEl={intake1} />
            <Intake nameElement="Average" amount="2500" numberElement="2" imgForEl={intake2} />
            <Intake nameElement="Total" amount="17000" numberElement="3" imgForEl={intake3} />
          </div>
          <div className={styles.currentChosenMenuLink}>
            <Dashboard />
          </div>
          <div className={styles.tipsBoard}>
            {typeOfTip} Tips
            <span className={styles.subtitleTip}>{subtitleTip} </span>
            <div className={styles.tipsRow}>
              <Tip
                numberElement="1"
                tipName="Watermelon"
                tipText="It contains 97% water in it. A good choice to stay hydrated."
                src={watermelon}
              />
              <Tip
                number="2"
                tipName="Oranges"
                tipText="It contains 72% water in it. It’s tangy nature helps with skin care."
                src={oranges}
              />
              <Tip
                number="3"
                tipName="Grapes"
                tipText="It contains vitamin ‘C’ which helps with retaining water."
                src={grapes}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.currentDay}>
            <img alt="calendar" src={calendar} />
            Tue, 24 Nov 2021
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