import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



export default function Cadastro(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className="login_container">
      <section className="login_forms_container">
        {/* LogoEzPass <KomuLogo /> */}
        <form className="login_forms" action="">
          
          <Link to={"/home"}>
            
          </Link>
          <div>
            <p className="texto_primeiro_acesso">Primeiro Acesso?</p>
            <Link className={"link_login"} to="/cadastro">
              Clique Aqui
            </Link>
          </div>
        </form>
      </section>
      <section className="background_login">
        
        
      </section>
    </div>
  );
}