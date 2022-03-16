import './style.css';
import Githublogo from '../../assets/githublogo.png';

export default function GithubLink(href) {
    return (
        <div>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={Githublogo} alt="github"></img>
            </a>
        </div>
    )
} 


