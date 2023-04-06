import OurCoffeeGoods from "../ourCoffeeGoods/OurCoffeeGoods";
import OurCoffeeAbout from "../ourCoffeeAbout/ourCoffeeAbout";
import OurCoffeeFilter from "../ourCoffeeFilter/OurCoffeeFilter";

const OurCoffee = () => {
    
    return (
        <section className="ourcoffe">

            <div className="container">
                <OurCoffeeAbout />

                <OurCoffeeFilter />

                <OurCoffeeGoods />

            </div>
            
        </section>
    )
}

export default OurCoffee;