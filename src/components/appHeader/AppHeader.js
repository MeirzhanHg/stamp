import { NavLink } from 'react-router-dom'
import './appHeader.scss'

const AppHeader = (props) => {
    const {color} = props;

    return (
        <header className="header">
            <div className="menu" style={color}>
            
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