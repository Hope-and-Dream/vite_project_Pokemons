type Props = {
    name: string;
    habitat: string;
    onClick:any;
}



const PokemonsCard = ({ name,  habitat, onClick }: Props) => {
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p> Habitat: {habitat}</p>
            <button onClick={onClick}>More...</button>
        </div>
    )
}

export default PokemonsCard