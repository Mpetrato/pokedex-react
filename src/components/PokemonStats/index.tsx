import { Stat } from '../../types/TpokemonInfo'
import * as C from './styles'

type TpokemonStats = { 
    stats: Stat
}

export const PokemonStats = ({ stats }: TpokemonStats) => {
    return (
        <C.Container>
            <span>{stats.stat.name}</span>
            <C.StatWrapper>
                <C.StatBar
                    widht={stats.base_stat / 1.5}
                >
                    {stats.base_stat}
                </C.StatBar>
            </C.StatWrapper>
        </C.Container>
    )
}