import meImg from '../assets/img/me-img.jpg'
import { TechIcons } from '../assets/TechIcons'

export const About = () => {
  // const meImg = "https://i.imgur.com/RtR9urD.jpg";
  // console.log(TechIcons)
  return (
    <div id="about" className="bg-zinc-800 w-full h-auto p-8">

      <div className="sm:w-full md:w-8/12 md:mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Sobre</h1>
      </div>

      <div className="bg-zinc-700 sm:w-full md:w-8/12 h-auto flex items-start mx-auto px-4 py-4 rounded-md shadow-md">

        <div className="bg-zinc-500 p-2 rounded-md flex flex-col justify-center mr-4 w-48">

          <img className='flex h-36 w-36 rounded-full justify-center items-center border-2 border-orange-500 mx-auto mb-2' src={meImg} alt="" />

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

          <h2 className="text-lg font-bold text-orange-500">Skills</h2>

          <div className="grid grid-cols-3 gap-4 p-1">
            <img className="h-10 w-10" src={TechIcons.html} alt="" />
            <img className="h-10 w-10" src={TechIcons.css} alt="" />
            <img className="h-10 w-10" src={TechIcons.javascript} alt="" />
            <img className="h-10 w-10" src={TechIcons.react} alt="" />
            <img className="h-10 w-10" src={TechIcons.tailwind} alt="" />
            <img className="h-10 w-10" src={TechIcons.typescript} alt="" />
            <img className="h-10 w-10" src={TechIcons.bootstrap} alt="" />
            <img className="h-10 w-10 bg-zinc-100 rounded-lg px-0.5" src={TechIcons.node} alt="" />
            <img className="h-10 w-10 bg-zinc-100 rounded-full" src={TechIcons.github} alt="" />
            <img className="h-10 w-10 bg-zinc-100 rounded-full" src={TechIcons.git} alt="" />
            <img className="h-10 w-10" src={TechIcons.angular} alt="" />

            {/* <img className="h-10 w-10" src={TechIcons.mysql} alt="" />
            <img className="h-10 w-10" src={TechIcons.mongodb} alt="" />
            <img className="h-10 w-10" src={TechIcons.sass} alt="" /> */}


          </div>

        </div>

        <aside className="text-justify text-zinc-100 font-medium leading-8 w-8/12 md:w-10/12 p-2">
          <p> <span className='mr-6'></span>
            Meu nome é Rafael Calixta, tenho 23 anos e sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (Unip). Nesse momento estou cursando pós-graduação em Segurança da Informação e aceitando trabalhos como freelancer em desenvolvimento web, mas desejo fazer parte de uma empresa que proporciona crescimento profissional, proporcionando uma carreira que me desafie e recompense ao mesmo tempo em que permite utilizar meus conhecimentos e habilidades.
          </p>

          <p> <span className='mr-6'></span>
            Comecei a cursar a faculdade no primeiro semestre de 2020, na epóca, por estar morando em uma cidade do interior, Tabatinga-AM, a melhor opção de estudo era o modo de ensino à distância. Porém, por ser um cidade isolada e pequena as condições de internet eram precárias, o que foi um grande desafio e um ensino sobre perseverança à minha pessoa, com esses conhecimentos adquiridos, ao final de 2021, me formei e voltei a morar em Brasília-DF, onde resido atualmente.
          </p>

          <p> <span className='mr-6'></span>
            Com os conhecimentos que
            possuo, ofereço soluções em serviços digitais na área de Desenvolvimento Web.
            Sou uma pessoa que admira a simplicidade para resolver problemas
            grandes/complexos e entendo que a disciplina me faz alcançar metas de longo
            prazo.
          </p>

        </aside>

  

      </div>

    </div>
  )

}
