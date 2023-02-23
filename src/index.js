import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import Signup from './components/Signup';
import Signin from './components/Signin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // all routing is done in index.js file
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< App />}></Route>  
    <Route exact path='/signin' element={< Signin />}></Route>  
    <Route exact path='/signup' element={< Signup/>}></Route>  
    </Routes>
    
    
</BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
