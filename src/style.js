import styled from 'styled-components';

export const Logo = styled.img`
    width: 4vw;
    height: 7vh;
    margin-left: 1vw;
    margin-top: -12vw;
    position: fixed;
    z-index: 2;
    @media (min-width: 1024px) and (max-width: 1115px){width: 5vw}
    @media (min-width: 935px) and (max-width: 1023px){width: 5.5vw}
    @media (min-width: 846px) and (max-width: 934px){width: 6vw}
    @media (min-width: 757px) and (max-width: 845px){width: 7vw}
    @media (min-width: 668px) and (max-width: 756px){width: 7vw}
    @media (min-width: 579px) and (max-width: 667px){width: 8vw}
    @media (min-width: 488px) and (max-width: 578px){width: 9vw}
    @media (max-width: 487px){width: 12vw; margin-left: 3vw; margin-top: -9vw}  
`

export const Navegation = styled.div`
    margin-left: 73vw;
    margin-top: -12.5vw;
    position: fixed;
    z-index: 3;

  img{
      display: none;
      cursor: pointer;
      @media (min-width: 757px) and (max-width: 845px){display: block; margin-left: 16vw; margin-top: 1vw}
      @media (min-width: 668px) and (max-width: 756px){display: block; margin-left: 16vw; margin-top: 1vw}
      @media (min-width: 577px) and (max-width: 667px){display: block; margin-left: 16vw; margin-top: 1vw}
      @media (min-width: 488px) and (max-width: 576px){display: block; margin-left: 13vw; margin-top: 1vw; width: 6vw}
      @media (max-width: 487px){display: block; margin-left: 10vw; margin-top: 2vw; width: 10vw}
  }
    ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1.8vw;
        @media (min-width: 1024px) and (max-width: 1115px){margin-left: -5vw;}
        @media (min-width: 935px) and (max-width: 1023px){margin-left: -9vw;}
        @media (min-width: 846px) and (max-width: 934px){margin-left: -12vw;}
        @media (max-width: 845px){display: none; flex-direction: column}
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
    @media (min-width: 757px) and (max-width: 845px){justify-content: center; align-items: center; text-align: center}
    @media (min-width: 668px) and (max-width: 756px){justify-content: center; align-items: center; text-align: center}
    @media (min-width: 577px) and (max-width: 667px){justify-content: center; align-items: center; text-align: center}
    @media (min-width: 488px) and (max-width: 576px){justify-content: center; align-items: center; text-align: center}
    @media (max-width: 487px){justify-content: center; align-items: center; text-align: center}

    h1{
        font-size: 45px;
        color: white;
        z-index: 1;
        @media (min-width: 846px) and (max-width: 934px){font-size: 45px}
        @media (min-width: 757px) and (max-width: 845px){font-size: 45px; margin-top: 10vw}
        @media (min-width: 668px) and (max-width: 756px){font-size: 45px; margin-top: 10vw}
        @media (min-width: 577px) and (max-width: 667px){font-size: 45px; margin-top: 10vw}
        @media (min-width: 488px) and (max-width: 576px){font-size: 40px; margin-top: 10vw}
        @media (max-width: 487px){font-size: 40px; margin-top: 30vw}
    }

    p{
        margin-top: -1vw;
        font-size: 20px;
        z-index: 1;
        @media (min-width: 846px) and (max-width: 934px){font-size: 20px}
        @media (min-width: 757px) and (max-width: 845px){font-size: 20px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 20px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 20px}
        @media (min-width: 488px) and (max-width: 576px){font-size: 15px}
        @media (max-width: 487px){font-size: 15px}
    }

    .download-curriculo{
        background-color:#0F98AF;
        width: 143px;
        height: 55px;
        color: white;
        text-decoration: none;
        border-radius: 10vw;
        text-align: center;
        font-size: 17px;
        cursor: pointer;
        z-index: 1;
        @media (min-width: 757px) and (max-width: 845px){margin-left: -10vw}
        @media (min-width: 668px) and (max-width: 756px){margin-left: -15vw}
        @media (min-width: 577px) and (max-width: 667px){margin-left: -15vw}
        @media (min-width: 488px) and (max-width: 576px){margin-left: -17vw}
        @media (max-width: 487px){margin-left: -17vw}

        p{
            padding-top: 1.8vw;
            font-size: 18px;
            @media (min-width: 488px) and (max-width: 576px){padding-top: 3.5vw};
            @media (max-width: 487px){padding-top: 3.5vw};
        }
    }

    img{
        margin-top: -3.5vw;
        margin-left: 15vw;
        z-index: 1;
        position: absolute;
        &:hover{
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            transition: 0.7s;
            opacity: 0.8;
        }
        @media (min-width: 1080px) and (max-width: 1115px){margin-top: -4.2vw; margin-left: 16vw}
        @media (min-width: 1024px) and (max-width: 1079px){margin-top: -4.5vw; margin-left: 16vw}
        @media (min-width: 935px) and (max-width: 1023px){margin-top: -4.5vw; margin-left: 19vw}
        @media (min-width: 846px) and (max-width: 934px){margin-top: -5.1vw; margin-left: 22vw; width: 6vw}
        @media (min-width: 757px) and (max-width: 845px){margin-top: -5.5vw; margin-left: 10vw; width: 7vw}
        @media (min-width: 668px) and (max-width: 756px){margin-top: -6.2vw; margin-left: 10vw; width: 8vw}
        @media (min-width: 577px) and (max-width: 667px){margin-top: -6.5vw; margin-left: 10vw; width: 8vw}
        @media (min-width: 488px) and (max-width: 576px){margin-top: -10vw; margin-left: 13vw; width: 10vw}
        @media (max-width: 487px){margin-top: -10vw; margin-left: 15vw; width: 10vw}
    }
`

