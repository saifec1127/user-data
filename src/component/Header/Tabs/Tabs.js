import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../UserInfo/User';
import Platter from '../../PlatterInfo/Platter';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  useEffect(() => {
    if (value === 2) {
      const loadMicroFrontend = async () => {
        const { renderMicroFrontend, DailyUpdateForm } = await import('micro-frontend-app/dist/bundle.js');
        renderMicroFrontend('micro-frontend-form-container', DailyUpdateForm);
      };
      loadMicroFrontend();
    }

    if (value === 3) {
      const loadMicroFrontend = async () => {
        const { renderMicroFrontend, DailyUpdateTable } = await import('micro-frontend-app/dist/bundle.js');
        renderMicroFrontend('micro-frontend-table-container', DailyUpdateTable);
      };
      loadMicroFrontend();
    }
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Detail" {...a11yProps(0)} />
          <Tab label="Platter Detail" {...a11yProps(1)} />
          <Tab label="Daily Update Form" {...a11yProps(2)} />
          <Tab label="Daily Update Info" {...a11yProps(3)} />
          <Tab label={<span onClick={handleLogout}>Logout</span>} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <User />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Platter />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div id="micro-frontend-form-container"></div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div id="micro-frontend-table-container"></div>
      </CustomTabPanel>
    </Box>
  );
}
