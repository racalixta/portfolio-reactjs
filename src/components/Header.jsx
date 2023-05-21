import { Link } from "react-router-dom"
import { usePath } from "../hooks/usePath";

const Header = () => {
  const general = "text-zinc-200 font-medium hover:text-indigo-400";
  const current = "text-orange-500 font-bold";

  const { isCurrentPage } = usePath();

  return (
    <div className="bg-zinc-800 px-6 py-4 w-full h-16 flex items-center justify-between">

      <p className="text-2xl font-bold text-orange-500">Logo</p>

      <nav className="flex text-lg gap-6 items-center">
        <Link to="/" className={isCurrentPage('/') ? current : general}>Home</Link>
        <Link to="/projects" className={isCurrentPage('/projects') ? current : general}>Projects</Link>
        <a href="/#about" className={isCurrentPage('/about') ? current : general}>About</a>
        <a href="/#contact" className={isCurrentPage('/contact') ? current : general}>Contact</a>
      </nav>
    </div>
  )
}

export default Header