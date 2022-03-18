import GhImg from '../../assets/githublogo.png'
import './style.css';

export default function GitHubLink({ href }) {
    return (
        <a href={href}>
            <img src={GhImg} />
        </a>
    )
}