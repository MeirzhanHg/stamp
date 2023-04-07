import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, OurProductsPage, ProductionsPage } from '../pages'

import AppFooter from "../appFooter/AppFooter";

import './app.scss'

const App = () => {
    return (
        <Router>
            <div className="app">

                <Routes>
                    <Route path='/' element={<MainPage />} />

                    <Route path='/goods/*' element={<OurProductsPage />} />

                    <Route path='/about' element={<ProductionsPage />} />
                </Routes>

            </div>

            <AppFooter />

        </Router>
    )
}

export default App;