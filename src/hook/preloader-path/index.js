import { useLayoutEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const usePreloaderPath = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    useLayoutEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1800)
    }, [location.pathname])


    return {loading}
}
export default usePreloaderPath