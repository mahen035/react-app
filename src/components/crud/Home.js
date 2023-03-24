import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EmpDetails from './EmpDetails';
import EditEmployee from './EditEmployee';
function Home(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path = '/' element={<EmpDetails />}/>
                    <Route path = '/edit' element={<EditEmployee />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Home;