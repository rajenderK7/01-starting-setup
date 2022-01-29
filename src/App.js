import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
};

export default App;