export const AboutMeSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 3.5vw;
        color: #0F98AF;
        margin-top: 5vw;
        z-index: 2;
        @media (min-width: 757px) and (max-width: 845px){font-size: 35px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 35px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 35px}
        @media (min-width: 488px) and (max-width: 576px){font-size: 35px}
        @media (max-width: 487px){font-size: 35px}
    }

    p{
        margin-top: -10vw;
        text-align: center;
        font-size: 18px;
        padding: 10vw;
        @media (min-width: 935px) and (max-width: 1023px){font-size: 20px}
        @media (min-width: 846px) and (max-width: 934px){font-size: 18px}
        @media (min-width: 757px) and (max-width: 845px){font-size: 18px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 18px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 18px}
        @media (min-width: 488px) and (max-width: 576px){font-size: 18px}
        @media (max-width: 487px){font-size: 18px}
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
        @media (min-width: 757px) and (max-width: 845px){font-size: 45px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 45px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 45px}
        @media (min-width: 488px) and (max-width: 576px){font-size: 45px}
        @media (max-width: 487px){font-size: 45px}
    }

    .containers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3vw;
        margin-top: 5vw;
    }

    .container-project{
        width: 315px;
        height: 340px;
        background-color: rgb(41, 40, 40);
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
        color: white;
        text-align: center;
        font-size: 15px;  
        margin-bottom: 1vw;

        img{
            width: 100%;
            height: 292px;
            opacity: 0.9;
            background-size: cover;
        }

        p{
            text-align: start;
            margin-top: -0.5vw;
            padding-left: 1vw;
            color: #0F98AF;
        }

        strong{
            color: #FFF;
        }

        .githublogo{
            width: 3vw;
            height: 5vh;
            position: absolute;
            margin-left: 8vw;
            margin-top: -4vw;
            &:hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            transition: 0.3s;
            @media (min-width: 950px) and (max-width: 1115px){margin-left: 5vw}  
        }
    }
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
        @media (min-width: 757px) and (max-width: 845px){font-size: 45px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 45px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 45px}
        @media (min-width: 488px) and (max-width: 576px){font-size: 45px}
        @media (max-width: 487px){font-size: 45px}
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
        @media (min-width: 935px) and (max-width: 1023px){width: 8vw}
        @media (min-width: 846px) and (max-width: 934px){width: 8vw}
        @media (min-width: 757px) and (max-width: 845px){width: 9vw}
        @media (min-width: 668px) and (max-width: 756px){width: 9vw}
        @media (min-width: 577px) and (max-width: 667px){width: 9vw}
        @media (min-width: 488px) and (max-width: 576px){width: 11vw}
        @media (max-width: 487px){width: 11vw}
    }

    .mediaqueries{
        width: 6vw;
        height: 14vh;
        margin-top: -1vw;
        @media (min-width: 668px) and (max-width: 756px){width: 9vw}
        @media (min-width: 577px) and (max-width: 667px){width: 9vw}
        @media (min-width: 488px) and (max-width: 576px){width: 11vw}
        @media (max-width: 487px){width: 11vw}
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
        font-size: 25px;
        color: #fff;
        margin-top: 2vw;
        margin-left: 4.7vw;
        text-align: start;
        @media (min-width: 935px) and (max-width: 1023px){font-size: 25px}
        /* @media (min-width: 846px) and (max-width: 934px){font-size: 25px}
        @media (min-width: 757px) and (max-width: 845px){font-size: 25px}
        @media (min-width: 668px) and (max-width: 756px){font-size: 25px}
        @media (min-width: 577px) and (max-width: 667px){font-size: 25px} */
    }

    div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 35px;
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
        @media (min-width: 1024px) and (max-width: 1115px){width: 5vw}
        @media (min-width: 935px) and (max-width: 1023px){width: 5.5vw}
        @media (min-width: 846px) and (max-width: 934px){width: 5.5vw}
        @media (min-width: 757px) and (max-width: 845px){width: 7vw}
        @media (min-width: 668px) and (max-width: 756px){width: 7vw}
        @media (min-width: 577px) and (max-width: 667px){width: 7vw}
        @media (min-width: 488px) and (max-width: 576px){width: 8vw}
        @media (max-width: 487px){width: 8vw}
    }

    p{
        color: white;
        margin-left: 5vw;
        margin-top: -3vw;
        &:hover{
            color: #0F98AF;
            transition: 0.3s;
        }
        @media (min-width: 1024px) and (max-width: 1115px){margin-top: -3vw; margin-left: 6vw}
        @media (min-width: 935px) and (max-width: 1025px){margin-top: -3.3vw; margin-left: 7vw}
        @media (min-width: 846px) and (max-width: 934px){margin-top: -3.7vw; margin-left: 7vw}
        @media (min-width: 757px) and (max-width: 845px){margin-top: -3.9vw; margin-left: 9vw} 
        @media (min-width: 668px) and (max-width: 756px){margin-top: -4vw; margin-left: 9vw}
        @media (min-width: 577px) and (max-width: 667px){margin-top: -4vw; margin-left: 9vw}
        @media (min-width: 488px) and (max-width: 576px){margin-top: -7vw; margin-left: 12vw; font-size: 13px}
        @media (max-width: 487px){margin-top: -6vw; margin-left: 11vw; font-size: 13px}
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



