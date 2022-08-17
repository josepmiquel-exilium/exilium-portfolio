// Components
import Tooltip from 'shared/components/Tooltip';

// Icons
import {
    FaLinux,
    FaAws,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3,
    FaSass,
    FaVuejs,
    FaWordpress,
} from 'react-icons/fa';
import {
    SiExpress,
    SiRedux,
    SiNginx,
    SiJavascript,
    SiMongodb,
    SiServerless,
    SiCloudflare,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';

// Scss
import './Technologies.scss';

const stack = [
    { icon: FaHtml5, title: 'Html5' },
    { icon: FaCss3, title: 'Css3' },
    { icon: FaSass, title: 'Sass' },
    { icon: SiJavascript, title: 'Javascript' },
    { icon: FaReact, title: 'React' },
    { icon: SiRedux, title: 'Redux' },
    { icon: FaVuejs, title: 'VueJS' },
    { icon: FaNodeJs, title: 'NodeJS' },
    { icon: SiExpress, title: 'Express' },
    { icon: SiMongodb, title: 'MongoDB' },
    { icon: SiServerless, title: 'Serverless' },
    { icon: FaAws, title: 'AWS' },
    { icon: FaWordpress, title: 'Wordpress' },
    { icon: SiNginx, title: 'Nginx' },
    { icon: SiCloudflare, title: 'Cloudfare' },
    { icon: DiGit, title: 'Git' },

    { icon: FaLinux, title: 'Linux' },
];

const Technologies = () => {
    return (
        <div className="techonologies__container">
            {stack && stack.map((e, key) => <Tooltip icon={e.icon} title={e.title} key={key} />)}
        </div>
    );
};

export default Technologies;
