import {Link} from 'react-router-dom';
import logo from './assets/react.svg';
function Header(){

    return (
        <header className="header">
            <div className="logo-container"> 
            <img className="logo" src={logo} alt="Ai Resume Builder Logo" />
            <h1 className="title"> Ai Resume Builder</h1>
         </div>
           
            <nav>
                <ul className="nav-bar">
                    <Link to="/"> <li> Home </li></Link>
                  
                    <li><a href="#"> Templates </a></li>
                    <li><a href="#"> References </a></li>
                </ul>
            </nav>
            {/* para mag karon ng route sa login */}
       <div className="button-container ">
         <Link to="/register"> 
        <button className="register-btn mr-3">Register</button>
        </Link>
        
        <Link to="/login"> 
        <button className="ml-2 login-btn">Login</button>
        
        </Link>
       </div>
        </header>
    );
}

export default Header