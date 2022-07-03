import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 5%;
    display: flex;
`

export const PokeListWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `

export const PokeInfoWrapper = styled.div`
    width: 400px;
    max-height: 800px;
    background-color: #404d56;
    margin-left: 100px;

    
    position: sticky;
    top: 10%;
`