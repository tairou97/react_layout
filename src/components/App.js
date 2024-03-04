import React from "react";
import "../sass/App.scss";
import Vocals from "../pages/Vocals";
import Guitar from "../pages/Guitar";
import Bass from "../pages/Bass";
import Drums from "../pages/Drums";
import { Route, Routes, NavLink } from "react-router-dom";
// complete the following code
function App() {
  return (
    <div className="app  ">
      <main className="navigation">
        <img className="logo" src={require("../static/logo.png")} />
        <nav>
          <ul>
            <li>
              <NavLink to="/vocals">Vocals</NavLink>
            </li>
            <li>
              <NavLink to="/guitar">Guitar</NavLink>
            </li>
            <li>
              <NavLink to="/bass">Bass</NavLink>
            </li>
            <li>
              <NavLink to="/drums">Drums</NavLink>
            </li>
          </ul>
        </nav>
      </main>
      <Routes>
        <Route path="/vocals" element={<Vocals />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/bass" element={<Bass />} />
        <Route path="/drums" element={<Drums />} />
      </Routes>
    </div>
  );
}

export default App;
