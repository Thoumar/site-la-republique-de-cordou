import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__Text">
        <h1 className="App__title">La république de Cordou</h1>
        <p className="App__description">
          Xavier Fourtou, psychanalyste et auteur de ce conte illustré avec talent par la designer Lisa Chaput, nous livre une histoire tendre et
          sociale qui donne envie de vivre plus fort ici et ailleurs.
        </p>
      </div>
      <div className="App__Order">
        <span className="Order__title">Commander</span>
        <a className="Order__cta" href="#">
          <img className="Order__logo" src="./images/" alt="" />
        </a>
        <a className="Order__cta" href="#">
          <img className="Order__logo" src="./images/" alt="" />
        </a>
        <a className="Order__cta" href="#">
          <img className="Order__logo" src="./images/" alt="" />
        </a>
      </div>
      <div className="App__Illustration"></div>
    </div>
  );
}

export default App;
