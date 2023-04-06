const BestItem = (props) => {
    const { img, title, price } = props
    return (
        <div className="ourbest__item">
            <div className="ourbest__item-img"><img src={img} alt={title} /></div>
            <div className="ourbest__item-title">{title}</div>
            <div className="ourbest__item-price">{price}</div>
        </div>
    )
}

export default BestItem;