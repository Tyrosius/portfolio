export default function ProjectsCard ({project,text}) {
    
return(
    <>
    <h3>{project.name[text.language]}</h3>
    <img src="" alt={text[text.language].image+project.name[text.language]} />
    <h4>{text[text.language].description}</h4>
    <p>{project.description[text.language]}</p>
    <h4>{text[text.language].techStack}</h4>
    <p>{project.techStack.join(", ")}</p>
    <h4>{text[text.language].projectLinks}</h4>
    {project.gitHubFrontend && <>
    <p>{text[text.language].gitHubFrontend}</p>
    <a href={project.gitHubFrontend}>{project.gitHubFrontend}</a>
    </>}
    </>
)
}