import styled from "styled-components";

export const Container = styled.div`

`

export const InputWrapper = styled.div`

    display: flex;
    align-items: center;
    background-color: #404d56;
    padding: 10px;
    border-radius: 20px;

    & > label > svg {
        color: white;
        width: 30px;
        height: 30px;
    }

    & > input {
        font-size: 20px;
        color: white;
        
        background-color: transparent;
        border: none;
        outline: none;
        margin-left: 10px;
        width: 300px;
    }
`