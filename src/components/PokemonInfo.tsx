import { useDataFromEndPoint } from '../hooks/useDataFromEndPoint';
import { SelectedPokemonInfo } from './type';

type Props = {
  url: string;
};

const PokemonInfo = ({ url }: Props) => {
  console.log(url);

  const selectedPokemonInfo = useDataFromEndPoint<SelectedPokemonInfo>(url);

  console.log(selectedPokemonInfo);

  return (
    <div className="cardInfo">
      {selectedPokemonInfo && (
        <div>
          <h2>{selectedPokemonInfo?.name}</h2>
          <ul>
            <li>Base_happiness: {selectedPokemonInfo?.base_happiness}</li>
            <li>Color: {selectedPokemonInfo?.color?.name}</li>
            <li>Habitat: {selectedPokemonInfo?.habitat?.name}</li>
            <li>Shape: {selectedPokemonInfo?.shape?.name}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
