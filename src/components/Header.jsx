import { Link } from "react-router-dom"
import { usePath } from "../hooks/usePath";
import { useEffect, useState } from "react";
 
const Header = () => {
  const general = "text-zinc-200 font-medium hover:text-indigo-400";
  const current = "text-orange-500 font-bold";
  const { isCurrentPage } = usePath();

  const [menuShow, setMenuShow] = useState(true);
  const [menuHidden, setMenuHidden] = useState(false);

  let largura = window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio;

  useEffect(() => {
    console.log(largura)
  }, [largura])

  function onToggleMenu() {
    setMenuShow(!menuShow);
    setMenuHidden(!menuHidden);
  }

  return (
    <header className="bg-zinc-800 grid grid-cols-2 px-8 py-4 w-full md:h-16 md:flex md:items-center md:justify-between ">

      <a className="text-4xl font-bold text-orange-500 hover:text-indigo-400" href="/#home" rel="noreferrer" >
        <i className="bi bi-snow2" id="snow-logo"></i>     
      </a>

      <nav className="flex flex-col md:hidden items-end">

        <div className="flex items-center gap-6 md:hidden">
          <button className='text-3xl text-zinc-100 cursor-pointer' onClick={onToggleMenu}>

            {
              menuShow ? (
                <i className="bi bi-list"></i>
              ) : (
                <i className="bi bi-x-lg"></i>
              )
            }

          </button>
        </div>

        <ul className={menuHidden ? "text-lg space-y-4 md:space-x-6 md:space-y-0 md:flex md:items-center" : "hidden"}>
        
          <li>
            <button onClick={onToggleMenu}>
              <Link to="/" className={isCurrentPage('/') ? current : general}>Página Inicial</Link>

            </button>
          </li>
        
          <li>
            <button onClick={onToggleMenu}>
              <Link to="/projects" className={isCurrentPage('/projects') ? current : general}>Projetos</Link>
            </button>
          </li>

          <li>
            <button onClick={onToggleMenu}>
              <a href="/#about" className={isCurrentPage('/#about') ? current : general}>Sobre</a>
            </button>
          </li>

          <li>
            <button onClick={onToggleMenu}>
              <a href="/#contact" className={isCurrentPage('/#contact') ? current : general}>Contato</a>
            </button>
          </li>
        </ul>

      </nav>

      <nav className="hidden md:flex items-center">

        <ul className="text-lg space-y-4 md:space-x-6 md:space-y-0 md:flex md:items-center">

          <li> 
              <Link to="/" className={isCurrentPage('/') ? current : general}>Página Inicial</Link>
          </li>

          <li>           
              <Link to="/projects" className={isCurrentPage('/projects') ? current : general}>Projetos</Link>
          </li>

          <li>
              <a href="/#about" className={isCurrentPage('/#about') ? current : general}>Sobre</a>
          </li>

          <li>
              <a href="/#contact" className={isCurrentPage('/#contact') ? current : general}>Contato</a>
          </li>
        </ul>

      </nav>  

    </header>
  )
}

export default Header