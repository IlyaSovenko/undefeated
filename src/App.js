import React, { Component } from 'react';
import logo from './assets/logo-white.svg';
import * as styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.firstSection}>
          <img src={logo} alt="logo"/>
        </div>
      </div>
    );
  }
}

export default App;
