import styled from 'styled-components';

export const Logo = styled.img`
    width: 4vw;
    height: 7vh;
    margin-left: 1vw;
    margin-top: -12vw;
    position: fixed;
    z-index: 2;
`

export const Navegation = styled.div`
    margin-left: 75vw;
    margin-top: -12.5vw;
    position: fixed;
    z-index: 3;

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

export const IntroductionSection = styled.div`
    display: flex;
    align-items: flex-start; 
    flex-direction: column;
    margin-top: 13vw;
    margin-left: 4vw;

    h1{
        font-size: 50px;
        color: white;
        z-index: 1;
    }

    p{
        margin-top: -1vw;
        font-size: 25px;
        z-index: 1;
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
        z-index: 1;
    }

    img{
        margin-top: -3.5vw;
        margin-left: 15vw;
        z-index: 1;
        position: absolute;
        &:hover{
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            transition: 0.3s;
            opacity: 0.8;
        }
    
    }
`

export const MainImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    margin-top: -36.6vw;
`

export const AboutMeSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 3.5vw;
        color: #0F98AF;
        margin-top: 1vw;
        z-index: 2;
    }

    img{
        margin-top: -5.5vw;
        margin-left: 80vw;
        transform:  rotate(20deg);
        width: 5vw;
        height: 8vh;
        opacity: 0.6;
    }

    p{
        margin-top: -8vw;
        text-align: center;
        font-size: 1.7vw;
        padding: 10vw;
    }

    .second-row{
        margin-top: -11vw;
        width: 100%;
    }
`


export const ProjectSection = styled.div` 
    h3{
        font-size: 4.5vw;
        color: #0F98AF;
        margin-top: 2vw;
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

    .github-img{
        margin-top: 8vw;
    }

    hr{
        width: 90%;
        border: 1px solid #0F98AF;
        margin-top: 1vw;
        opacity: 0.3;
    }
`

export const SkillsSection = styled.div`
    h4{
        font-size: 4.5vw;
        color: #0F98AF;
        margin-top: 2vw;
        text-align: center;
    }

    p{
        text-align: center;
        margin-top: -5.5vw;
    }

    .tecnologias-img{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 7vw;
        margin-top: 5vw;
    }

  
    img{
      width: 6vw;
      height: 10vh;
      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.3s
        }
    }

    .tecnologias-img1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 7vw;
        margin-top: 8vw;
    }

    img{
      width: 6vw;
      height: 10vh;

      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.3s;
        opacity: 0.5;
        }
    }

    .mediaqueries{
        width: 6vw;
        height: 14vh;
        margin-top: -1vw;
    }
    
    hr{
        width: 90%;
        border: 1px solid #0F98AF;
        margin-top: 2vw;
        opacity: 0.3;
        border-bottom-left-radius: 5vw;
        border-bottom-right-radius: 5vw;
    }
`

export const ContactSection = styled.div`
    h5{
        font-size: 2vw;
        color: #fff;
        margin-top: 2vw;
        margin-left: 4.7vw;
        text-align: start;
    }

    div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 30px;
        margin-top: 3vw;
    }

    .contatos{
        margin-left: 4.5vw;
    }


    a{
        text-decoration: none;
    }

    img{
        width: 4vw;
    }

    p{
        color: white;
        margin-left: 5vw;
        margin-top: -2.5vw;
    }
`

export const Footer = styled.div`
    hr{
        margin-top: 10vw;
        border: 1px solid gray;
        opacity: 0.3;
    }

    p{
        text-align: center;
        font-size: 12px;
        margin-top: -0.3vw;
    }
`



