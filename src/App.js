
import './App.css';
import BackInfoCards from './components/backInfoCards/BackInfoCards';
import BackInfo from './components/breakFast/BackInfo';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BackInfo/>
      <BackInfoCards/>
    </div>
  );
}

export default App;
