// Components
import SocialMedia from '../../SocialMedia';

// Scss
import './StickyInfo.scss';

const StickyInfo = () => {
    return (
        <div className="sticky__info__container">
            <div className="layout__socialmedia">
                <SocialMedia />
                <div className="vertical__line vl__left"></div>
            </div>

            <div className="layout__contact">
                <div className="mail__container">
                    <a href="mailto:josepmiquel@exilium.cat">josepmiquel@exilium.cat</a>
                </div>
                <div className="vertical__line vl__right"></div>
            </div>
        </div>
    );
};

export default StickyInfo;
