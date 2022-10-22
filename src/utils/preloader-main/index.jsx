import React from 'react';
import {PacmanLoader} from "react-spinners";
import '../preloader/style.scss'
import usePreloader from "../../hook/preloader-hook";

const PreloaderMain = () => {
    const {isLoading} = usePreloader()
    return (
        <div className='P-isLoading G-flex G-flex-column G-justify-center G-align-center'>
            <PacmanLoader size={30} color={'#3164d3'} loading={isLoading}/>
        </div>
    );
};

export default PreloaderMain;
