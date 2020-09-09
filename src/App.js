import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__Text">
        <h1 className="App__title">La république de Cordou</h1>
        <p className="App__description">
          Xavier Fourtou, psychanalyste et auteur de ce conte illustré
          <br />
          avec talent par la designer Lisa Chaput, nous livre une histoire
          <br />
          tendre et sociale qui donne envie de vivre plus fort ici et ailleurs.
        </p>
      </div>
      <div className="App__Order">
        <span className="Order__title">Commander</span>
        <a className="Order__cta" href="https://www.google.com/">
          <img className="Order__logo" src={require("./images/fauves_icon.png")} alt="Icône marque Fauves" />
        </a>
        <a className="Order__cta" href="https://www.google.com/">
          <img className="Order__logo" src={require("./images/amazon_icon.png")} alt="Icône marque Amazon" />
        </a>
        <a className="Order__cta" href="https://www.google.com/">
          <img className="Order__logo" src={require("./images/fnac_icon.png")} alt="Icône marque Fnac" />
        </a>
      </div>
      <div className="App__Illustration"></div>
    </div>
  );
}

export default App;
