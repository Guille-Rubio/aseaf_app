import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import Forum from './Forum';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Forum />} path='/forum' />
      </Routes>
    </main>
  );
};

export default Main;
