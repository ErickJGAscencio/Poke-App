const base_URL = "https://pokeapi.co/api/v2/";

export const getPokemon = async (name:string) => {
    try {
        const response = await fetch(`${base_URL}pokemon/${name}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Hubo un problema al obtener el Pokémon:", error);
    }
};

export const getEvolutions = async (id:number) =>{
    try{
        const response = await fetch(`${base_URL}evolution-chain/${id}`);
        if(!response.ok)
            throw new Error(`Error: ${response.status}`)

        const data = await response.json();
        return data;
    }catch(error){
        console.error("Hubo un problema al obtener la o las evoluaciones:", error);
    }
}