import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Events from './Pages/Events';
import Account from './Pages/Account';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/account" element={<Account />} />
      {/* <Route path="/events/:slug" element={<EventDetails />} /> */}
    </Routes>
  );
}

export default App;
