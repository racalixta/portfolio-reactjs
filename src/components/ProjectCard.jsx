export const ProjectCard = () => {
  return (
    <a href="/projects/1" className="w-full h-auto group">
      
      {/* Image */}
      <div className="bg-indigo-500 w-auto sm:h-36 md:h-48 rounded-t-lg group-hover:bg-white/60 flex items-center justify-center">
        <h2 className="invisible text-2xl font-semibold group-hover:visible">Title Project</h2>
      </div>

      {/* text area  */}
      <div className="bg-zinc-200 text-zinc-800 w-auto h-12 px-2 flex justify-between items-center group-hover:bg-indigo-300">

        <h2 className="text-lg font-semibold">Title Project</h2>
        
        {/* tech icons  */}
        <div className="flex gap-3">
          <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
          <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
          <div className="h-5 w-5 bg-indigo-500 rounded-full"></div>

        </div>

      </div>

    </a>
  )
}
