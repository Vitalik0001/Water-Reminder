import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Start from "./components/Start/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Main from "./components/Main/index.jsx";
import Dashboard from "./components/Main/Dashboard/index.jsx";
import Food from "./components/Main/Food/index.jsx";
import Water from "./components/Main/Water/index.jsx";
import {AnimatePresence} from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Start/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="main" element={<Main/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="food" element={<Food/>}/>
          <Route path="water" element={<Water/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  )
};