import { Button } from "./Button"

export const Contact = () => {

  return (
    <div id="contact" className="bg-zinc-700 w-full h-auto p-8">

      <div className="sm:w-full md:w-8/12 md:mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Contact</h1>
      </div>

      <div className="sm:w/full md:w-8/12 mx-auto space-y-3">

        <div className="grid grid-cols-2 gap-2">
          <input className="h-10 border-2 border-orange-500 rounded-lg px-2 bg-zinc-100" type="text" placeholder="Nome" />

          <input className="h-10  border-2 border-orange-500 rounded-lg px-2 bg-zinc-100" type="text" placeholder="nome@email.com" />

        </div>

        <input className="h-10 w-full border-2 border-orange-500 rounded-lg px-2 mb-2 bg-zinc-100" type="text" placeholder="Assunto" />

        <textarea className="w-full border-2 border-orange-500 rounded-lg px-2 bg-zinc-100" name="mesg" id="mesg" placeholder="Digite sua mensagem" cols="30" rows="10"></textarea>

        
        <Button>
          Enviar
        </Button>

      </div>


    </div>
  )
}
