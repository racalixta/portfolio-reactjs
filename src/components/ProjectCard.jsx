
export const ProjectCard = ({ id, image, title, icons }) => {
  let pav = `/projects/${id}`

  return (
    <a href={pav} className="w-full h-auto group">
      
      
      <div className="bg-cover bg-center h-72 md:h-36 lg:h-48 w-auto rounded-t-lg flex items-center justify-center text-center px-6" style={{
            backgroundImage: `url(${image})`,
          }}>    

        {/* <h2 className="invisible bg-indigo-400 px-3 py-2 text-white text-3xl rounded-md font-medium group-hover:visible">{title}</h2> */}
        
      </div>


      {/* text area  */}
      <div className="bg-zinc-200 text-zinc-800 w-auto h-12 px-2 flex justify-between items-center group-hover:bg-indigo-400 group-hover:text-white">

        <h2 className="text-lg font-semibold">{title}</h2>
        
        {/* tech icons  */}
        <div className="flex justify-between gap-3">
          {icons.map((item) => (
            <img className="h-7 w-7" src={item} alt="" key={id} />
          ))}

        </div>

      </div>

    </a>
  )
}
