import React, {useEffect, useRef} from "react";
import styles from "./index.module.scss";
import {Link, NavLink, Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import WaterLog from "./WaterLog/index";
import dayjs from "dayjs";

// img
import logoDrop from "../../assets/img/main/logo-drop.png";
import waterDrop from "../../assets/img/main/water-drop.svg";
import dashboard from "../../assets/img/main/dashboard.svg";
import burger from "../../assets/img/main/burger.svg";
import setting from "../../assets/img/main/setting.svg";
import calendar from "../../assets/img/main/calendar.svg";
import bottle from "../../assets/img/main/water-bottle.svg";
import bottleBackground from "../../assets/img/main/water-bottle-bg.svg";

const Main = () => {
  const dailyIntake = useSelector(state => state.dailyIntake.sumFromInput);
  const waterLogElement = useSelector(state => state.dailyIntake.waterWidget);
  const dataForCalendar = dayjs().format("ddd, D MMM YYYY");

  const formDataInput = useSelector(state => state.humanData.formData);
  const calculateWater = useSelector(state => state.humanData.waterBalance);
  const humanImg = useSelector(state => state.humanData.humanImg);

  let counter = 0;

  const waterLogRef = useRef();

  const newElements = waterLogElement.map(elem => elem);
  useEffect(() => {
    waterLogRef.current?.scrollIntoView();
  }, [newElements]);

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.navBody}>
          <div className={styles.logo}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img alt="logo-drop" src={logoDrop} />
            </motion.div>
            <p>Water Reminder</p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuWord}>Menu</div>
            <nav className={styles.menuNav}>
              <div className={styles.dashboard}>
                <img alt="dashboard" src={dashboard} />
                <NavLink to="." className={styles.navClause}>Dashboard</NavLink>
              </div>
              <div className={styles.foodCalories}>
                <img alt="burger" src={burger} />
                <NavLink to="food" className={styles.navClause}>Food Calories</NavLink>
              </div>
              <div className={styles.water}>
                <img alt="water" src={waterDrop} />
                <NavLink to="water" className={styles.navClause}>Water</NavLink>
              </div>
            </nav>
          </div>
          <div className={styles.user}>
            <img src={humanImg} className={styles.userImg} alt="user-img"></img>
            <div>
              <div className={styles.userMailName}>
                <p>{formDataInput.name === "" ? formDataInput.username : formDataInput.name}</p>
                <motion.div
                  whileHover={{rotate: 70}}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/profile"><img alt="setting" src={setting} /></Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.centerHeader}>
            <div className={styles.greeting}>
              <p>Welcome back, <span className={styles.userName}>{formDataInput.name === "" ? formDataInput.username : formDataInput.name}!</span></p>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.currentDay}>
            <img alt="calendar" src={calendar} />
            <p>{dataForCalendar}</p>
          </div>
          <div className={styles.bottle}>
            <img src={bottle} alt="bottle" className={styles.bottleImg} />
            <img src={bottleBackground} alt="bottleBackground" className={styles.bottleImgBg} />
            <span className={styles.bottlePhrase}>Stay Hydrated and beat heat.</span>
          </div>
          <div className={styles.intakeGoal}>
            Intake Goal
            {dailyIntake >= 2600
              ? <motion.p
                  initial={{  opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={styles.widgetBalance}
                >
                  Complete !
                </motion.p>
              : <span className={styles.waterMl}>{dailyIntake} ml / {calculateWater} ml</span>
            }
          </div>
          <div className={styles.drinkLog}>
            <div className={styles.waterTitle}>
              <p>Drink log</p>
            </div>
            {waterLogElement.map(elem => (
              <motion.div
                animate={{ y: 10 }}
              >
                <WaterLog key={counter++} waterAmount={elem.waterNum} time={elem.time} />
              </motion.div>
            ))}
            <div ref={waterLogRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;