import AppHeader from '../appHeader/AppHeader';
import BeansLogo from '../beansLogo/BeansLogo';
import './appFooter.scss'

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="container">
                    <AppHeader color={{color: 'black', justifyContent: 'center'}}/>
                    <BeansLogo/>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;