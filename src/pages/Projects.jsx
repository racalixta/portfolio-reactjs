import { Link } from "react-router-dom"
// import { usePath } from "../hooks/usePath";

const Projects = () => {
  // const { isCurrentPage } = usePath();

  return (
    <div className="bg-gray-100 w-full min-h-screen">

      <h1 className="text-3xl">Todos os projetos</h1>

      <Link to="/projects/1" >Projeto 1</Link>
      <Link to="/projects/2" >Projeto 2</Link>
      <Link to="/projects/3" >Projeto 3</Link>

    </div>
  )
}

export default Projects