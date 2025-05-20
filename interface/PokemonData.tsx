
interface Ability {
    ability: {
        name: string;
    };
}

interface PokemonData {
    id: number,
    name: string,
    sprite: string,
    types: Array<{
        type: {
            name: string;
        };
    }>;
    abilities: Array<string>,
    evolutions: Array<{
        species: {
            name: string
        }
    }>
    moves: Array<{
        move: {
            name: string;
        };
    }>
}
