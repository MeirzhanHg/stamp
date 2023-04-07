import { Routes, Route } from "react-router-dom";
import OurProducts from "../ourProducts/OurProducts";
import OurCoffeeHeader from "../header/Header";
import SinglePrintPage from "./SinglePrintPage";

const OurCoffeePage = () => {
    return (
        <>
            <OurCoffeeHeader />

            <Routes>

                <Route
                    path={':coffeeId'}
                    element={<SinglePrintPage />}
                />

                <Route
                    path="/"
                    element={<OurProducts />}
                />

            </Routes>
        </>
    )
}


export default OurCoffeePage;