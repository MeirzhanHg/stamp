import whyUs1 from "../../resources/img/why-us-1.png"
import whyUs2 from "../../resources/img/why-us-2.png"
import whyUs3 from "../../resources/img/why-us-3.png"
import whyUs4 from "../../resources/img/why-us-4.png"
import whyUs5 from "../../resources/img/why-us-5.png"
import whyUs6 from "../../resources/img/why-us-6.png"

import './whyWe.scss';

const WhyWe = () => {
    return (
        <section className="why-us">
            <div className="container">
                <div className="section-title">
                    <h2>Почему мы</h2>
                    <p>Надежная полиграфическая продукция</p>
                </div>
                <div className="why-us-wrapper">
                    <div className="row">
                        <div className="item-elem">
                            <img src={whyUs1} />
                            <p> Собственное оборудование для офсетной и цифровой печати </p>
                        </div>
                        <div className="item-elem">
                            <img src={whyUs2} />
                            <p> Полиграфические услуги для выставок под ключ любого объема </p>
                        </div>
                        <div className="item-elem">
                            <img src={whyUs3} />
                            <p> Высокое качество работ, оперативное решение рекламаций </p>
                        </div>
                        <div className="item-elem">
                            <img src={whyUs4}/>
                            <p> Налаженная служба доставки по Шымкенту и в регионы Казахстана </p>
                        </div>
                        <div className="item-elem">
                            <img src={whyUs5} />
                            <p> Пакет документов для юридических лиц, безналичный расчет</p>
                        </div>
                        <div className="item-elem">
                            <img src={whyUs6}/>
                            <p> Подарки и индивидуальные условия для постоянных клиентов </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyWe;