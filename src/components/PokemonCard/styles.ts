import styled from "styled-components";

export const Container = styled.div`
`
export const CardWrapper = styled.div`
    width: 200px;
    height: 200px;
    margin: 0px 20px 20px 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #404d56;
    
    padding: 20px;
    border-radius: 20px;
` 
export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > img {
        max-width: 60px;
        max-height: 60px;
    }

` 
export const InfoWrapper = styled.div`

    margin-top: 20px;

    & > h3 {
        color: white;
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
    }
`

export const TypeTag = styled.div`
    
`