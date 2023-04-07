import AboutCompany from "../company/AboutCompany";
import AboutUs from "../aboutUs/AboutUs";
import WhyWe from "../whyWe/WhyWe";

const MainPage = () => {
    return (
        <>
            <main className="main">
                <AboutCompany />
            </main>
            <AboutUs />
            <WhyWe/>
        </>
    )
}

export default MainPage;