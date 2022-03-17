import './style.css';
import GitHublogo from '../../assets/githublogo.png';

export default function GithubLink({href}) {
    return (
        <div>
            <a href={href} target="_blank" rel="noreferrer">
                <img src={GitHublogo} alt="github" />
            </a>
        </div>
    )
} 


