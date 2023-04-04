import styles from "./index.module.css";
import Dashboard from './Dashboard/index';
import Intake from "./Intake/index";
import Tip from './Tip';
import WaterLog from "./WaterLog";

// imgs

import avatar from '../../img/main/7342052.jpg'
import calendar from '../../img/main/calendar.svg'
import watermelon from '../../img/main/watermelon.png'
import oranges from '../../img/main/oranges.png'
import grapes from '../../img/main/grapes.png'
// import bottle from '../../img/main/waterBottle.png'

const Main = (props) => {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.navBody}>
                    <div className={styles.logo}>
                        <img alt="first-part" />
                        <img alt="second-part" />
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuWord}>Menu</div>
                        <nav className={styles.menuNav}>
                            <a href='/'>Dashboard</a>
                            <a href='/'>Food Calories</a>
                            <a href='/'>Water</a>
                        </nav>

                    </div>
                    <div className={styles.user}>
                        <img src={avatar} className={styles.userImg} alt='user-img'></img>
                        <div className={styles.userInfo}>
                            <div className={styles.userMailName}>Mathew Perry</div>
                            <div className={styles.userMail}>mathewperry@xyz.com</div>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.centerHeader}>
                        <div className={styles.greeting}>
                            Welcome back <span className={styles.userName}>{props.userName}!</span>
                        </div>
                    </div>
                    <div className={styles.weather}></div>
                    <div className={styles.intakes}>
                        <Intake name='Daily' amount='5000' number='1' />
                        <Intake name='Average' amount='2500' number='2' />
                        <Intake name='Total' amount='17000' number='3' />

                    </div>
                    <div className={styles.currentChosenMenuLink}>
                        <Dashboard />
                    </div>
                    <div className={styles.tipsBoard}>
                        {props.typeOfTip} Tips
                        <span className={styles.subtitleTip}>{props.subtitleTip} </span>
                        <div className={styles.tipsRow}>
                            <Tip number='1' tipName='Watermelon'
                                tipText='It contains 97% water in it. A good choice to stay hydrated.'
                                src={watermelon} />
                            <Tip number='2' tipName='Oranges'
                                tipText="It contains 72% water in it. It’s tangy nature helps with skin care."
                                src={oranges} />
                            <Tip number='3' tipName='Grapes'
                                tipText="It contains vitamin ‘C’ which helps with retaining water."
                                src={grapes} />
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.currentDay}> <img alt="calendar" src={calendar}></img>Tue, 24 Nov 2021</div>
                    {/* <div className={styles.bottle}>
                        <img src={bottle} alt="bottle" className={styles.bottleImg}></img>
                        <span className={styles.bottlePhrase}>Stay Hydrated and beat heat.</span>
                    </div> */}
                    <div className={styles.intakeGoal}>
                        Intake Goal
                        <span className={styles.waterMl}>18000 ml / 25000 ml</span>
                    </div>
                    <div className={styles.drinkLog}>
                        Drink log
                        <WaterLog waterAmount='100' time='02:00 pm' />
                        <WaterLog waterAmount='100' time='02:00 pm' />
                        <WaterLog waterAmount='100' time='02:00 pm' />
                        <WaterLog waterAmount='100' time='02:00 pm' />
                        <WaterLog waterAmount='100' time='02:00 pm' />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main;