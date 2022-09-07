import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Router, Routes } from "react-router-dom";
import Reservation from './components/RESERVATIONS/Reservation';
import Menu from './components/MENU/Menu';
import Form from './components/Credentials/Form';
import BreakFast from './components/MENU/Breakfast/BreakFast';
import Dessert from './components/MENU/Desserts/Dessert';
import Lunch from './components/MENU/Lunch/Lunch';
import QuickDrinks from './components/MENU/cocktails/QuickDrinks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/reservations" element={<Reservation/>}/>
    <Route path="/menu" element={<Menu/>}>
          <Route path="desserts" element={<Dessert/>}/>
          <Route path="breakfast" element={<BreakFast/>}/>
          <Route path="lunchDinner" element={<Lunch/>}/>
          <Route path="quickDrinks" element={<QuickDrinks/>}/>
    </Route>
    <Route path='/login' element={<Form/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
