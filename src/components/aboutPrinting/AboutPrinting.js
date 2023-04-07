import aboutImg from "../../resources/img/1.jpeg";
import PrintLogo from "../PrintLogo/PrintLogo";

import "./AboutPrinting.scss";

const AboutPrinting = ({ coffeePleasure, descr, title }) => {
    let img = null

    if (coffeePleasure) {
        img = coffeePleasure
    } else {
        img = aboutImg
    }

    return (
        <div className="ourCoffee__about">
            <div className="ourCoffee__about__wrapper">
                <div className="ourCoffee__about__img">
                    <img src={img} alt="" />
                </div>
                <div className="ourCoffee__about__text">


                    <h2 className="about__title">
                        {title ? title : 'О Типографии'}
                    </h2>

                    <PrintLogo />
                    <div className="ourCoffee__about__desc">
                        <p>
                            {
                                descr ? descr
                                    : 'Типографии бывают двух видов: универсальные и офсетные. Универсальные типографии способны предложить своей клиентуре самый широкий спектр полиграфических услуг, в силу чего занимают лидирующее положение на рынке. Офсетные типографии - типографии, в которых применяется офсетная печать, то есть такой способ печати, когда краска под давлением с печатной формы передается на эластичную резиновую промежуточную поверхность полотна, а затем уже на бумагу или иной печатный материал. Последовательность полиграфических работ следующая: препресс (подготовка макета к печати), непосредственно печать и послепечатная обработка (ламинирование, биговка, затем конгрев, после брошюровка, переплет, тиснение, склейка высечка и т.д.).'
                            }
                        </p>

                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div >
    );
};

export default AboutPrinting;