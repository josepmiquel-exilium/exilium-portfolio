// Components
import Menu from './components/Menu';

// Scss
import './Header.scss';

const Header = () => {
    return (
        <div className="header__container">
            <div className="logo__container">
                <h1>Exilium.</h1>
            </div>

            <div className="menu__resume__container">
                <div className="menu__container">
                    <Menu />
                </div>
                <div className="resume__container">
                    <button className="first__button">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
