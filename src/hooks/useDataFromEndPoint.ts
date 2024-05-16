import { useEffect, useState } from 'react';
import axios from 'axios';
// import { SelectedPokemonInfo, PokemonSpecies } from '../components/type.ts'

export const useDataFromEndPoint = <T>(endpoint: string) => {
  const [response, setResponse] = useState<T | null>(null);

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

  return response;
};
