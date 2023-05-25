import { Link } from "react-router-dom"
import { usePath } from "../hooks/usePath";

const Header = () => {
  const general = "text-zinc-200 font-medium hover:text-indigo-400";
  const current = "text-orange-500 font-bold";

  const { isCurrentPage } = usePath();

  return (
    <div className="bg-zinc-800 px-8 py-4 w-full h-16 flex items-center justify-between">

      {/* <p className="text-2xl font-bold text-orange-500">Logo</p> */}
      <a className="text-4xl font-bold text-orange-500 hover:text-indigo-400" href="/#home" rel="noreferrer" >
        <i className="bi bi-snow2" id="snow-logo"></i>     
      </a>

      <nav className="flex text-lg gap-6 items-center">
        <Link to="/" className={isCurrentPage('/') ? current : general}>Página Inicial</Link>
        <Link to="/projects" className={isCurrentPage('/projects') ? current : general}>Projetos</Link>
        <a href="/#about" className={isCurrentPage('/about') ? current : general}>Sobre</a>
        <a href="/#contact" className={isCurrentPage('/contact') ? current : general}>Contato</a>
      </nav>
    </div>
  )
}

export default Header