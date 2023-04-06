import { Routes, Route } from "react-router-dom";
import OurCoffee from '../ourCoffee/OurCoffee'
import OurCoffeeHeader from "../ourCoffeeHeader/OurCoffeeHeader";
import SingleCoffeePage from "./SingleCoffeePage";

const OurCoffeePage = () => {
    return (
        <>
            <OurCoffeeHeader />

            <Routes>

                <Route
                    path={':coffeeId'}
                    element={<SingleCoffeePage />}
                />

                <Route
                    path="/"
                    element={<OurCoffee />}
                />

            </Routes>
        </>
    )
}


export default OurCoffeePage;