import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from "./components/Detail";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

        <Router>
            <Header />
            <Routes>
                <Route path="/detail" element={<Detail/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
