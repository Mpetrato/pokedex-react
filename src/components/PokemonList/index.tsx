import { useEffect, useState } from 'react'
import { Api } from '../../api/api'
import { Pokedex } from '../../types/TpokemonInfo'
import { TpokemonResults } from '../../types/TpokemonsUrl'
import { PokemonCard } from '../PokemonCard'
import * as C from './styles'

export const PokemonList = () => {

    const [currentPage, setCurrentPage] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
    const [pokemonList, setPokemonList] = useState<Pokedex[]>([]);
    let newArray: Pokedex[] = [...pokemonList]

    const loadPokemonsName = async () => {
        const response = await Api.loadPokemonsName(currentPage)
        setCurrentPage(response.next)
        await loadPokemonDetails(response.results)
    }
    const loadPokemonDetails = async (results: TpokemonResults[]) => {
        for (let pokemon of results) {
            const response = await Api.loadPokemonDetails(pokemon.name)
            newArray.push(response)
        }
        setPokemonList(newArray)
    }
    
    
    useEffect(() => {
        loadPokemonsName();
    }, [])

    return (
        <C.Container>
            <C.PokeListWrapper>
                {pokemonList.map((item, index) => (
                    <PokemonCard 
                        item={item}
                        index={index}
                    />
                ))}
            </C.PokeListWrapper>
            <C.PokeInfoWrapper>
                <div>Ola</div>
            </C.PokeInfoWrapper>
        </C.Container>
    )
}