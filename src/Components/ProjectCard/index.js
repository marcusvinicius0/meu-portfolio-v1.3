// import GitHubLink from '../GithubLink';

import './style.css';

export default function ProjectCard({href}, {src}) {
    return (
        <div className="container-project">
            <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt="projeto"/>
            </a>
            {/* <GitHubLink /> */}
        </div>
        
      
    )
}