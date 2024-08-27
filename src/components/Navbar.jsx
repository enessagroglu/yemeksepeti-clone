import logo from "../assets/Yemeksepeti_logo.svg.png";

export default function Navbar() {



    return(
        <>
        <div className="navbarContainer"> 
            <div className="logo">
                <a href="/www.yemeksepeti.com">
                <img src={logo} alt="Yemeksepeti" />
                </a>
            </div>
            <div className="buttonGroup">
                <button className="loginButton">Giriş Yap</button>
                <button className="signupButton">Kayıt Ol</button>
            </div>
        </div>
        
        </>
    )
}