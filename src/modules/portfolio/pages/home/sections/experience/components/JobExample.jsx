// Scss
import './JobExample.scss';

const JobExample = ({ job }) => {
    return (
        <div className="jobexample__container">
            <h2>{job.position}</h2>
            <h3>{job.time}</h3>
            <ul>
                {job.tasks.map((e, key) => (
                    <li className="custom__list" key={key}>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobExample;
