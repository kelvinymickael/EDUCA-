import { Link } from "react-router-dom";

import HeaderLogo from "../../assets/logo.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="contentHeader">
        <div className="HeaderLogo">
          <img src={HeaderLogo} alt="" />
        </div>
        <div className="HeaderNavigation">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/cursos">Cursos</Link>
              </li>
              <li>
                <Link to="/instrutores">Instrutores</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/login" id="active">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
