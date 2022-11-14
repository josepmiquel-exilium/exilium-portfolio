// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// Scss
import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <div className="socialmedia__container">
            <a href="https://github.com/josepmiquel-exilium" target={'_blank'}>
                <GitHubIcon className="socialmedia__icon custom__icon" />
            </a>

            <a href="https://www.linkedin.com/in/josepmiquel-exilium/" target={'_blank'}>
                <LinkedInIcon className="socialmedia__icon custom__icon" />
            </a>

            <a href="mailto:josepmiquel@exilium.cat" target={'_blank'}>
                <MailOutlineIcon className="socialmedia__icon custom__icon" />
            </a>
        </div>
    );
};

export default SocialMedia;
