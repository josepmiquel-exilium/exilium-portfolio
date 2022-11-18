// React utils
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Components
import JobExample from './JobExample';

// Hooks
import useIsPhone from 'modules/portfolio/hooks/useIsPhone';

// Scss
import './VerticalTab.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const VerticalTabs = ({ jobs }) => {
    const [value, setValue] = React.useState(0);
    const isPhone = useIsPhone();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="verticaltab__container">
            <Box sx={{ flexGrow: 1, bgcolor: '#191919', display: 'flex' }}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="verticaltabs"
                    centered={false}
                    // indicatorColor="#fa1e1e"
                    sx={{ minWidth: isPhone ? '125px' : '150px', position: 'sticky', top: '0px' }}
                >
                    {jobs.map((e, index) => (
                        <Tab label={e.company} {...a11yProps(index)} key={index} />
                    ))}
                </Tabs>

                {jobs.map((e, index) => (
                    <TabPanel value={value} index={index} key={index}>
                        <JobExample job={e} />
                    </TabPanel>
                ))}
            </Box>
        </div>
    );
};

export default VerticalTabs;
