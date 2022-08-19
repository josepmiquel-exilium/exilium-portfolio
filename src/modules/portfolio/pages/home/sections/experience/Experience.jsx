// React utils
import { useEffect, useState } from 'react';

// Components
import VerticalTabs from './components/VerticalTab';
import TitleLine from 'shared/components/TitleLine';

// Services
import { fetchExperience } from 'api/sanitycms/services/fetchs';

// Utils
import { orderArrByNum } from 'utils/array';

// Scss
import './Experience.scss';

const Experience = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        const loadJobs = () => {
            fetchExperience().then((response) => {
                setJobs(orderArrByNum(response));
            });
        };

        loadJobs();
    }, []);

    return (
        <div className="experience__container">
            <TitleLine number="01" title="Where I've worked" />

            <div className="experience__tabs">{jobs && <VerticalTabs jobs={jobs} />}</div>
        </div>
    );
};

export default Experience;
