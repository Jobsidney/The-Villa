
import './App.css';
import Abouts from './components/aboutsSection/Abouts';
import BackInfoCards from './components/backInfoCards/BackInfoCards';
import BackInfo from './components/breakFast/BackInfo';
import Footer from './components/footer/Footer';
import Menu from './components/MENU/Menu';
import SampleMenu from './components/menu/SampleMenu';
import NavBar from './components/navBar/navBar';
import Reservation from './components/RESERVATIONS/Reservation';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <BackInfo/>
      <BackInfoCards/>
      <Abouts/>
      <SampleMenu/>
      <Reviews/>
      <Footer/> */}
      {/* <Reservation/> */}
      <Menu/>
    </div>
  );
}

export default App;
