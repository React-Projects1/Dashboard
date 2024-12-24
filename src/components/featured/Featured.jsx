import React from 'react';
import './featured.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>

                <div className='title'>
                    <h3>Total Revenue</h3>
                    <MoreVertIcon fontSize='small' />
                </div>

                <div className='circularProgressbar'>
                    <CircularProgressbar strokeWidth={6} className='progressbar'
                        value={20}
                        text={'20%'}
                        styles={buildStyles({
                            textColor: '#6439ff',
                            pathColor: '#6439ff',
                            trailColor: '#d6d6d6',
                        })}
                    />
                    <p className='title'>Total sales made today</p>
                    <p className='amount'>$500</p>
                    <p className='desc'>lorem lorem lorem lorem lorem</p>
                </div>

            </div>

            <div className='bottom'>
                <div className='item'>
                    <p>Target</p>
                    <KeyboardArrowUpOutlinedIcon className='icon positve' />
                    <h4>$200K</h4>
                </div>

                <div className='item'>
                    <p>Target</p>
                    <KeyboardArrowDownIcon className='icon negative' />
                    <h4>$200K</h4>
                </div>

                <div className='item'>
                    <p>Target</p>
                    <KeyboardArrowUpOutlinedIcon className='icon positve' />
                    <h4>$200K</h4>
                </div>
            </div>


        </div>
    );
}

export default Featured;
