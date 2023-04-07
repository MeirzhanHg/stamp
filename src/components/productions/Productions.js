import AboutPrinting from "../aboutPrinting/AboutPrinting";
import Header from "../header/Header";

import pleasureImg from '../../resources/img/studio-poligraf.jpg';
import coffeePleasure from '../../resources/img/2.jpg'
import OurService from "../ourService/OurService";

const Productions = () => {
    const descr ='Мы производим продукты, такие как визитки, листовки, этикетки, брошюры, буклеты, папки бумажные, пакеты бумажные, шелкографическая печать, блокноты, календари, крафтовый конверты, печать и штапмпы, архивные коробки, стенды, журналы, удостоверение';
    const title = 'Какие продукты мы производим?';

    return (
        <div className="pleasure">
            <Header pleasureImg={pleasureImg} title/>        
            <div className="pleasure__body container">
                <AboutPrinting descr={descr} title={title} coffeePleasure={coffeePleasure}/>
            </div>
            <OurService/>
        </div>
    )
}

export default Productions;