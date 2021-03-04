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
  return (
    <div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name}></img>
      </div>
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div className="pokemon-meta">
        <span>MaxHP: {pokemon.maxHP}</span> <br />
        <span>MaxCP: {pokemon.maxCP}</span>
      </div>
      <div className="pokemon-attacks">
        <table>
          <caption>Special Attacks</caption>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Damage</th>
            </tr>
            {spAttacks}
          </tbody>
        </table>
      </div>

      <hr></hr>
    </div>
  );
}

export default Pokemon;
