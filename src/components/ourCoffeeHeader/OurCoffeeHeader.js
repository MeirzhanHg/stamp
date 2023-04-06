import AppHeader from '../appHeader/AppHeader';

import beansWhite from '../../resources/img/coffee-beans-white.svg';
import ourCoffeImg from '../../resources/img/offset-printing.jpg';

import './ourCoffeeHeader.scss'

const OurCoffeeHeader = ({pleasureImg, title}) => {
    let img = null
    if(pleasureImg) {
        img = pleasureImg
    } else {
        img = ourCoffeImg
    }
    return (
        <div className="ourcoffee">
            <div className='ourcoffee__img'><img src={img} alt="coffeeBg" /></div>
            <div className="ourcoffee__body">
                <div className="indent">
                    <AppHeader beansWhite={beansWhite}/>
                </div> 
                <h2 className="ourcoffee__title title_40">{title ? 'Что мы производим?': 'Наши продукты'}</h2>
            </div>
        </div>
    )
}

export default OurCoffeeHeader;     