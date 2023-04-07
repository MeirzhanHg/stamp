import Goods from "../goods/goods";
import AboutPrinting from "../aboutPrinting/AboutPrinting";
import FiltersGoods from '../filtersGoods/FiltersGoods';

const OurProducts = () => {
    
    return (
        <section className="ourcoffe">

            <div className="container">
                <AboutPrinting />

                <FiltersGoods />

                <Goods />

            </div>
            
        </section>
    )
}

export default OurProducts;