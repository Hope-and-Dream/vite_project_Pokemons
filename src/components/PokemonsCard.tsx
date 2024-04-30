type Props = {
    name: string;
    habitat: string;
    openModal:any;
}


const PokemonsCard = ({ name, habitat, openModal }: Props) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p> Habitat: {habitat}</p>
            <button onClick={openModal}>More...</button>
        </div>
    )
}

export default PokemonsCard