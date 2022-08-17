// Components
import Technologies from './components/Technologies';

// Images
import JosepPic from 'assets/images/josepmiquel.png';

// Scss
import './Aboutme.scss';

const Aboutme = () => {
    return (
        <div className="aboutme__container">
            <div className="aboutme__header">
                <h2 className="title__section title__line">
                    <span className="menu__number">00.</span> About Me
                </h2>
            </div>
            <div className="aboutme__content">
                <div className="aboutme__text">
                    <p>
                        Hello! My name is Josep and since I was very young I have been passionate
                        about computers.
                        <br />
                        <br />
                        I have worked as adminsys, as a computer technician and I am now in the
                        world of programming solving problems as a Full Stack Developer. Currently I
                        live in Brussels and I am working in projects involved in civil rights,
                        culture and social mobilization for human rights. I am also a provider of
                        communications through secure and encrypted channels, as well as the
                        development, mantenaince and implementation of applications in the cloud.
                        <br />
                        <br />
                        Always attentive to cybersecurity, privacy and people’s rights on the
                        internet.
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
