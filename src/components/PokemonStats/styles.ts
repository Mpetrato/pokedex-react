import styled from "styled-components";

type TstatBar = { 
    widht: number;
}

export const Container = styled.div`
    color: #FFF;
    width: 100%;
    margin-top: 10px;
`
export const StatWrapper = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    border-radius: 10px;
` 
export const StatBar = styled.div<TstatBar>`
    background-color: #FFFFFF;
    width: ${p => p.widht}%;
    color: black;
    text-align: end;
    padding-right: 10px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
`