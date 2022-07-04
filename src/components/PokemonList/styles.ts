import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerList = styled.div`
    display: flex;
    justify-content: center;
`

export const PokeListWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `

export const PokeInfoWrapper = styled.div`
    min-width: 400px;
    width: auto;
    height: 670px;
    display: inline-block;
    background-color: #404d56;
    margin-left: 100px;

    
    position: sticky;
    top: 2%;
`
export const LoadButton = styled.div`
    padding: 10px;
    background-color: #FFF;
    border-radius: 10px;
    font-size: 14px;
    text-transform: uppercase;
    color: #000;
    font-weight: bold;
    cursor: pointer;
`