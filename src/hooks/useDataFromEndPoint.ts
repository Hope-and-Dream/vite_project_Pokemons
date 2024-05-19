import { useEffect, useState } from "react";
import axios from "axios";


export const useDataFromEndPoint = <T>(endpoint: string): T | null => {
    const [response, setResponse] = useState<T |null>(null);

    const getDataFromApi = async () => {
            const { data } = await axios.get(endpoint);
            setResponse(data);
    };
 
    useEffect(() => {
        try {
        getDataFromApi();
         } catch (error) {
            setResponse(null);
         }
    }, []);

    return response;
};

