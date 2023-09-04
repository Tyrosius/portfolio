import ProjectsCard from "./ProjectCard"

export default function ProjectsContainer ({text}) {
    const testProjectData=[{
        id:0,
        name:{
            en:"testproject",
            de:"Testprojekt"
        },
        image:"testBildURL",
        gitHubFrontend:"testFrontendGitHub",
        gitHubBackend:"testBackendGitHub",
        webPageFrontend:"testFrontendURL",
        webPageBackend:"testBackendURL",
        techStack:["React","Node.js","Javascript"],
        description:{
            de:"deutsche Beschreibung",
            en:"english description"
        }
        }]
    return(
        <>
        {testProjectData.map(project=>{
            return(
                <ProjectsCard key={project.id} project={project} text={text} />
            )
        })}
        </>
    )
}