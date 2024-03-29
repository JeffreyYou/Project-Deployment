import styled from "styled-components";
import backgroundImage from '../../assets/images/picture02.jpg';

const navBarHeight = '16px';

export const ExpertiseWrapper = styled.div`
    width: 100vw;
    /* height: calc(100vh - 60px) ; */
    min-height: 100vh;
    /* background: linear-gradient(to left top, yellow, blue, red); */
    display: flex;
    /* justify-content: center; */
    align-items:center;
    flex-direction: column;

    background: transparent;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-size: 100%;
    background-position: 0% 0%;
    /* transition: background-image 2s ease-in-out; */
`
export const ExpertiseTop = styled.div`
    height: 10vh;
    width: 100vw;
    min-height: 90px;
    /* background-color: grey; */
`
export const ExpertiseContent = styled.div`
    min-width: 70vw;
    min-height: 70vh;
    /* background-color: grey; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    /* height: 100vh; */
    background-size: 100%;
    background-position: 0% 30%;
    
`

export const Title = styled.div`
    @media (max-width: 1400px) {
        font-size: 5vw;
    }
    @media (min-width: 1400px) {
        font-size: 6vw;
    }
    /* font-size: 140px; */
    color: white;
    font-family: "play-google";
    margin-bottom: 7vh;

`

export const List = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    /* background-color: green; */
    font-size: 14px;
    @media (max-width: 1400px) {
        min-height: 410px;
        
    }
    @media (min-width: 1400px) {
        min-height: 530px;

    }
    
`