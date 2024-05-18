import { useDataFromEndPoint } from "../hooks/useDataFromEndPoint";
import {SelectedPokemonInfo} from './type.ts'

type Props = {
    url: string;
}

export const PokemonInfo = ({ url }: Props) => {
    const selectedPokemonInfo = useDataFromEndPoint<SelectedPokemonInfo>(url)

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
        )}