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

interface SelectedPokemon {
  base_happiness: number
  capture_rate: number
  color: {
    name: string
    url: string
  }
  egg_groups: [
    {
      name: string
      url: string
    }
  ]
  evolution_chain: {
    url: string
  }
  evolves_from_species: null
  flavor_text_entries: [
    {
      flavor_text: string
      language: {
        name: string
        url: string
      }
      version: {
        name: string
        url: string
      }
    }
  ]
  form_descriptions: []
  forms_switchable: boolean
  gender_rate: number
  genera: [
    {
      genus: string
      language: {
        name: string
        url: string
      }
    }
  ]
  generation: {
    name: string
    url: string
  }
  growth_rate: {
    name: string
    url: string
  }

  habitat: {
    name: string
    url: string
  }
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean;
  is_mythical: boolean
  name: string
  names: [
    language: {
      name: string
      url: string
    }
  ]
  order: number
  pal_park_encounters: [
    {
      area: {
        name: string
        url: string
      }
      base_score: number
      rate: number
    }
  ]
  pokedex_numbers: [
    {
      entry_number: number
      pokedex: {
        name: string
        url: string
      }
    }
  ]
  shape: {
    name: string
    url: string
  }
  varieties: [
    {
      is_default: boolean
      pokemon: {
        name: string
        url: string
      }
    }
  ]
}


function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [pokemonDetails, setPokemonDetails] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon>();

  const handleCardSelection = async (url: string) => {
    const detailsResponse = await axios.get(url);
    setSelectedPokemon(detailsResponse.data)
    openModal();
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getPokemonsInfo = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon-species');
    setPokemonList(data.results)

    const detailsPromises = data.results.map(async (pokemon: Pokemon) => {
      const detailsResponse = await axios.get(pokemon.url);
      return detailsResponse.data.habitat.name;
    });


    const detailsData: string[] = await Promise.all(detailsPromises);
    setPokemonDetails(detailsData);
  }

  console.log (pokemonDetails)

  useEffect(() => {
    getPokemonsInfo()
  }, [])

  return (
    <>
      <div className="allCards">
        {
          pokemonList.map((el: Pokemon, index) => <PokemonsCard
            key={index}
            name={el.name}
            habitat={pokemonDetails[index]}
            onClick={() => handleCardSelection(el.url)}
          />
          )
        }
      </div>
      {selectedPokemon && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {<PokemonInfo
            name={selectedPokemon.name}
            base_happiness={selectedPokemon.base_happiness}
            color={selectedPokemon.color.name}
            habitat={selectedPokemon.habitat.name}
            shape={selectedPokemon.shape.name}
          />
}
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}

    </>
  )
}

export default App
