import AppHeader from '../appHeader/AppHeader';
import PrintLogo from '../PrintLogo/PrintLogo';

import './aboutCompany.scss'

const AboutCompany = () => {
    return (
        <>
            <div className="indent"><AppHeader /></div>
            <div className="content">
                <div className="container">
                    <h1 className="content__title">Изготовление печатей и штампов за 30 минут</h1>
                    <PrintLogo color='beans__white'/>
                    <div className="content__text">
                        <div className="content__suptitle">Офсетная печать</div>
                        <div className="content__subtitle">Печать любых тиражей высокого качество. Упаковка, книжно-журнальная и различная рекламная продукция.</div>
                    </div>
                    
                    <a href='#' className="content__btn">Заказать</a>
                </div>
            </div>
        </>
    )
}

export default AboutCompany;