import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="login_container">
        <section className="login_forms_container">
          {/* LogoEzPass <KomuLogo /> */}
          <form className="login_forms" action="">
            
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
    )
    
}