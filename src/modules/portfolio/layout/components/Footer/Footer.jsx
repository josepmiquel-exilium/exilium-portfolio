// Components
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';
import SocialMedia from '../SocialMedia';
import StickyInfo from './components/StickyInfo';

// Scss
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer__container">
            {useIsPhone() ? <SocialMedia /> : <StickyInfo />}
            <h2>Build by Josep Miquel</h2>
        </div>
    );
};

export default Footer;
