import { useParams } from "react-router-dom"
import bannerBg from "../assets/img/bannerBg.jpg"

const ProjectDetails = () => {
  const { id } = useParams()

  return (
    <div id="projects" className="bg-zinc-700 w-full min-h-screen border-b border-zinc-600">

      <div className="p-8 sm:w-full md:w-8/12 md:mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">Detalhes do Projeto {id}</h1>

        <div className="bg-zinc-500 w-full h-auto rounded-t-lg">

          <div className="">
            {/* Image */}
            <img src={bannerBg} className="w-full h-auto rounded-t-lg flex items-center justify-center" />
   

            {/* text area  */}
            <div className="bg-zinc-200 text-zinc-800 w-auto h-auto px-3 py-2 space-y-2">

              <div className="w-full flex justify-between items-center border-b border-zinc-600">
                <h2 className="text-2xl font-semibold mb-1">Title Project</h2>

                {/* tech icons  */}
                <div className="flex gap-3">
                  <div className="h-5 w-5 bg-amber-500 rounded-full"></div>
                  <div className="h-5 w-5 bg-blue-500 rounded-full"></div>
                  <div className="h-5 w-5 bg-indigo-500 rounded-full"></div>
                </div>

              </div>

              <div className="font-semibold text-lg text-justify">
                <p> <span className="mr-4"></span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque nisi enim quam quia soluta amet, fugit ipsa totam, et ea saepe animi. Eius asperiores voluptas ab accusantium officia voluptate!
                </p>
                <p> <span className="mr-4"></span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe autem inventore veritatis eveniet? Nobis perspiciatis, facere quod odit necessitatibus, illum corrupti qui labore aut aliquid unde libero vitae odio?
                </p>
              </div>

            </div>




          </div>

        </div>


      </div>



    </div>
  )
}

export default ProjectDetails