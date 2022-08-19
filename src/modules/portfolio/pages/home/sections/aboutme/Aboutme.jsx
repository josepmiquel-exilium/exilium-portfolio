// Components
import Technologies from './components/Technologies';
import TitleLine from 'shared/components/TitleLine';

// Images
import JosepPic from 'assets/images/josepmiquel.png';

// Scss
import './Aboutme.scss';

const Aboutme = () => {
    return (
        <div className="aboutme__container">
            <TitleLine number="00" title="About Me" />
            <div className="aboutme__content">
                <div className="aboutme__text">
                    <p>
                        Hello! My name is Josep and since I was very young I have been passionate
                        about computers.
                        <br />
                        <br />
                        I have worked as a system administrator, as a computer technician, as a
                        warehouse worker and now I am in the programming world solving problems as a
                        Full Stack Software Developer with Javascript. I currently live in Brussels
                        and work on projects related to civil rights, culture and social movement
                        for human rights. I am also a provider of communications through secure and
                        encrypted channels, as well as development, maintenance and deployment of
                        cloud applications.
                        <br />
                        <br />
                        Always attentive to cybersecurity, privacy and people's rights on the
                        Internet.
                        <br />
                        <br />
                        Here are a few technologies I’ve been working with recently:
                    </p>

                    <div className="aboutme__technnologies">
                        <Technologies />
                    </div>
                </div>
                <div className="aboutme__photo">
                    <div className="wrapper">
                        <img src={JosepPic} alt="" />
                        <div className="border"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
