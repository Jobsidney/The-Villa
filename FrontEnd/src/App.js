
import './App.css';
import NavBar from './components/navBar/navBar';
import WholeFirstPage from './components/WholeFirstPage';
import Reservation from './components/RESERVATIONS/Reservation'
import Menu from './components/MENU/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Abouts from './components/aboutsSection/Abouts'
import SmallNavBar from './components/navBar/SmallNavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <SmallNavBar/>
        {/* <Routes>
          <Route path="/" element={<WholeFirstPage/>}/>
          <Route path="#about" element={<Abouts/>}/>
        </Routes> */}


        {/* <Reservation/> */}
        {/* <Menu/> */}
      
      </div>

  );
}

export default App;
