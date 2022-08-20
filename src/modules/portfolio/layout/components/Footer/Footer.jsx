// Components
import StickyInfo from './components/StickyInfo';

// Scss
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer__container">
            <StickyInfo />
            <h2>Build by Josep Miquel</h2>
        </div>
    );
};

export default Footer;
