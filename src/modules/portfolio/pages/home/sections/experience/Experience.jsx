// Components
import VerticalTabs from './components/VerticalTab';

// Data
import jobs from './data/jobs.json';

// Scss
import './Experience.scss';

const Experience = () => {
    return (
        <div className="experience__container">
            <h2 className="title__section title__line">
                <span className="menu__number">01.</span> Where I've worked
            </h2>

            <div className="experience__tabs">
                <VerticalTabs jobs={jobs.data} />
            </div>
        </div>
    );
};

export default Experience;
