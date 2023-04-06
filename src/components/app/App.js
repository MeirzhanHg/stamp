import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, OurCoffeePage, CoffeePleasurePage } from '../pages'

import AppFooter from "../appFooter/AppFooter";

import './app.scss'

const App = () => {
    return (
        <Router>
            <div className="app">

                <Routes>
                    <Route path='/' element={<MainPage />} />

                    <Route path='/goods/*' element={<OurCoffeePage />} />

                    <Route path='/about' element={<CoffeePleasurePage />} />
                </Routes>

            </div>

            <AppFooter />

        </Router>
    )
}

export default App;