// React utils
import { createElement } from 'react';

// Scss
import './Tooltip.scss';

const Tooltip = ({ icon, title }) => {
    return (
        <div className="tooltip">
            {createElement(icon, {
                className: 'tooltip__icon',
            })}
            <h2>{title}</h2>
        </div>
    );
};

export default Tooltip;
