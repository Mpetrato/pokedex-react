import { useEffect, useState } from 'react'
import { Api } from '../../api/api'
import { Pokedex } from '../../types/TpokemonInfo'
import { TpokemonResults } from '../../types/TpokemonsUrl'
import { PokemonCard } from '../PokemonCard'
import { PokemonInfo } from '../PokemonInfo'
import * as C from './styles'

export const PokemonList = () => {

    const [loading, setLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
    const [pokemonList, setPokemonList] = useState<Pokedex[]>([]);
    const [currentPokemon, setCurrentPokemon] = useState<Pokedex | null>(null);
    const [loadMore, setLoadMore] = useState<boolean>(true)

    let newArray: Pokedex[] = [...pokemonList]

    const loadPokemonsName = async () => {
        setLoadMore(true)
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
        setLoading(false)
        setLoadMore(false)
    }


    
    
    useEffect(() => {
        loadPokemonsName();
    }, [])

   

    return (
        <C.Container>
            <C.ContainerList>
                {loading && 
                    <div>Estamos caçando os pokemons...</div>
                }
                {!loading &&
                <>
                    <C.PokeListWrapper>
                        {pokemonList.map((item, index) => (
                            <PokemonCard 
                            item={item}
                            index={index}
                            setCurrentPokemon={setCurrentPokemon}
                            />
                            ))}
                    </C.PokeListWrapper>
                    {currentPokemon && 
                        <C.PokeInfoWrapper>
                            <PokemonInfo 
                                currentPokemon={currentPokemon}
                            />
                        </C.PokeInfoWrapper>
                        
                    }
                </>
                }
                </C.ContainerList>
                <C.LoadButton
                    onClick={e => loadPokemonsName()}
                >
                    {loadMore && 
                        <div>Aguarde...</div>
                    }
                    {!loadMore && 
                        <div>Load More</div>
                    }
                </C.LoadButton>
        </C.Container>
    )
}