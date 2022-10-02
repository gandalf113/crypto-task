import { useState, useEffect } from 'react'

/**
 * Fetches data and provides isLoading state
 */
const useHttp = (url: string) => {
    const [data, setData] = useState<Array<unknown>>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const res = await fetch(url);
            const data = await res.json();

            setData(data);

            setIsLoading(false);
        }

        fetchData();
    }, []);

    return [data, isLoading]
}

export default useHttp