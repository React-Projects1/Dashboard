import React from 'react';
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className='wrapper'>

                <div className='search'>
                    <input type='text' id='text' placeholder='Search....' />
                    <SearchIcon className='icon' />
                </div>

                <div className='items'>
                    <ul>
                        <li className='item'>
                            <LanguageOutlinedIcon className='icon' />
                            <p>English</p>
                        </li>

                        <li className='item' onClick={()=> dispatch({type:'TOGGLE'})}>
                            <DarkModeOutlinedIcon className='icon' />
                        </li>

                        <li className='item'>
                            <FullscreenExitOutlinedIcon className='icon' />
                        </li>

                        <li className='item'>
                            <NotificationsNoneOutlinedIcon className='icon' />
                            <div className='counter'>1</div>
                        </li>

                        <li className='item'>
                            <ChatBubbleOutlineOutlinedIcon className='icon' />
                            <div className='counter'>1</div>
                        </li>

                        <li className='item'>
                            <FormatListBulletedOutlinedIcon className='icon' />
                        </li>

                        <li className='item'>
                            <img src='https://www.w3schools.com/howto/img_avatar.png' className='avater' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
