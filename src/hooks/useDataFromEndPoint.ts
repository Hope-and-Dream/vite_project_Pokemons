<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";
=======
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { SelectedPokemonInfo, PokemonSpecies } from '../components/type.ts'
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

export const useDataFromEndPoint = <T>(endpoint: string) => {
  const [response, setResponse] = useState<T | null>(null);

<<<<<<< HEAD
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
=======
  const getDataFromApi = async () => {
    try {
      const { data } = await axios.get<T>(endpoint);
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

  return response;
};
<<<<<<< HEAD

=======
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d
