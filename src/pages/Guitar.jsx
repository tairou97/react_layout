import React from "react";
import "../sass/App.scss";
const Guitar = () => {
  return (
    <main className="selected">
      <img src={require("../static/guitar.png")} />
    </main>
  );
};

export default Guitar;
