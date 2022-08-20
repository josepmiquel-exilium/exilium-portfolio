// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// Scss
import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <div className="socialmedia__container">
            <GitHubIcon className="socialmedia__icon custom__icon" />
            <LinkedInIcon className="socialmedia__icon custom__icon" />
            <MailOutlineIcon className="socialmedia__icon custom__icon" />
        </div>
    );
};

export default SocialMedia;
