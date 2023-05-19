import { About } from "../components/About"
import { Button } from "../components/Button"
import { Contact } from "../components/Contact"

const Home = () => {
  return (
    <div className='bg-gray-100 w-full min-h-screen'>

      <div id="home" className="p-8 h-screen flex flex-col items-center justify-center border border-orange-500">
        <h1 className="text-4xl font-bold text-indigo-600">Hi, Im Rafael</h1>
        <p className="text-xl ">Sample text just for hold</p>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button />
          <Button />
        </div>
      </div>


      <About />

      <Contact />

    </div>
    
  )
}

export default Home