import { Link } from "react-router-dom"

export const Footer = () => {
  const general = "text-zinc-100 font-medium hover:text-indigo-400";


  return(
    <footer className="bg-zinc-700 w-full p-8 border-t border-zinc-600">
 
      <div className="sm:w-full md:w-8/12 md:mx-auto ">


        <div className="flex items-center space-x-4">
          <a className="text-5xl font-bold text-orange-500 hover:text-indigo-400" href="/#home"  rel="noreferrer" >
            <i className="bi bi-snow2" id="snow-logo"></i>     
          </a>

          <div className="w-full border-t border-orange-500 flex flex-end">
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 px-8 py-2 space-x-4">
          <div className="flex flex-col border-r border-zinc-500 space-y-2">

            <h2 className="text-orange-500 font-bold text-xl">Menu</h2>

            <a href="/#home" className={general} >Página Inicial</a>
            <Link to="/projects" className={general} >Projetos</Link>
            <a href="/#about" className={general}>Sobre</a>
            <a href="/#contact" className={general}>Contato</a>

          </div>

          <div className="flex flex-col space-y-2">

            <h2 className="text-orange-500 font-bold text-xl">Redes Sociais</h2>

            <a href="https://www.linkedin.com/in/rafael-calixta-047344234/" target="_blank" rel="noreferrer" className={general}>
              <i className="bi bi-linkedin mr-1 text-xl"></i>
              <span className="font-bold ">Linkedin</span>
            </a>

            <a href="https://github.com/racalixta" target="_blank" rel="noreferrer" className={general}>
              <i className="bi bi-github text-xl mr-1"></i> 
              <span className="font-bold">Github</span> 
            </a>

          </div>
        </div>


      </div>

      

    </footer>
  )
}
