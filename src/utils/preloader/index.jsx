import React from 'react';
import {ClimbingBoxLoader} from "react-spinners";
import './style.scss'
import usePreloaderPath from "../../hook/preloader-path";

const Preloader = () => {
    const {loading} = usePreloaderPath()
    return loading && (
        <div className='P-isLoading G-flex G-flex-column G-justify-center G-align-center'>
            <div className='P-isLoading-title'><p>Please wait Arman is thinking...</p></div>
            <ClimbingBoxLoader size={15} color={'#3164d3'} loading={loading}/>
        </div>
    );
};

export default Preloader;
