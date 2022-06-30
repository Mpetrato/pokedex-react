import { AiOutlineSearch } from 'react-icons/ai'

import * as C from './styles'

export const SearchInput = () => {
    return(
        <C.Container>
            <C.InputWrapper>
                <label htmlFor="pokemonSearch">
                    <AiOutlineSearch />
                </label>
                <input 
                    type="text" 
                    placeholder='Digite o nome do Pokemon'
                    id='pokemonSearch'
                />
            </C.InputWrapper>
        </C.Container>
    )
}