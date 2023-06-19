// Hooks
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';
import { Link } from 'react-router-dom';

// Data
import resume from 'assets/docs/resume.pdf';

// Scss
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu__items__container">
            <ul>
                <Link to={'/about'}>
                    <li>
                        <span className="menu__number">00. </span> About
                    </li>
                </Link>
                <Link to={'/experience'}>
                    <li>
                        <span className="menu__number">01. </span> Experience
                    </li>
                </Link>
                <Link to={'/work'}>
                    <li>
                        <span className="menu__number">02. </span> Work
                    </li>
                </Link>
                <Link to={'/contact'}>
                    <li>
                        <span className="menu__number">03. </span> Contact
                    </li>
                </Link>
            </ul>

            {useIsPhone() && (
                <div className="resume__container">
                    <a href={resume}>
                        <button className="first__button">Resume</button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Menu;
