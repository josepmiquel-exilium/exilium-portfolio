// React utils
import { useEffect, useState } from 'react';

// Components
import TitleLine from 'shared/components/TitleLine';
import WorkExample from './components/WorkExample';

// Services
import { fetchWork } from 'api/sanitycms/services/fetchs';

// Utils
import { orderArrByNum } from 'utils/array';

// Scss
import './Work.scss';

const Work = () => {
    const [works, setWorks] = useState(null);
    useEffect(() => {
        const getWorks = () => {
            fetchWork().then((response) => {
                setWorks(orderArrByNum(response));
            });
        };

        getWorks();
    }, []);

    return (
        <div className="work__container">
            <TitleLine number="02" title="Some Things I’ve Built" />

            <div className="work__examples">
                {works && works.map((e, key) => <WorkExample work={e} key={key} />)}
            </div>
        </div>
    );
};

export default Work;
