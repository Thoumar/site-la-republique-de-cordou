import React, { useState, useEffect } from "react";

import bgVideo from "./images/cordoue_bg.mp4"
import bgAudio from "./audio/music_bg.mp3"
import soundIcon from "./images/sound_icon.png"
import soundIconOff from "./images/sound_icon_off.png"

import "./App.css";

const App = () => {

  const [soundState, setSoundState] = useState({ on: false })
  const [langState, setlangState] = useState({ lang: "FR" })

  const toggleState = () => {
    setSoundState((previousState) => {
      return { on: !previousState.on }
    })
  }

  const toggleLangState = (selectedLang) => {
    setlangState(() => {
      return { lang: selectedLang }
    })
  }

  useEffect(() => {
    const video = document.querySelector('video');
    const playPromise = video.play() || Promise.reject('');
    playPromise.then(() => { }).catch(err => {
      video.muted = true;
      video.play();
    });

    if(!soundState.on) {
      var iframe = document.querySelector('iframe');
      if(iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.querySelector('video')) {
        iframe.contentWindow.document.querySelector('video').muted = soundState.on
      }
    }
  })

  const content = {
    EN: {
      appTitle: "The Republic of Cordoba",
      text: {
        lineOne: "Xavier Fourtou is a French psychoanalyst ",
        lineTwo: "and the author ofthis tale, which has been ",
        lineThree: "beautifully illustrated by designer Lisa Chaput. ",
        lineFour: "Together they tell a story that is tender ",
        lineFive: "andsociable, and will make you want",
        lineSix: "to live more fully, wherever you may be."
      },
      order: "Order",
      links: {
        fauves: {
          uri: "https://www.fauves-editions.fr/index.asp?navig=catalogue&obj=livre&no=202&razSqlClone=1",
          alt: "Icône marque Fauves",
          active: true
        },
        amazon: {
          uri: "https://www.amazon.fr/Republique-Cordoue-Fourtou-Chaput/dp/B08LNBS5L7/ref=sr_1_1?Go.x=0&Go.y=0&__mk_fr_FR=%EF%BF%BDM%EF%BF%BDZ%EF%BF%BD%EF%BF%BD&dchild=1&keywords=9791030203585&qid=1605342276&sr=8-1",
          alt: "Icône marque Amazon",
          active: false
        },
        fnac: {
          uri: "https://livre.fnac.com/a15255806/Xavier-Fourtou-La-Republique-de-Cordoue#omnsearchpos=1",
          alt: "Icône marque Fnac",
          active: false
        },
      }
    },
    FR: {
      appTitle: "La république de Cordoue",
      text: {
        lineOne: "Xavier Fourtou, psychanalyste et auteur de",
        lineTwo: "ce conte illustré avec talent par la designer",
        lineThree: "Lisa Chaput, nous livre une histoire tendre",
        lineFour: "et sociale qui donne envie de vivre",
        lineFive: "plus fort ici et ailleurs.",
        lineSix: ""
      },
      order: "Commander",
      links: {
        fauves: {
          uri: "https://www.fauves-editions.fr/index.asp?navig=catalogue&obj=livre&no=202&razSqlClone=1",
          alt: "Icône marque Fauves",
          active: true
        },
        amazon: {
          uri: "https://www.amazon.fr/Republique-Cordoue-Fourtou-Chaput/dp/B08LNBS5L7/ref=sr_1_1?Go.x=0&Go.y=0&__mk_fr_FR=%EF%BF%BDM%EF%BF%BDZ%EF%BF%BD%EF%BF%BD&dchild=1&keywords=9791030203585&qid=1605342276&sr=8-1",
          alt: "Icône marque Amazon",
          active: false
        },
        fnac: {
          uri: "https://livre.fnac.com/a15255806/Xavier-Fourtou-La-Republique-de-Cordoue#omnsearchpos=1",
          alt: "Icône marque Fnac",
          active: true
        },
      }
    }
  }

  
  return (
    <div className="App">
      <div className="App__lang">
          <span
            style={{
              color: langState.lang === "FR" ? "red" : "white"
            }}
            onClick={() => { toggleLangState('FR') }}
          >FR</span> |
          <span
            style={{
              color: langState.lang === "FR" ? "white" : "red"
            }}
            onClick={() => { toggleLangState('EN') }}
          > EN</span>
        </div>
      <div className="App__Text">
        <h1 className="App__title">{content[langState.lang].appTitle}</h1>
        <p className="App__description">
        {content[langState.lang].text.lineOne}<br />
          {content[langState.lang].text.lineTwo}<br />
          {content[langState.lang].text.lineThree}<br />
          {content[langState.lang].text.lineFour}<br />
          {content[langState.lang].text.lineFive}<br />
          {content[langState.lang].text.lineSix}
        </p>
        <img onClick={toggleState} className="App__Icon" src={soundState.on ? soundIcon : soundIconOff} alt='Sound icon' />
      </div>
      <div className="App__Order">
        <span className="Order__title">{content[langState.lang].order}</span>
        {
          content[langState.lang].links.fauves.active
            ? <a className="Order__cta" href={content[langState.lang].links.fauves.uri}>
                <img className="Order__logo" src={require("./images/fauves_icon.png")} alt={content[langState.lang].links.fauves.alt} />
              </a>
            : null
        }
        {
          content[langState.lang].links.amazon.active
            ? <a className="Order__cta" href={content[langState.lang].links.amazon.uri}>
                <img className="Order__logo" src={require("./images/amazon_icon.png")} alt={content[langState.lang].links.amazon.alt} />
              </a>
            : null
        }
        {
          content[langState.lang].links.fnac.active
            ? <a className="Order__cta" href={content[langState.lang].links.fnac.uri}>
                <img className="Order__logo" src={require("./images/fnac_icon.png")} alt={content[langState.lang].links.fnac.alt} />
              </a>
            : null
        }
      </div>

      <audio id="player" autoPlay loop muted={!soundState.on}>
          <source src={bgAudio} />
      </audio>

      <video className="App__video">
				<source src={bgVideo} type="video/mp4" />
			</video>
    </div>
  );
}

export default App;