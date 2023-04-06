import { useEffect, useState } from 'react';
import {useHttp} from '../../hooks/http.hook';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BeansLogo from '../beansLogo/BeansLogo';
import GoodsItemImg from '../../resources/img/goods-info.jpg'

import './singleCoffeePage.scss';

const SingleCoffeePage = () => {
    const { coffeeId } = useParams()
    const [data, setData] = useState([])

    const {getElemById} = useHttp()

    useEffect(() => {
        getElemById(coffeeId)
            .then(data => setNewData(data))
            .catch(e => console.log('Error!!!'));
    }, [])

    const setNewData = (data) => {
        setData(data)
    }

    const { title, price, img_1, too, ip, gu, document, references, diameter, pocket, paid, received, released,checked } = data;

    const clazz = (too && ip && gu) ? 'block' : 'none';

    return (
        <div className='goodsInfo'>
            <div className="goodsInfo__about container">
                <div className="goodsInfo__wrapper">
                    <div className="goodsInfo__img">
                        <img src={img_1} alt="info" />
                    </div>
                    <div className="goodsInfo__text">
                        <div className="goodsInfo__title">
                            <h2>О товаре</h2>
                            <BeansLogo />
                        </div>
                        <div className="goodsInfo__desc">
                            <p>
                                <span className='fw'>Описание: </span>
                                {title}
                            </p>
                        </div>
                        <div className="diameter">
                            <span className='fw'>Диаметр:</span> {diameter}
                        </div>
                        <ul className="info__list">
                            <li className={`info__item ${pocket ? 'pocket' : 'none'}`}>{pocket}</li>
                            <li className={`info__item ${clazz}`}>{too}</li>
                            <li className={`info__item ${clazz}`}>{ip}</li>
                            <li className={`info__item ${clazz}`}>{gu}</li>
                            <li className={`info__item ${clazz}`}>{document}</li>
                            <li className={`info__item ${references ? 'references' : 'none'}`}>{references}</li>


                            <li className={`info__item ${paid ? 'paid' : 'none'}`}>{paid}</li>
                            <li className={`info__item ${received ? 'received' : 'none'}`}>{received}</li>
                            <li className={`info__item ${released ? 'released' : 'none'}`}>{released}</li>
                            <li className={`info__item ${checked ? 'checked' : 'none'}`}>{checked}</li>

                        </ul>
                        <div className="goodsInfo__price fw">Цена: <span className='fw'>{price}</span></div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default SingleCoffeePage;