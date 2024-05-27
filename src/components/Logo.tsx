import LogoLogin from "../assets/LogoColorido.png"
import "./Styles/Logo.css"

export default function Logo(){
    return(
        <div className="logo">
            <div className="imglogo">
                <img src={LogoLogin} alt="" />
            </div>
            <div className="textologo">
                <h1>EzPass</h1>
            </div>
        </div>
    )
}