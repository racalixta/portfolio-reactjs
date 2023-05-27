import meImg from '../assets/img/me-img.jpg'
import { mockTechIcons } from '../core/services/mockTechIcons'

export const About = () => {


  return (
    <div id="about" className="bg-zinc-800 w-full h-auto px-4 sm:px-8 py-8">

      <div className="sm:w-full lg:w-8/12 md:mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Sobre</h1>
      </div>

      <div className="bg-zinc-700 sm:w-full lg:w-8/12 h-full flex flex-col md:flex-row items-start mx-auto rounded-md shadow-md px-4 py-4 md:space-x-4 ">

        <aside className="bg-zinc-500 p-2 rounded-md flex flex-row space-x-4 md:space-x-0 md:space-y-4 md:flex-col justify-around px-4 md:justify-center w-full items-stretch md:w-48 h-auto">

          <div className="w-1/2 md:w-full space-y-8 md:space-y-2">
            <img className='flex h-36 w-36 rounded-full justify-center items-center border-2 border-orange-500 mx-auto mb-2' src={meImg} alt="Rafael Calixta" />

            <div className="mx-auto text-zinc-100 text-justify mb-4 space-y-2">
              <p><span className="font-bold">Local:</span> Brasília, Brasil.</p>

              
              <p>
                <a className="text-zinc-100 hover:text-indigo-300" href="https://www.linkedin.com/in/rafael-calixta-047344234/" rel="noreferrer" >
                  <i className="bi bi-linkedin mr-1 text-xl"></i>
                  <span className="font-bold ">Linkedin</span>
                </a>
              </p>  

              <p>
                <a className="text-zinc-100 hover:text-indigo-300" href="https://github.com/racalixta" rel="noreferrer" >
                  <i className="bi bi-github text-xl mr-1"></i> 
                  <span className="font-bold">Github</span>   
                </a>
              </p>

              

            </div>

          </div>

          <div className='w-1/2 md:w-full'>
            <h2 className="text-xl font-bold text-orange-500">Skills</h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1">
              <img className="h-10 w-10" src={mockTechIcons.html} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.css} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.javascript} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.react} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.tailwind} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.typescript} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.bootstrap} alt="" />
              <img className="h-10 w-10 bg-zinc-100 rounded-lg px-0.5" src={mockTechIcons.node} alt="" />
              <img className="h-10 w-10 bg-zinc-100 rounded-full" src={mockTechIcons.github} alt="" />
              <img className="h-10 w-10 bg-zinc-100 rounded-full" src={mockTechIcons.git} alt="" />
              <img className="h-10 w-10" src={mockTechIcons.angular} alt="" />

            </div>

          </div>


        </aside>

        <section className="text-justify text-zinc-100 font-medium leading-8 w-full md:w-8/12 lg:w-10/12 p-2">
          <p> <span className='mr-6'></span>
            Meu nome é Rafael Calixta, tenho 23 anos e sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (Unip). Nesse momento estou cursando pós-graduação em Segurança da Informação e estou disposto a aceitar trabalhos como freelancer em desenvolvimento web, mas o meu desejo é fazer parte de uma empresa que proporcione crescimento profissional, possibilitando uma carreira que me desafie e recompense, ao mesmo tempo que permita utilizar e ampliar meus conhecimentos e habilidades adquiridos.
          </p>

          <p> <span className='mr-6'></span>
            Comecei a cursar a faculdade no primeiro semestre de 2020, à época, por estar morando em uma cidade do interior, Tabatinga-AM, a melhor opção de estudo era o modo de ensino à distância. Porém, por ser um cidade isolada e pequena, as condições de internet eram precárias, o que foi um grande desafio e uma lição de perseverança e superação, assim, ao final de 2021, me formei e voltei a morar em Brasília-DF, onde resido atualmente.
          </p>

          <p> <span className='mr-6'></span>
            Com os conhecimentos que possuo, ofereço soluções em serviços digitais na área de Desenvolvimento Web. Sou uma pessoa que admira a simplicidade para resolver problemas grandes/complexos e entendo que a disciplina me faz alcançar metas de longo prazo.
          </p>

        </section>

      </div>

    </div>
  )

}
