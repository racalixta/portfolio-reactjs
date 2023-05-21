import { About } from "../components/About"
import { Button } from "../components/Button"
import { Contact } from "../components/Contact"
import bannerBg from "../assets/img/bannerBg.jpg"

const Home = () => {
  return (
    <div className='bg-zinc-700 w-full min-h-screen'>

      <div className="bg-cover bg-center h-full w-full" style={{
            backgroundImage: `url(${bannerBg})`,
          }}>

        <div id="home" className="p-8 h-screen flex flex-col items-center justify-center space-y-3">

          <h1 className="text-4xl font-bold text-orange-500">Hi, Im Rafael</h1>

          <p className="text-2xl text-zinc-100">Web Developer <span className="text-orange-500">|</span> Freelancer</p>

          <div className="sm:w-8/12 md:w-1/3 grid grid-cols-2 gap-3">
            <Button />
            <Button />
          </div>

        </div>


      </div>


      <About />

      <Contact />

    </div>
    
  )
}

export default Home