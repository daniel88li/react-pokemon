import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonContainer from "./containers/PokemonContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <div>
      <h1>Pokemon data</h1>
      <ApolloProvider client={client}>
        <main>
          <PokemonContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
