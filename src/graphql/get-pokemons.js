import gql from "graphql-tag";

//tagged template literals
const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export default GET_POKEMONS;
