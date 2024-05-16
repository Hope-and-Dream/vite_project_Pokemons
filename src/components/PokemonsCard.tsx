type Props = {
  name: string;
  onClick: () => void;
};

const PokemonsCard = ({ name, onClick }: Props) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <button onClick={onClick}>More...</button>
    </div>
  );
};

export default PokemonsCard;
