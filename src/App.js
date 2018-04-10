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
          <h1>Second Section</h1>
        </div>
      </div>
    );
  }
}

export default App;
