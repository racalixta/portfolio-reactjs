
export const ProjectCard = ({ id, image, title, icons }) => {
  function randomNumber() {
    let num = Math.random() * 100;
    return num;

  }

  return (
    <a href={`/projects/${id}`} className="w-full h-auto group">
      
      
      <div className="bg-cover bg-center h-72 md:h-36 lg:h-48 w-auto rounded-t-lg flex items-center justify-center text-center px-6" style={{
            backgroundImage: `url(${image})`,
          }}>    
        
      </div>


      {/* text area  */}
      <div className="bg-zinc-200 text-zinc-800 w-auto h-12 px-2 flex justify-between items-center group-hover:bg-indigo-400 group-hover:text-white border-t border-zinc-400">

        <h2 className="text-lg font-semibold">{title}</h2>
        
        {/* tech icons  */}
        <div className="flex gap-2 w-fit">
          {icons.map((item) => (
            <img className="h-7 w-7 sm:h-10 sm:w-10 md:h-7 md:w-7" src={item} alt="" key={`${id} ${randomNumber()}`} />
          ))}

        </div>

      </div>

    </a>
  )
}
