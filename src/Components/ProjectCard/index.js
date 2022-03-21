// import GitHubLink from '../GithubLink';

import './style.css';

export default function ProjectCard({href}, {img}) {
    return (
        <div className="container-project">
            <a href={href} target="_blank" rel="noreferrer">
                <img src={img} alt="projetos"></img>
            </a>
            {/* <GitHubLink /> */}
        </div>


    )
}