import { useEffect, useState } from "react";
import axios from "axios";
// import { SelectedPokemonInfo, PokemonSpecies } from '../components/type.ts'


export const useDataFromEndPoint = (endpoint: string) => {
    const [response, setResponse] = useState([])

    const getDataFromApi = async () => {
        const { data } = await axios.get(endpoint);
        setResponse(data)
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    return response;
};
 

