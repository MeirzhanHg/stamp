import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoodsItem } from './GoodsItem/GoodsItem';
import { fetchGoods, filteredGoodsSelector } from "./goods.slice";

import './goods.scss';

const Goods = ({ getCoffeeId }) => {

    useEffect(() => {
        dispatch(fetchGoods())
    }, [])

    const dispatch = useDispatch();
    const goods = useSelector(filteredGoodsSelector);

    const {term} = useSelector(state => state.filters)

    const searchEmp = (items, term) => {
        if (!term.length) {
            return items
        }

        return items.filter(item => item.title.toLowerCase() >= item.title.toLowerCase().match(term.toLowerCase()))
    }

    const resData = searchEmp(goods, term)

    const items = resData.map(item => {

        const { id } = item
        return (
            <CSSTransition
                timeout={500}
                key={id}
                classNames="goods">
                <Link
                    onClick={() => getCoffeeId(id)}
                    to={`/goods/${id}`}
                    className="list_column">
                        <div className="goods-list__item item">
                            <GoodsItem {...item} />
                        </div>
                </Link>
            </CSSTransition>
        )
    })

    return (
        <div className="goods_wrapper">
            <div className="goods">
                <TransitionGroup component="div" className="goods-list">
                    {items}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default Goods;