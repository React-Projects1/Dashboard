import React from 'react';
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import SimpleTable from '../../components/table/SimpleTable';


const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />

                <div className='widgets'>
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='erarning' />
                    <Widget type='balance' />
                </div>

                <div className='charts'>
                    <Featured />
                    <Chart aspect={2.2 / 1} title={'Last 6 Months (Revenue)'} />
                </div>

                <div className='table'>
                    <SimpleTable/>
                </div>
            </div>
        </div>
    );
}

export default Home;
