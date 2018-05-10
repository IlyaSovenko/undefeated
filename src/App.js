import React, { Component } from 'react';
import logo from './assets/logo-white.svg';
import * as styles from './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

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
          <div className={styles.invite}>
            <h3>Хочешь поехать?</h3>
            <span>Поторопись, места ограничены!</span>
            <button>Зарегестрироваться</button>
          </div>
          <div className={styles.whenAndWhere}>
            <h3>26 - 29 июля</h3>
            <span><h4>4</h4> <span>незабываемых</span> дня фестиваля!</span>
            <Map
              google={this.props.google}
              zoom={13}
              style={{width: '100%', height: 500}}
              initialCenter={{lat: 50.965209, lng: 34.899343}}
            >
              <Marker title={'Здесь место фестиваля'} name={'UNDEFEATED'} />
            </Map>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <h1>
            <span className={styles.left}>Осталось</span>
            <span className={styles.days}>22</span>
            <span className={styles.right}>дня</span>
          </h1>
        </div>
        <div className={styles.fourthSection}>
          <h1>Регистрация</h1>
          <form>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input placeholder="example@example.com" id="email" type="email" />
            </div>
            <div className={styles.phone}>
              <label htmlFor="phone">Телефон</label>
              <input placeholder="0501112233" id="phone" type="text" />
            </div>
            <button>Зарегестрироваться</button>
          </form>
        </div>
        <div className={styles.footer}>
          <h1>Контакты</h1>
          <div className={styles.socials}>
            <i className="fab fa-instagram"/>
            <i className="fab fa-facebook-f"/>
            <i className="fab fa-vk"/>
            <i className="fab fa-twitter"/>
            <span>
              <i className="fas fa-phone"/>
              <span className={styles.phone}> +380501112233</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const GOOGLE_API_KEY = 'AIzaSyD_EnZtafth9UxudME65AtdTt1GbxLCaaE';


export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(App);
