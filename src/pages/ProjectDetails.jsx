import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { id } = useParams()

  return (
    <div className="bg-gray-100 w-full h-screen">

      <h1 className="text-3xl">Project Details do Projeto {id}</h1>
    </div>
  )
}

export default ProjectDetails