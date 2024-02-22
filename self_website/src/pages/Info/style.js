import styled from "styled-components";
import SelfImage1 from '../../assets/images/Jeffrey.jpg';

export const InfoWrapper = styled.div`
    font-family: "play-google";
    color: white;

section {
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: red; */
  scroll-snap-align: center;
  perspective: 1500px;
}
/* section > div {
  width: 70vw;
  height: 70vh;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
} */
.title {
    position: absolute;
    top: 10vh;
    left: 0;
}
.placeholder {
    width: 70vw;
    height: 70vh;
    border: 2px solid white;
    display: flex;
    overflow: hidden;
    position: relative;
    margin: 20px 0; 

}
a {
    color: white;
    background-color: black; 
    padding: 10px;
    cursor: pointer;
    border: 2px solid white;
    text-decoration: none;
}
a:hover {
  background-color: white;
  color: black;
  transition: 0.4s;
}
.progress-bar {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: #fafafa;
  /* background:red; */
  bottom: 20px;

  background: linear-gradient(to right, #6dd5ed, #2193b0);
  height: 12px;
  border-radius: 5px;
  background-size: 200% 200%;
  animation: movingGradient 2s ease infinite;
}

@keyframes movingGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

`
export const AboutMe = styled.div`
    width: 60%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;

    .info-title {
      /* font-size: 60px; */
      font-size: 3vw;
      margin:2vw 2vw 0 2vw;
      /* height: 100px; */
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .info-content {
      flex: 3;
      display: flex;
      flex-direction: column;
      /* height: calc(100% - 200px); */
      padding: 0 2vw 4vw 4vw;
      justify-content: space-between;
      font-size: 1.15vw;
      div {
        height: 33%;
        display: flex;
        align-items: center;
      }
    }

`
export const ImageWrapper = styled.div`
    width: 40%;
    height: 100%;
    padding: 3%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`
export const Image = styled.div`
  background-image: url(${SelfImage1});
  background-size: cover;
  background-position: 30% 30%;
  width: 100%;
  height: 100%;
`
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 30%;
  position: absolute;
  top: 0;
  left: 0;
`;


