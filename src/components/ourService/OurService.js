import img_1 from '../../resources/img/img_1.png'
import img_2 from '../../resources/img/img_2.jpg'
import img_3 from '../../resources/img/img_3.jpg'
import img_4 from '../../resources/img/img_4.jpg'
import img_5 from '../../resources/img/img_5.jpg'
import img_6 from '../../resources/img/img_6.jpg'
import img_7 from '../../resources/img/img_7.jpg'
import img_8 from '../../resources/img/img_8.jpg'
import img_9 from '../../resources/img/img_9.png'
import img_10 from '../../resources/img/img_10.jpg'
import img_11 from '../../resources/img/img_11.jpg'
import img_12 from '../../resources/img/img_12.png'
import img_13 from '../../resources/img/img_13.jpg'
import img_14 from '../../resources/img/img_14.png'
import img_15 from '../../resources/img/img_15.jpg'
import img_16 from '../../resources/img/img_16.jpg'


import './ourService.scss'

const OurService = () => {
    return (
        <section className="services">
            <div className="services__container">
                <div className="services__title">
                    <h2>УСЛУГИ</h2>
                    <p>НАШИ УСЛУГИ</p>
                </div>
                <div className="services__wrapper">
                    <div className="services__row">
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_1} alt="" />
                                <p className="services__name">Визитки</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_2} alt="" />
                                <p className="services__name">листовки</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_3} alt="" />
                                <p className="services__name">этикетки</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_4} alt="" />
                                <p className="services__name">брошюры</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_5} alt="" />
                                <p className="services__name">буклеты</p>
                            </div>
                        </div>

                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_6} alt="" />
                                <p className="services__name">папки бумажные</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_7} alt="" />
                                <p className="services__name">пакеты бумажные</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_8} alt="" />
                                <p className="services__name">шелкографическая печать</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_9} alt="" />
                                <p className="services__name">блокноты</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_10} alt="" />
                                <p className="services__name">календари</p>
                            </div>
                        </div>


                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_11} alt="" />
                                <p className="services__name">крафтовый конверты</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_12} alt="" />
                                <p className="services__name">печать и штапмпы</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_13} alt="" />
                                <p className="services__name">архивные коробки</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_14} alt="" />
                                <p className="services__name">стенды</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_15} alt="" />
                                <p className="services__name">журналы</p>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item">
                                <img src={img_16} alt="" />
                                <p className="services__name">удостоверение</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurService;