/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import SimpleTable from '../../components/table/SimpleTable';


const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />

                <div className='top'>
                    <div className='left'>
                        <small>Edit</small>
                        <h3 className='title'>Information</h3>
                        <div className='item'>
                            <div className='itemImg'>
                                <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='photo' />
                            </div>
                            <div className='itemData'>
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <Chart className=' chartSingle' aspect={3 / 1} title={'Last 6 Months (Revenue)'} />
                    </div>
                </div>

                <div className='bottom'>
                    <SimpleTable />

                </div>
            </div>
        </div>
    );
}

export default Single;
