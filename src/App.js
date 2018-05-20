import React, {Component} from 'react';
import logo from './assets/logo-white.svg';
import festival from './assets/festival.jpg';
import nature from './assets/nature.jpg';
import friends from './assets/friends.jpg';
import * as styles from './App.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  scrollOnSignUp = () => {
    window.scrollTo( 0, this.signUp.offsetTop );
  }

  render() {
    let submitted = false;

    return (
      <div className={styles.App}>
        <div className={styles.firstSection}>
          <div className={styles.topSlogan}>
            <hr/>
            <span className={styles.slogan}>Будь неопбедимым!</span>
            <hr/>
          </div>
          <div className={styles.socials}>
            <a href={'https://www.instagram.com/undefeated_sumy/'}><i className="fab fa-instagram"/></a>
            <a href={'https://www.facebook.com/undefeated.sumy'}><i className="fab fa-facebook-f"/></a>
            <a href={'mailto:undefeated.sumy@gmail.com'}><i className="fa fa-envelope"/></a>
          </div>
          <img src={logo} alt="logo"/>
        </div>
        <div className={styles.secondSection}>
          <span className={styles.title}><h2>Undefeated</h2> - это</span>
          <div className={styles.info}>
            <div className={styles.card}>
              <img src={festival} alt="festival" />
              <span>
                Молодёжный
                <span className={styles.highlight}>фестиваль</span>
                с крутыми спикерами, классным прославлением, интерестными мастер-классами и многим другим
              </span>
            </div>
            <div className={styles.card}>
              <img src={nature} alt="nature" />
              <span>
                Отличное
                <span className={styles.highlight}>место</span>
                для отдыха на природе, в сосновом лесу, ночуя в просторной палатке, в тёплом спальнике, на берегу реки
              </span>
            </div>
            <div className={styles.card}>
              <img src={friends} alt="friends" />
              <span>
                <span className={styles.highlight}>Время</span>
                для встречи новых друзей, или укрепления отношений со "старыми", время для создания крепких отношения на долгие годы
              </span>
            </div>
          </div>
          <div className={styles.invite}>
            <h3>Хочешь поехать?</h3>
            <span>Поторопись, места ограничены!</span>
            <button onClick={this.scrollOnSignUp}>Зарегестрироваться</button>
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
              <Marker title={'Здесь место фестиваля'} name={'UNDEFEATED'}/>
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
        <div ref={signUp => { this.signUp = signUp }} className={styles.fourthSection}>
          <h1>Регистрация</h1>
          <iframe title="redirect" name="hidden_iframe" id="hidden_iframe"
                  style={{display: 'none'}} onLoad={() => {if(submitted)
{window.location='#';}}} />
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSerK874Q0pLqdvftWntD6Rw5ubvnF4wnenYe09gwR4PqdhKyw/formResponse"
              target="hidden_iframe" onSubmit={() => submitted=true} method="POST" id="mG61Hd">
              <div className={styles.name}>
                <label htmlFor="name">Имя</label>
                <input type="text"
                       aria-label="Имя"
                       aria-describedby="i.desc.1394331759 i.err.1394331759"
                       name="entry.203542861"
                       dir="auto"
                       placeholder="Иван"
                       data-initial-dir="auto"
                       data-initial-value=""/>
              </div>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input
                  aria-label="Email"
                  aria-describedby="i.desc.1517807756 i.err.1517807756"
                  name="entry.446682602"
                  dir="auto"
                  data-initial-dir="auto"
                  data-initial-value="" placeholder="example@example.com" id="email" type="email"/>
              </div>
              <div className={styles.phone}>
                <label htmlFor="phone">Телефон</label>
                <input aria-label="Телефон"
                       aria-describedby="i.desc.1743113707 i.err.1743113707"
                       name="entry.810242402"
                       dir="auto"
                       data-initial-dir="auto"
                       data-initial-value="" placeholder="0501112233" id="phone" type="text"/>
              </div>
              <input type="hidden" name="fvv" value="1"/><input type="hidden" name="draftResponse"
                                                                value="[null,null,&quot;5058077176259123571&quot;]"/><input
              type="hidden" name="pageHistory" value="0"/><input type="hidden" name="fbzx"
                                                                 value="5058077176259123571"/>
              <button>Зарегестрироваться</button>
            </form>
        </div>
        <div className={styles.footer}>
          <h1>Контакты</h1>
          <div className={styles.socials}>
            <a href={'https://www.instagram.com/undefeated_sumy/'}><i className="fab fa-instagram"/></a>
            <a href={'https://www.facebook.com/undefeated.sumy'}><i className="fab fa-facebook-f"/></a>
            <a href={'mailto:undefeated.sumy@gmail.com'}><i className="fa fa-envelope"/></a>
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
