import { Pokedex } from '../../types/TpokemonInfo'
import { PokemonStats } from '../PokemonStats'
import * as C from './styles'

type TPokemonInfo = {
    currentPokemon: Pokedex
}

export const PokemonInfo = ({ currentPokemon }: TPokemonInfo) => {
   
    const { name, id} = currentPokemon  
    const { types, abilities, stats } = currentPokemon


    const img = currentPokemon.sprites.other?.dream_world.front_default
    const setId = id < 10 ? `00${id}` : `0${id}`

    const colorType = (name: string) => {
        switch (name) {
            case 'grass': 
                return '#9bcc50'
            break;
            case 'poison':
                return '#b97fc9'
            break;
            case 'fire': 
                return '#fd7d24'
            break;
            case 'water': 
                return '#4592c4'
            break;
            case 'flying':
                return '#353b40'
            break;
            default: return '#9bcc50'
        }
    }

    return (
        <C.Container>
            <C.ImgWrapper>
                <img src={img} alt="" />
            </C.ImgWrapper>
            <C.NameWrapper>
                <span>#{setId}</span>
                <h2 className='nameDiv'>{name}</h2>
                <C.TypeStylesWrapper>
                    {types.map((item, index) => (
                        <C.TypeStyles
                            primary={colorType(item.type.name)}
                        >
                            {(item.type.name)}
                        </C.TypeStyles>
                    ))}
                </C.TypeStylesWrapper>
            </C.NameWrapper>
            <C.AbilitiesWrapper>
                <h3>ABILITIES</h3>
                <C.ShowAbilities>
                    {abilities.map((abilitie) => (
                        <C.Abilities> 
                            <span>{abilitie.ability.name}</span>
                        </C.Abilities>
                    ))}
                </C.ShowAbilities>
            </C.AbilitiesWrapper>
            <C.StatsWrapper>
                <h2>STATS</h2>
                <div className='statsInfo'>
                    {stats.map((stats) => (
                        <PokemonStats 
                        stats={stats}
                        />
                    ))}
                </div>
            </C.StatsWrapper>
        </C.Container>
    )
}