import {useQuery} from '@tanstack/react-query';

export default function PokemonImage({pokeUrl, pokeName}) {
   //구조분해할당
   //different fetch I need to rename of queryKey
    const {data} = useQuery({ queryKey: [pokeName], 
    queryFn: async () => {
        const response = await fetch(pokeUrl);

        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
});

return (
    <div>
        <img src={data?.sprites.front_default} height={100} width={100} />
        <p>{pokeName}</p>
    </div>
);
}