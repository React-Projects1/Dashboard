import React from 'react';
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {

    // temporory
    const amount = 100
    const diff = 20

    let data;
    switch (type) {
        case 'user':
            data = {
                title: "users",
                isMoney: false,
                link:'see all users',
                icon: <PersonOutlineOutlinedIcon className='icon' style={{color:'crimson' , backgroundColor:'#ff000033'}}/>
            }
            break;
    
            case 'order':
            data = {
                title: "orders",
                isMoney: false,
                link:'view all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' style={{color:'goldenrod' , backgroundColor:'#daa52033'}}/>
            }
            break;

            case 'erarning':
            data = {
                title: "erarnings",
                isMoney: true,
                link:'view net erarnings',
                icon: <AttachMoneyOutlinedIcon className='icon' style={{color:'green' , backgroundColor:'#00800033'}}/>
            }
            break;

            case 'balance':
            data = {
                title: "balances",
                isMoney: true,
                link:'see balances',
                icon: <AccountBalanceOutlinedIcon className='icon' style={{color:'purple' , backgroundColor:'#80008033'}}/>
            }
            break;

        default:
            break;
    }

    return (
        <div className='widget'>

            <div className='left'>
                <p className='title'>{data.title}</p>
                <h3 className='counter'>{data.isMoney ? amount+'$' :amount }</h3>
                <span className='link'>{data.link}</span>
            </div>

            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpOutlinedIcon />
                    <span>{diff} %</span>
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
