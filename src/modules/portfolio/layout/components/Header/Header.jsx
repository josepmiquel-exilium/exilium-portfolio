import { Fragment } from 'react';

// Components
import Menu from './components/Menu';

// Data
import resume from 'assets/docs/resume.pdf';

// Hooks
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Utils
import { menuModal } from 'utils/modal';

// Scss
import './Header.scss';

const Header = () => {
    const isPhone = useIsPhone();

    const openMenuMobile = () => {
        menuModal(<Menu />);
    };

    return (
        <div className="header__container">
            <div className="logo__container">
                <h1>Exilium.</h1>
            </div>

            <div className="menu__resume__container">
                <div className="menu__container">
                    {isPhone ? (
                        <div className="menu__mobile__container" onClick={() => openMenuMobile()}>
                            <MenuIcon className="menu__icon" />
                        </div>
                    ) : (
                        <Fragment>
                            <Menu />
                            <div className="resume__container">
                                <a href={resume} target={'_blank'}>
                                    <button className="first__button">Resume</button>
                                </a>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
