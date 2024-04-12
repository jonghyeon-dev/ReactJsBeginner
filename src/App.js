// import { useState, useEffect } from "react";
import Home from './routes/Home';
import Detail from './routes/Detail';
import React from "react";
import {
  
  BrowserRouter as Router,
  // HashRouter as Router,
  // Switch, // 구버전
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
    {/* React.js 5버전 이하
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch> */}
    {/* React.js 6버전 이상 */}
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path={process.env.PUBLIC_URL+"/hello"} element={<h1>Hello</h1>}/>
      <Route path={process.env.PUBLIC_URL+"/movie/:id"} element={<Detail />} />
      <Route path={process.env.PUBLIC_URL+"/"} element={<Home />} />
    </Routes>
  </Router>);
}

export default App;