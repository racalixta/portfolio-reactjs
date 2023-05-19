import { Button } from "./Button"

export const Contact = () => {

  return (
    <div id="contact" className="bg-gray-100 w-full h-auto p-8">

      <div className="sm:w-full md:w-8/12 md:mx-auto">
        <h1 className="text-indigo-600 font-bold text-4xl mb-3">Contact</h1>
      </div>

      <div className="sm:w/full md:w-8/12 mx-auto">

        <div className="grid grid-cols-2 gap-2 mb-2">
          <input className="h-8  border-2 border-indigo-600 rounded-lg px-2" type="text" placeholder="Nome" />

          <input className="h-8  border-2 border-indigo-600 rounded-lg px-2" type="text" placeholder="nome@email.com" />

        </div>

        <input className="h-8 w-full border-2 border-indigo-600 rounded-lg px-2 mb-2" type="text" placeholder="Assunto" />

        <textarea className="w-full border-2 border-indigo-600 rounded-lg px-2" name="mesg" id="mesg" placeholder="Digite sua mensagem" cols="30" rows="10"></textarea>

        
        <Button />

      </div>


    </div>
  )
}
