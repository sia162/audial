import React from "react";
import Burger from "./components/Burger-Menu/Burger";
import Player from "./components/player/Player";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return (
    <>
      <BrowserRouter>
        {code ? <Burger /> : ""}
        {code ? <Player code={code} /> : <Login />}

        <Routes>
          <Route path="/" element={<Player />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
