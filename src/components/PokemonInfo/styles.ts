import styled from "styled-components";

type TTypeStyles = {
    primary: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

`
export const ImgWrapper = styled.div`

    & > img {
        width: 150px;
        height: 150px;
    }
`
export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    color: #FFF;

    .nameDiv {
        margin-bottom: 20px;
    }
`
export const TypeStylesWrapper = styled.div`
    color: white;
`

export const TypeStyles = styled.div<TTypeStyles>`
    text-transform: uppercase;
    display: inline-block;
    border-radius: 10px;
    padding: 10px 15px;
    color: black;
    font-weight: 700;
    font-size: 16px;
    background-color: ${props => props.primary};
    border: none;

    & + div {
        margin-left: 20px;
    }
`
export const AbilitiesWrapper = styled.div`
    margin-top: 30px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h3 {
        margin-bottom: 10px;
    }
`
export const ShowAbilities = styled.div`
    display: flex;
`
export const Abilities = styled.div`
    background-color: rgba(0, 0, 0, .4);
    padding: 10px 20px;
    border-radius: 10px;
    margin-left: 10px;
`