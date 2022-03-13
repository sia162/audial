import React, { useEffect, useState } from "react";
import Burger from "./components/Burger-Menu/Burger";
import Player from "./components/player/Player";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash; //hash in the url
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      console.log(token);
      window.location.hash = ""; //clearing the url
      window.localStorage.setItem("token", token); //storing token in local storage
    }
    
    setToken(token);
  }, []);

  const HandleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <BrowserRouter>
        {token ? <Burger HandleLogout={HandleLogout} /> : ""}
        {!token ? <Login /> : <Player />}

        {/* <Routes>
          <Route path="/#" element={<Player />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
