import styled from 'styled-components';

export const Logo = styled.img`
    width: 4vw;
    height: 7vh;
    margin-left: 1vw;
    margin-top: 1vw;
`

export const Navegation = styled.div`
    margin-right: 2vw;
    margin-top: -3.5vw;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1.8vw;
    }

    li{
        list-style-type: none;
    }
    
    .nav-links{
        text-decoration: none;
        color: whitesmoke;
        flex-direction: row;
        font-size: 19px;
    }

    .nav-links:hover{
        transition: color 0.3s;
        color: #0F98AF;
    }
`

export const Introduction = styled.div`
    display: flex;
    align-items: flex-start; 
    flex-direction: column;
    margin-top: 13vw;
    margin-left: 10vw;

    h1{
        font-size: 45px;
    }

    p{
        margin-top: -1vw;
        font-size: 20px;
    }

    .download-curriculo{
        background-color:#0F98AF;
        width: 143px;
        height: 40px;
        color: white;
        font-size: 14px;
        text-decoration: none;
        border-radius: 10vw;
        text-align: center;
        font-size: 17px;
        padding-top: 1.2vw;
        cursor: pointer;
    }

    div{
        margin-top: -3.3vw;
        margin-left: 15vw;
    }
`

export const Looper = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: -41vw;

  img{
    width: 80vw;
    height: 120vh;
    z-index: -1;
    opacity: 0.7;
  }
`

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 3.5vw;
        color: #0F98AF;
        margin-top: -0.7vw;
    }

    img{
        margin-top: -5.5vw;
        margin-left: 80vw;
        transform:  rotate(20deg);
        width: 5vw;
        height: 8vh;
        opacity: 0.9;
    }

    p{
        margin-top: -7vw;
        text-align: center;
        font-size: 1.7vw;
        padding: 10vw;
    }

    .second-row{
        margin-top: -9.5vw;
        width: 100%;
    }
`


export const ProjectSection = styled.div` 
    h3{
        font-size: 5vw;
        color: #0F98AF;
        margin-top: 5vw;
        text-align: center;
    }

    .containers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3vw;
        margin-top: 5vw;
    }
`

