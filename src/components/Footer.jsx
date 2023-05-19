import { Link } from "react-router-dom"

export const Footer = () => {
  const general = "text-slate-600 font-medium hover:text-indigo-600";


  return(
    <footer className="bg-gray-200 w-full p-8">

      <div className="sm:w-full md:w-8/12 md:mx-auto ">


        <div className="flex items-center ">
          <h2 className="text-indigo-600 font-bold text-2xl mb-3 mr-2">Logo</h2>

          <div className="w-full border-t border-indigo-600 flex flex-end">
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 px-8 py-2">
          <div className="flex flex-col">

            <h2 className="text-indigo-600 font-bold text-xl">Menu</h2>

            <a href="/#home" className={general} >Home</a>
            <Link to="/projects" className={general} >Projects</Link>
            <a href="/#about" className={general}>About</a>
            <a href="/#contact" className={general}>Contact</a>

          </div>

          <div className="flex flex-col">

            <h2 className="text-indigo-600 font-bold text-xl">Redes Sociais</h2>

            <a href="/#contact" target="_blank" className={general}>LinkedIn</a>
            <a href="/#contact" target="_blank" className={general}>Github</a>

          </div>
        </div>


      </div>

      

    </footer>
  )
}
