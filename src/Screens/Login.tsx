import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Styles/Login.css";
import ButtonUsage from "../components/Button";
import ButtonText from "../components/ButtonText";
import Input from "../components/Input";
import BgLogin from "../assets/ImagemBgLogin.svg"
import Logo from "../components/Logo"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSumit = () => {
    navigate("/cadastro");
  };

  return (
    <div className="login_container">
      <section className="login_forms_container">
        <Logo/>
        <form className="login_forms" action="">
          <Input InputText={"Email"} type={"Email"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
  
          <Input InputText={"Senha"} type={"Password"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          <Link to={"/home"}>
            <ButtonUsage nomeButton={"Entrar"}/>
          </Link>
          <div>
            <p className="texto_primeiro_acesso">Primeiro Acesso?</p>
            <Link className={"link_login"} to="/cadastro">
              <ButtonText nomeButtonText={"Clique Aqui"} />
            </Link>
          </div>
        </form>
      </section>
      <section className="background_login">
        <img src={BgLogin} alt="" />
        
      </section>
    </div>
  );
}