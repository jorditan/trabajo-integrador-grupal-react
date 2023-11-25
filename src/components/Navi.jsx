import {useState} from 'react'

// iconos
import {SiConsul} from "react-icons/si"
import {BsPhoneVibrate} from "react-icons/bs"
import {AiOutlineGlobal} from "react-icons/ai"
import {CgMenuGridO} from "react-icons/cg"
import { FaSignInAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";



//Imagen 
import logo from "../assets/img/logo-removebg.png"


function Navi() {

     const [activado, setActivado] = useState('navBarMenu');
     const mostrarNav = () => {
          setActivado('navBarMenu mostrarNavBar');
     }
     const ocultarNav = () => {
          setActivado('navBarMenu');
     }

     return (
          <>
               <nav className="navBar flex"> 
                    <div className="navBarOne flex">
                         <div>
                              <SiConsul className="icon"/>
                         </div>

                         <div className="none flex extras">
                              <li className="flex"> <BsPhoneVibrate className="icon"/> Ayuda</li>
                              <li className="flex"> <AiOutlineGlobal className="icon"/> Lenguajes</li>
                         </div>

                              
                         <div className="atb flex">
                              <span className="flex"> <FaSignInAlt />
                              Inicia sesión</span>
     
                              <span className='flex'><MdCancel />
                              Salir</span>
                         </div>
                    </div>
                    <div className="navBarTwo flex">
                         <div className="logoDiv">
                              <img src={logo} className="logo" />
                         </div>

                         <div className={activado}>
                              <ul className="menu">
                                   <li  onClick={ocultarNav} className="listItem">Home</li>
                                   <li onClick={ocultarNav}  className="listItem">Sobre nosotros</li>
                                   <li onClick={ocultarNav}  className="listItem">Ofertas</li>
                                   <li onClick={ocultarNav}  className="listItem">Destinos</li>
                              </ul>

                              <button onClick={ocultarNav}  className="btn flex btnOne">
                                   Contactanos
                              </button>
                         </div>

                         <button className="btn flex btnTwo">
                                   Contactanos
                         </button>

                         <div onClick={mostrarNav} className="toggleIcon">
                                   <CgMenuGridO className="icon" />
                              </div>
                    </div>
               </nav>
          </>
     );
}

export default Navi;