import { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import PokemonsCard from './components/PokemonsCard';
import PokemonInfo from './components/PokemonInfo';
import { Pokemon, PokemonSpecies } from './components/type.ts';
import CircularProgress from '@mui/material/CircularProgress';
import { useDataFromEndPoint } from './hooks/useDataFromEndPoint.ts';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const data = useDataFromEndPoint<PokemonSpecies>(
    'https://pokeapi.co/api/v2/pokemon-species',
  );
  console.log('pok', data);
  // const data2 = useDataFromEndPoint("https://pokeapi.co/api/v2/pokemon-species/1/");
  // console.log (data2, "data2" )
  const pokemonList = data?.results;
  console.log(pokemonList);

  return (
    <>
      <div className="allCards">
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
          ))
        )}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {<PokemonInfo url={selectedPokemonUrl} />}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default App;
