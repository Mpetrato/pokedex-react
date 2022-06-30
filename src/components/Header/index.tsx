import * as C from './styles'
import { CgPokemon } from 'react-icons/cg'
import { SearchInput } from '../SearchInput'
 
export const Header = () => {
    return (
        <C.Container>
            <C.LogoWrapper>
                <CgPokemon />
            </C.LogoWrapper>
            <C.SearchInputWrapper>
                <SearchInput />
            </C.SearchInputWrapper>
        </C.Container>
    )
}