import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header"
import { api } from "../../services/api";
import { SignupStyle } from "./style"
import { toast } from 'react-toastify';

interface IFormData {
    name: string;
    email: string;
    password: string;
}

export const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormData>();
    
      const navigate = useNavigate()

      
  const signup  = async (infos: IFormData) => {
      try {
        const { data } = await api.post("/users", {
            name: infos.name,
              email: infos.email,
              password: infos.password
          })
          navigate('/login')
          toast.success("Conta cadastrada com sucesso")
      } catch (error) {
        console.log(error)
        toast.error("Erro ao realizar o cadastro, confirme que todos os campos foram preenchidos corretamente")
      }
  }
      
    return (
        <SignupStyle>
            <Header buttons={[{text: 'Login', path: "/login"}]} />
            <main>
        <div className="signup">
          <h2>Bem vind@ ao ClientBooks</h2>
          <h3>Registre-se</h3>
          <form onSubmit={handleSubmit(signup)}>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              id="name"
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            ></input>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              placeholder="Digite sua senha"
            ></input>
            <button>Registrar</button>
          </form>
          <p>Já possui uma conta?</p>
          <Link className="loginLink" to={"/login"}>
            Iniciar sessão
          </Link>
        </div>
      </main>
        </SignupStyle>
    )
}