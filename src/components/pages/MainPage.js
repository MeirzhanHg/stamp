import BeansCoffee from "../beansCoffee/BeansCoffee";
import AboutUs from "../aboutUs/AboutUs";
import OurBest from "../ourBest/OurBest";
import WhyWe from "../whyWe/WhyWe";

const MainPage = () => {
    return (
        <>
            <main className="main">
                <BeansCoffee />
            </main>
            <AboutUs />
            <WhyWe/>
            {/* <OurBest /> */}
        </>
    )
}

export default MainPage;