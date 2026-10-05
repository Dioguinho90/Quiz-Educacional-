import {useState} from "react"

//guarda o valor digitado no campo de email e senha
function Login() {
  const [email, setEmail] = useState("") 
  const [senha, setSenha] = useState("")

  //guarda a mensagem de erro do formulario
  const [erro, setErro] = useState("")

  //executa quando o usuário clica no botão "Entrar"
  const handleLogin = () => {
    e.preventDefault()

    if(!email || !senha){
    setErro("Preencha e-mail e senha.")
      return
    }

    if(!email.includes("@")){
      setErro("Digite um e-mail válido!")
      return
    }

    if(senha.length < 6){
      setErro("A senha deve ter pelo menos 6 caracteres.")
      return
    }

    setErro("")

    console.log("E-mail:", email)
    console.log("Senha:", senha)
  }

  return (
    <div className="min-h-screen bg-[#08070f] text-white flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <div className="flex flex-col items-center mb-12">

        <div className="w-[72px] h-[72px] rounded-[18px] bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.45)]">
          <span className="text-white text-2xl font-bold">
            icon
          </span>
        </div>

        <h1 className="mt-5 text-[32px] font-bold tracking-tight">
          QuizMaster
        </h1>

        <p className="mt-1 text-[#7d72a8] text-base font-mono">
          plataforma educacional integradora
        </p>

      </div>

      {/* Card de Login */}
      <div className="w-full max-w-[504px] rounded-[18px] border border-[#26243a] bg-[#10101a] px-9 py-10">

        <h2 className="text-[22px] font-bold mb-8">
          Entrar na conta
        </h2>

        <form onSubmit={handleLogin}>

          {/* E-mail */}
          <div className="mb-5">

            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#8176ad] mb-2"
            >
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErro("")
              }}
              placeholder="seu@email.com"
              className="w-full h-[52px] rounded-lg border border-[#24233a] bg-[#171629] px-4 text-white placeholder:text-[#77728f] outline-none transition focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]"
            />

          </div>

          {/* Senha */}
          <div className="mb-5">

            <label
              htmlFor="senha"
              className="block text-sm font-medium text-[#8176ad] mb-2"
            >
              SENHA
            </label>

            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value)
                setErro("")
              }}
              placeholder="••••••••"
              className="w-full h-[52px] rounded-lg border border-[#24233a] bg-[#171629] px-4 text-white placeholder:text-[#77728f] outline-none transition focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]"
            />

          </div>

          {/* Mensagem de erro */}
          {erro && (
            <p className="text-red-400 text-sm mb-4">
              {erro}
            </p>
          )}

          {/* Botão */}
          <button
            type="submit"
            className="w-full h-[50px] rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold shadow-[0_0_25px_rgba(139,92,246,0.3)] transition hover:brightness-110 active:scale-[0.99]"
          >
            Entrar
          </button>

        </form>

        {/* Cadastro */}
        <p className="text-center text-[#8881a5] text-sm mt-8">
          Não tem conta?{" "}
          <button
            type="button"
            className="text-[#a855f7] font-semibold hover:text-[#c084fc] transition"
          >
            Cadastrar-se
          </button>
        </p>

      </div>

    </div>
  )
}

export default Login