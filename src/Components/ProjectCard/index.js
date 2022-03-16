import GithubLink from "../GithubLink";
import './style.css';

export default function ProjectCard(href, src){
    return(
        <div className="container-project">
            <a href={href}><img src={src} alt="project-img"></img></a>
            <GithubLink/>
        </div>
    )
}