import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { Pokedex } from '../../types/TpokemonInfo'
import * as C from './styles'

type TpokemonCard = {
    item: Pokedex
    index: number;
    setCurrentPokemon: Dispatch<SetStateAction<Pokedex>>
}

export const PokemonCard = ( { item, index, setCurrentPokemon }: TpokemonCard) => {

    const img = item.sprites.other?.dream_world.front_default

    const showPokemonInfo = (item: Pokedex) => {
        console.log(item)
        setCurrentPokemon(item)
    }

    return (
        <C.Container>
            <C.CardWrapper onClick={() => showPokemonInfo(item)}>
                <C.ImgWrapper>  
                    <img src={img} alt="" />
                </C.ImgWrapper>
                <C.InfoWrapper>
                    <h3>
                        {item.name}
                    </h3>
                    <C.TypeTag>

                    </C.TypeTag>
                </C.InfoWrapper>
            </C.CardWrapper>
        </C.Container>
    )
}