// Scss
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu__items__container">
            <ul>
                <li>
                    <span className="menu__number">00. </span> About
                </li>
                <li>
                    <span className="menu__number">01. </span> Experience
                </li>
                <li>
                    <span className="menu__number">02. </span> Work
                </li>
                <li>
                    <span className="menu__number">03. </span> Contact
                </li>
            </ul>
        </div>
    );
};

export default Menu;
