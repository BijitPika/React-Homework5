import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MidDiv from './Components/MidDiv';
import FooterDiv from './Components/FooterDiv';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MidDiv/>
      <FooterDiv/>
    </div>
  );
}

export default App;
