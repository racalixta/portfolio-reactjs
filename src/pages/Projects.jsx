// import { Link } from "react-router-dom"
// import { usePath } from "../hooks/usePath";


import { ProjectCard } from "../components/ProjectCard"
import { mockProjects } from "../core/services/mockProjects"

const Projects = () => {
  console.log(mockProjects)

  // mockProjects.map((item) => {
  //   console.log('id ' + item.icons)
  // })

  return (
    <div id="projects" className="bg-zinc-700 w-full min-h-screen">

      <div className="p-8 sm:w-full md:w-10/12 md:mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProjects.map((item) => (

            <ProjectCard key={item.id} id={item.id} image={item.image[1]} title={item.title} icons={item.icons} />
            
          ))}

        </div>


      </div>



    </div>

  )
}

export default Projects