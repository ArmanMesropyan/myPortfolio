import React from 'react';
import '../src/assets/style/index.scss';
import Cursor from "./utils/cursor";
import PreloaderMain from "./utils/preloader-main";
import usePreloader from "./hook/preloader-hook";
const App = () => {
    const {isLoading} = usePreloader()
    if (isLoading) {
        return <PreloaderMain/>
    }
    return (
        <div className='P-App'>
            <Cursor/>
        </div>
    )
}
export default App;
