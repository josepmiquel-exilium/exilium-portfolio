// Components
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';
import StickyInfo from './components/StickyInfo';

// Scss
import './Footer.scss';

const Footer = () => {
    const isPhone = useIsPhone();

    return (
        <div className="footer__container">
            {!isPhone && <StickyInfo />}
            <h2>Build by Josep Miquel</h2>
        </div>
    );
};

export default Footer;
