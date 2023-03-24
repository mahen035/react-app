import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import StateDemo from './components/StateDemo';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className='App'>
      <h1>React Demo</h1>
      <div>
          <StateDemo favColor='Orange' />
      </div>
      <div>
        <Hooks />
      </div>
      
    </div>
  );
}

export default App;
