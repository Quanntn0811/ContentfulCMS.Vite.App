import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map((project) => {
          return (
            <a
              href={project.url}
              key={project.id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={project.img} alt={project.title} className="img" />
              <h5>{project.title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
