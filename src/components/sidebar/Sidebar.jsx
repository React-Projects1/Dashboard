import React from 'react';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Sidebar = () => {
      const {dispatch} = useContext(DarkModeContext)
    
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className='logo'>Admin</span>
                </Link>
            </div>

            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className='title'>LIST</p>
                    <Link to='/user' style={{ textDecoration: "none" }}>
                        <li>
                            <PeopleAltOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to='/product' style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsOutlinedIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <ListAltOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>

                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>

                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartOutlinedOutlinedIcon className='icon' />
                        <span>State</span>
                    </li>

                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>

                    <p className='title'>SERVICE</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>

                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>

                    <p className='title'>USER</p>
                    <li>
                        <PermContactCalendarOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>

                    <li>
                        <ExitToAppOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>

                </ul>
            </div>

            <div className='bottom'>
                <div className='colorOption' onClick={()=> dispatch({type:'DARK'})}></div>
                <div className='colorOption' onClick={()=> dispatch({type:'LIGHT'})}></div>
            </div>
        </div>
    );
}

export default Sidebar;
