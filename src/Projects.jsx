import { useFetchProjects } from './FetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className='projects'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, url, title, img } = project;
          return (
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='project'
              key={id}
            >
              <img src={img} className='img' alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
