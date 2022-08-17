import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './VerticalTab.scss';
import JobExample from './JobExample';

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
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#191919', display: 'flex' }}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="verticaltabs"
                textColor="yellow"
                centered="false"
                // indicatorColor="#fa1e1e"
            >
                {jobs.map((e, index) => (
                    <Tab label={e.title} {...a11yProps(index)} />
                ))}
            </Tabs>

            {jobs.map((e, index) => (
                <TabPanel value={value} index={index} key={index}>
                    <JobExample job={e} />
                </TabPanel>
            ))}
        </Box>
    );
};

export default VerticalTabs;
