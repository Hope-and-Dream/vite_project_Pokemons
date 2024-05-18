import { useState } from 'react';
import Modal from 'react-modal';
<<<<<<< HEAD
import './App.css'
import PokemonsCard from './components/PokemonsCard'
import {PokemonInfo} from './components/PokemonInfo';
import {BaseInfo, PokemonSpecies} from './components/type.ts'
import CircularProgress from '@mui/material/CircularProgress'
=======
import './App.css';
import PokemonsCard from './components/PokemonsCard';
import PokemonInfo from './components/PokemonInfo';
import { Pokemon, PokemonSpecies } from './components/type.ts';
import CircularProgress from '@mui/material/CircularProgress';
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d
import { useDataFromEndPoint } from './hooks/useDataFromEndPoint.ts';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
<<<<<<< HEAD
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState('')
=======
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>('');
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

<<<<<<< HEAD

  const {results} = useDataFromEndPoint<PokemonSpecies>("https://pokeapi.co/api/v2/pokemon-species");
=======
  const data = useDataFromEndPoint<PokemonSpecies>(
    'https://pokeapi.co/api/v2/pokemon-species',
  );
  console.log('pok', data);
  // const data2 = useDataFromEndPoint("https://pokeapi.co/api/v2/pokemon-species/1/");
  // console.log (data2, "data2" )
  const pokemonList = data?.results;
  console.log(pokemonList);
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

  return (
    <>
      <div className="allCards">
<<<<<<< HEAD
        {results?.length < 1 ? (
          <CircularProgress />
        ) : (
          results?.map((el: BaseInfo, index: number) => <PokemonsCard
            key={index}
            name={el.name}
            onClick={() => {
              setSelectedPokemonUrl(el.url);
              openModal();
            }}
          /> 
=======
        {!pokemonList?.length ? (
          <CircularProgress />
        ) : (
          pokemonList?.map((el: any, index: number) => (
            <PokemonsCard
              key={index}
              name={el.name}
              onClick={() => {
                setSelectedPokemonUrl(el.url);
                openModal();
              }}
            />
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d
          ))
        )}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
<<<<<<< HEAD
        <PokemonInfo
          url={selectedPokemonUrl}
        />
=======
        {<PokemonInfo url={selectedPokemonUrl} />}
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default App;
