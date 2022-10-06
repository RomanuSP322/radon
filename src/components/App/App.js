import React, { Suspense } from "react";
import { Route, Switch, useNavigate } from "react-router-dom";

import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main"

function App() {

  let history = useNavigate();

  history.listen((location, action) => {
    if (action === `PUSH`) window.scrollTo(0, 0);
  });

  return (
    <div className="app">
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
