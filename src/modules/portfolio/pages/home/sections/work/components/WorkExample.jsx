// React utils
import { useEffect, useState } from 'react';

// Services
import { fetchImage } from 'api/sanitycms/services/fetchs';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Scss
import './WorkExample.scss';

const WorkExample = ({ work }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        setImage(fetchImage(work.image));
    }, []);

    return (
        <div className="workexample__container">
            <div className="workexample__col__left">
                <div className="image">
                    <a href={work.url} target="_blank">
                        <div className="overlay">
                            <img className="workexample__image" src={image} />
                        </div>
                    </a>
                </div>
            </div>

            <div className="workexample__col__right">
                <div className="workexample__header">
                    <h2>{work.type}</h2>
                    <h3>{work.name}</h3>
                </div>

                <div className="workexample__description">
                    <p>{work.description}</p>
                </div>

                <div className="workexample__footer">
                    <div className="workexample__techs">
                        {work.techs.map((e, key) => (
                            <h2 key={key}>{e}</h2>
                        ))}
                    </div>
                    <div className="workexample__links">
                        {work.github && (
                            <a href={work.github}>
                                <GitHubIcon className="custom__icon" />
                            </a>
                        )}

                        {work.url && (
                            <a href={work.url}>
                                <OpenInNewIcon className="custom__icon" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExample;
