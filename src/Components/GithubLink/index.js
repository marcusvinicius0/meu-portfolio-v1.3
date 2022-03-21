import GhImg from '../../assets/githublogo.png'
import './style.css';

export default function GitHubLink({href}) {
    return (
       <div>
            <a href={href} target="_blank" rel="noreferrer">
            <img src={GhImg} alt="github" />
        </a>
       </div>
    )
}