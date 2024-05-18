import { useEffect, useState } from "react";
import axios from "axios";


export const useDataFromEndPoint = <T>(endpoint: string): T | [] => {
    const [response, setResponse] = useState<T | []>([]);

    const getDataFromApi = async () => {
        try {
            const { data } = await axios.get(endpoint);
            setResponse(data as T);
        } catch (error) {
            setResponse([]);
        }
    };

    useEffect(() => {
        getDataFromApi();
    }, []);

    return response;
};

