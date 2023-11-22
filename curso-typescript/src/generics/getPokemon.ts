import axios from "axios";
import { Pokemon } from "../interfaces"


export const getPokemon = async( pokeId: number ): Promise<Pokemon> => {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    console.log(resp.data.name);
    
    return resp.data;
}