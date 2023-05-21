// import { Link } from "react-router-dom"
// import { usePath } from "../hooks/usePath";

import { ProjectCard } from "../components/ProjectCard"

const Projects = () => {
  // const { isCurrentPage } = usePath();

  return (
    <div id="projects" className="bg-zinc-700 w-full min-h-screen border-b border-zinc-600">

      <div className="p-8 sm:w-full md:w-10/12 md:mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">Projetos</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>


      </div>



    </div>
  )
}

export default Projects