import React from 'react';
import '../preloader/style.scss'
import usePreloader from "../../hook/preloader-hook";

const PreloaderMain = () => {
    const {isLoading} = usePreloader()

    return isLoading && (
        <div className='P-isLoading P-animation-content G-flex G-flex-column G-justify-center G-align-center'>
            <h1 className='P-isLoading-text'>Frontend Developer</h1>
        </div>
    );
};

export default PreloaderMain;
