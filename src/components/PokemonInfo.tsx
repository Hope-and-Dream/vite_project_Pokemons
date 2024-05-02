type Props = {
    name:string;
    base_happiness: number;
    color: string;
    habitat: string;
    shape: string;
}

const PokemonInfo = ( {name, base_happiness, color, habitat, shape }:Props) => {
    return (
        
        <div className="cardInfo">
          
            <h2>{name}</h2>
            <ul>
                <li>Base_happiness: {base_happiness}</li>
                <li>Color: {color}</li>
                <li>Habitat: {habitat}</li>
                <li>Shape: {shape}</li>
            </ul>
        </div>
            
    )
}

export default PokemonInfo