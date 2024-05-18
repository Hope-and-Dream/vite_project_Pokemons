<<<<<<< HEAD
import { useDataFromEndPoint } from "../hooks/useDataFromEndPoint";
import {SelectedPokemonInfo} from './type.ts'
=======
import { useDataFromEndPoint } from '../hooks/useDataFromEndPoint';
import { SelectedPokemonInfo } from './type';
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

type Props = {
  url: string;
};

<<<<<<< HEAD
export const PokemonInfo = ({ url }: Props) => {
    const selectedPokemonInfo = useDataFromEndPoint<SelectedPokemonInfo>(url)
=======
const PokemonInfo = ({ url }: Props) => {
  console.log(url);

  const selectedPokemonInfo = useDataFromEndPoint<SelectedPokemonInfo>(url);
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d

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
<<<<<<< HEAD
        )}
=======
      )}
    </div>
  );
};

export default PokemonInfo;
>>>>>>> 34553882fea7debced6230ac1a3183bc8300bb5d
