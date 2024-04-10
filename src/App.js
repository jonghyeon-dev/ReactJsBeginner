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
  Link
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
    <Routes>
      <Route path="/hello" element={<h1>Hello</h1>}/>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>);
}

export default App;