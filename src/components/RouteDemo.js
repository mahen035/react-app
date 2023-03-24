import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Error from './Error';
import Expense from './Expense';
import Header from './Header';
import Hobbies from './Hobbies';
import Parent from './Parent';


function RouteDemo(props) {
    return (
        <div>
            <h1>Route Demo</h1>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/expense">Expense</Link></li>
                        <li><Link to="/hobbies">Hobbies</Link></li>
                        <li><Link to="/dynamic">Dynamic</Link></li>
                        <li><Link to="/footer">Footer</Link></li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element = {<Header />} />
                    <Route path='/expense' element={<Expense />} />
                    <Route path='/hobbies' element={<Hobbies />} />
                    <Route path='/dynamic' element={<Parent />} />
                    <Route path='*' element = {<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default RouteDemo;