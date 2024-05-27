import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Styles/Cadastro.css";
import ButtonUsage from "../components/Button";
import Input from "../components/Input";
import BgCadastro from "../assets/ImagemBgCadastro.svg"
import Logo from "../components/Logo"

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className="cadastro_container">
      <section className="cadastro_forms_container">
        <Logo/>
        <form className="cadastro_forms" action="">
          <Input InputText={"Nome"} type={"Text"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}/>
          <Input InputText={"Email"} type={"Email"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
          <Input InputText={"Senha"} type={"Password"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
          <Link to={"/"}>
            <ButtonUsage nomeButton={"Cadastrar"}/>
          </Link>
        </form>
      </section>
      <section className="background_cadastro">
        <img src={BgCadastro} alt="" />
        
      </section>
    </div>
  );
}