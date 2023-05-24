import bannerBg from "../assets/img/bannerBg.jpg"

export const ProjectCard = ({ id, image, title, icons}) => {
  console.log(image)

  return (
    <a href="/projects/1" className="w-full h-auto group">
      
      <div className="bg-cover bg-center sm:h-36 md:h-48 w-full rounded-t-lg flex items-center justify-center" style={{
            backgroundImage: `url(${bannerBg})`,
          }}>
        <h2 className="invisible text-zinc-200 text-2xl font-semibold group-hover:visible">{title}</h2>
      </div>



      {/* text area  */}
      <div className="bg-zinc-200 text-zinc-800 w-auto h-12 px-2 flex justify-between items-center group-hover:bg-indigo-300">

        <h2 className="text-lg font-semibold">{title}</h2>
        
        {/* tech icons  */}
        <div className="flex justify-between gap-3">
          {icons.map((item) => (
            <img className="h-7 w-7" src={item} alt="" key={id} />
          ))}

          {/* <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
          <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
          <div className="h-5 w-5 bg-indigo-500 rounded-full"></div> */}

        </div>

      </div>

    </a>
  )
}
