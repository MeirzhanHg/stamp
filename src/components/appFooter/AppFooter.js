import AppHeader from '../appHeader/AppHeader';
import PrintLogo from '../PrintLogo/PrintLogo';
import './appFooter.scss'

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="container">
                    <AppHeader color={{color: 'black', justifyContent: 'center'}}/>
                    <PrintLogo/>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;