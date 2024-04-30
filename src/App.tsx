import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './App.css'
import axios from 'axios'
import PokemonsCard from './components/PokemonsCard'
import PokemonInfo from './components/PokemonInfo';


interface Pokemon {
  name: string;
  url: string;
}


function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getPokemonsDetails = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon-species');
    setPokemonList(data.results)

    const detailsPromises = data.results.map(async (pokemon: Pokemon) => {
      const detailsResponse = await axios.get(pokemon.url);
      return detailsResponse.data;

    });

    const detailsData: any[] = await Promise.all(detailsPromises);
    setPokemonDetails(detailsData);
  }

  useEffect(() => {
    getPokemonsDetails()
  }, [])

  console.log(pokemonList)
  console.log(pokemonDetails)



  return (
    <>
      <div className="allCards">
        {
          pokemonDetails.map((el: any, index,) => <PokemonsCard
            key={index}
            name={el.name}
            habitat={el.habitat.name}
            openModal={openModal}
          />
          )
        }
        <button onClick={openModal}>More...</button>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {pokemonDetails.map((el: any, index,) => <PokemonInfo
            key={index}
            name={el.name}
            base_happiness={el.base_happiness}
            color={el.color.name}
            habitat={el.habitat.name}
            shape={el.shape.name}
          />)
          }
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>

    </>
  )
}

export default App
