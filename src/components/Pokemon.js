import React from "react";

function Pokemon(props) {
  const { pokemon } = props;
  const spAttacks = pokemon.attacks.special.map((atk) => {
    return (
      <tr key={atk.name}>
        <td>{atk.name}</td>
        <td>{atk.damage}</td>
      </tr>
    );
  });

  const typeDesc = pokemon.types.length > 1 ? "Types" : "Type";

  return (
    <div className="pokemon">
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name}></img>
      </div>
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-meta">
        <span>Pokedex #{pokemon.number}</span>
        <span>
          {typeDesc}: {pokemon.types.join(", ")}
        </span>
        <span>MaxHP: {pokemon.maxHP}</span>
        <span>MaxCP: {pokemon.maxCP}</span>
      </div>
      <br />
      <div className="pokemon-attacks">
        <table>
          <caption>Special Attacks</caption>
          <tbody>
            <tr>
              <th>Move</th>
              <th>Damage</th>
            </tr>
            {spAttacks}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pokemon;
