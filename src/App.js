import React, { Component } from 'react';
import logo from './assets/logo-white.svg';
import * as styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.firstSection}>
          <div className={styles.topSlogan}><hr/><span className={styles.slogan}>Будь неопбедимым!</span><hr/></div>
          <div className={styles.socials}>
            <i className="fab fa-instagram"/>
            <i className="fab fa-facebook-f"/>
            <i className="fab fa-vk"/>
            <i className="fab fa-twitter"/>
          </div>
          <img src={logo} alt="logo"/>
        </div>
        <div className={styles.secondSection}>
          <span className={styles.title}><h2>Undefeated</h2> - это</span>
          <div className={styles.info}>
            <div className={styles.card}>
            </div>
            <div className={styles.card}>
            </div>
            <div className={styles.card}>
            </div>
          </div>
          {/*<div className={styles.invite}>*/}
            {/*<h3>Хочешь поехать?</h3>*/}
            {/*<span>Поторопись, места ограничены!</span>*/}
          {/*</div>*/}
          <button>Зарегестрироваться</button>
          <span className={styles.title}><h2>s.Velika Chernetchena</h2></span>
          <div className={styles.info}>
            <div className={styles.card}>
            </div>
            <div className={styles.card}>
            </div>
            <div className={styles.card}>
            </div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          Осталось 22дня
        </div>
      </div>
    );
  }
}

export default App;
