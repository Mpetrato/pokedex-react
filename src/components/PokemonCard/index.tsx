import { Pokedex } from '../../types/TpokemonInfo'
import * as C from './styles'

type TpokemonCard = {
    item: Pokedex
    index: number;
}

export const PokemonCard = ( { item, index }: TpokemonCard) => {

    const img = item.sprites.other?.dream_world.front_default

    return (
        <C.Container>
            <C.CardWrapper>
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