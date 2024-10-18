function List() {
  const Item = (props) => {
    return <li>{props.itemLista}</li>;
  };

  const nomes = ["Caio", "Gabriel", "Lucas", "Jailson"];

  return (
    <>
      <p>Lista de Nomes</p>
      <ul>
        {nomes.map((nome) => (
          <Item itemLista={nome} />
        ))}
      </ul>
    </>
  );
}

export default List;
