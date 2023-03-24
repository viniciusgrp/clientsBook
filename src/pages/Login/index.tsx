import { LoginStyle } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

interface IFormData {
    email: string;
    password: string;
}

export const Login = () => {
    const {
        register,
        handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const navigate = useNavigate()

  const login = async (infos: IFormData) => {
    try {
        const { data } = await api.post("/login", {
            email: infos.email,
            password: infos.password,
          });
          localStorage.setItem("@TOKEN", data.token);
          navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
  };
  
  return (
    <LoginStyle>
      <Header buttons={[{ text: "Registrar", path: "/signup" }]} />
      <main>
        <div className="login">
          <h2>Bem vind@ ao ClientBooks</h2>
          <h3>Iniciar sessão</h3>
          <form onSubmit={handleSubmit(login)}>
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
            <button>Entrar</button>
          </form>
          <p>Ainda não possui uma conta?</p>
          <Link className="registerLink" to={"/signup"}>
            Registre-se
          </Link>
        </div>
      </main>
    </LoginStyle>
  );
};
