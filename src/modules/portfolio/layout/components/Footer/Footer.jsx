// Components
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';
import SocialMedia from '../SocialMedia';
import StickyInfo from './components/StickyInfo';

// Scss
import './Footer.scss';

const Footer = () => {
    const isPhone = useIsPhone();

    return (
        <div className="footer__container">
            {isPhone ? <SocialMedia /> : <StickyInfo />}
            <h2>Build by Josep Miquel</h2>
        </div>
    );
};

export default Footer;
