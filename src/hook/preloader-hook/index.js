import {useEffect, useState} from "react";

const usePreloader = () => {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return {isLoading}
}
export default usePreloader