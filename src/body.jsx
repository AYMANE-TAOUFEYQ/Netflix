//assets
import Logo from './assets/logo.jpg';

//react
import { Fragment } from 'react';

//routing
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from "react-router";

//components
import Home from './components/home/home.component';
import Terms from './components/terms/terms.component';
import Navigation from './components/navigation/navigation.component';
import Account from './components/accounts/accounts.component';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index  element={<Home />} />
                    <Route path='/terms-and-condition'  element={<Terms />} />
                    <Route path='/daily-free-netflix-account'  element={<Account />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;