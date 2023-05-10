import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import StateDemo from './components/StateDemo';
import Hooks from './components/Hooks';
import Expense from './components/Expense';
import Component1 from './components/Component1';
import Ref from './components/Ref';
import Hobbies from './components/Hobbies';
import DynamicComponent from './components/DynamicComponent';
import Parent from './components/Parent';
import RouteDemo from './components/RouteDemo';
import FirstComponent from './components/FirstComponent';
import MainComp from './components/MainComp';
import Master from './components/Master';
import Reducer from './components/Reducer';
import Home from './components/crud/Home';
import counterReducer from './redux/counterReducer';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import myLogger from './redux/myLogger';
import capAtTen from './redux/capAtTen';
import colorReducer from './redux/colorReducer';
import { rootReducer } from './redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Counter from './components/Counter';
import thunk from 'redux-thunk';

const reduxDevTools = composeWithDevTools();

function App() {
  console.log('CREATING STORE....')
  const store = configureStore({reducer:rootReducer, 
                                middleware:[myLogger, capAtTen, thunk], 
                                devTools:reduxDevTools})
  return (
    <Provider store={store}>
         <Home />
    </Provider>
    
    
  );
}

export default App;
