import {useEffect, useLayoutEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const usePreloaderPath = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    useLayoutEffect(() => {
        if (location.pathname) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1800)
        }
    }, [location])


    return {loading}
}
export default usePreloaderPath