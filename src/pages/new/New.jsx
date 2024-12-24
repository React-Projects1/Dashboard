import React, { useState } from 'react';
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")
    
    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h2>{title}</h2>
                </div>

                <div className='bottom'>
                    <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt='' />
                    </div>

                    <div className='right'>
                        <form>
                            <div className='formFile'>
                                <span>Image: </span>
                                <label htmlFor="file"> <DriveFolderUploadOutlinedIcon /></label>
                                <input type='file' placeholder='file' style={{ display: 'none' }} id='file' onChange={(e) => { setFile(e.target.files[0]) }} />
                            </div>

                            {/* {inputs.map((input) => {
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            })} */}

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <div className='formSubmit'>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default New;