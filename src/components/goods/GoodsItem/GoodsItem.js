export const GoodsItem = ({ img_1, title, price}) => {
    return (
        <>
            <div className="item-top__wrapper">
                <div className="item__img"><img src={img_1} alt='image' /></div>
                <div className="item__title">{title}</div>
            </div>
            <div className="item__footer">
                <div className="item__price">{price}</div>
            </div>
        </>
    )
}