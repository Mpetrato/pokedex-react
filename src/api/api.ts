import axios from "axios"
import { Pokedex } from "../types/TpokemonInfo"
import { TpokemonsUrl } from "../types/TpokemonsUrl"

const BASE = 'https://pokeapi.co/api/v2/pokemon/'

export const Api = {
    loadPokemonsName: async (url: string): Promise<TpokemonsUrl> => {
        const response = await axios.get<TpokemonsUrl>(url)
        return response.data 
    },
    loadPokemonDetails: async (name: string): Promise<Pokedex> => {
        const response = await axios.get<Pokedex>(`${BASE}${name}`)
        return response.data
    }
}