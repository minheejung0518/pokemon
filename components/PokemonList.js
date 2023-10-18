import { useQuery,
  } from '@tanstack/react-query'
import PokemonImage from './PokemonImage';

//const query = useQuery({ queryKey: ['pokemonList'], queryFn: getPokemons })

export default function PokemonList() {
    const query = useQuery({ queryKey: ['pokemonList'], 
    queryFn: async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        
        return response.json();
    },
})
 console.log(query.data);
 return <div>
            {/* <img src={query.data.sprites.front_default} width={100} height={100}/> */}
            {query.data?.results.map((poke, i) => {
              return <PokemonImage pokeUrl={poke.url} pokeName={poke.name} />;
            })}
       </div>
  }
  