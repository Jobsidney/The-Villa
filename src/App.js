
import './App.css';
import Abouts from './components/aboutsSection/Abouts';
import BackInfoCards from './components/backInfoCards/BackInfoCards';
import BackInfo from './components/breakFast/BackInfo';
import SampleMenu from './components/menu/SampleMenu';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BackInfo/>
      <BackInfoCards/>
      <Abouts/>
      <SampleMenu/>
    </div>
  );
}

export default App;
