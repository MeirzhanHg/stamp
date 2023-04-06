import { NavLink } from 'react-router-dom'
import beansBlack from '../../resources/img/coffee-beans-black.svg'
import './appHeader.scss'

const AppHeader = (props) => {
    let img = null
    const {color, beansWhite} = props;

    if (beansWhite) {
        img = beansWhite
    } else {
        img = beansBlack
    }

    return (
        <header className="header">
            <div className="menu" style={color}>
                {/* <div className="menu__logo">
                    <img src={img} alt="beans" />
                </div> */}
                <ul className='menu__list'>
                    <li className="menu__item"><NavLink end style={({ isActive }) => ({color: isActive ? '#ebb00f' : 'inherit'})} to='/' className="menu__link">О нас</NavLink></li>
                    <li className="menu__item"><NavLink style={({ isActive }) => ({color: isActive ? '#ebb00f' : 'inherit'})} to='/goods' className="menu__link">Наши продукты</NavLink></li>
                    <li className="menu__item"><NavLink end style={({ isActive }) => ({color: isActive ? '#ebb00f' : 'inherit'})} to='/about' className="menu__link">Что мы производим?</NavLink></li>
                </ul>
            </div>
        </header> 
    )
}

export default AppHeader;