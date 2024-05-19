import { useState } from 'react'
import Modal from 'react-modal';
import './App.css'
import PokemonsCard from './components/PokemonsCard'
import {PokemonInfo} from './components/PokemonInfo';
import {BaseInfo, PokemonSpecies} from './components/type.ts'
import CircularProgress from '@mui/material/CircularProgress'
import { useDataFromEndPoint } from './hooks/useDataFromEndPoint.ts';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState('')

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

const pokemonList = useDataFromEndPoint<PokemonSpecies>("https://pokeapi.co/api/v2/pokemon-species");
  const pokemonInfo = pokemonList?.results

  return (
    <>
      <div className="allCards">
        {!pokemonInfo ? (
          <CircularProgress />
        ) : (
          pokemonInfo?.map((el: BaseInfo, index: number) => <PokemonsCard
            key={index}
            name={el.name}
            onClick={() => {
              setSelectedPokemonUrl(el.url);
              openModal();
            }}
          /> 
          ))
        }
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <PokemonInfo
          url={selectedPokemonUrl}
        />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}

export default App
