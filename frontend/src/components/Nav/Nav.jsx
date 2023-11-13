import { useValidators } from "../../hooks/useValidations";
import { UseUserActions } from "../../hooks/UseUserActions";
import { Link } from "react-router-dom";
import "./Module.scss";
import { useSelector } from "react-redux";

export const Nav = () => {
  const { isUserAuthenticated, isUserRolOrganizador } = useValidators();
  const { LogoutUser } = UseUserActions();
  const user = useSelector((state) => state.users.auth.user);
  return (
    <nav className="container-nav">
      <div className="user-info-nav">
        <div className="options-nav">
          <i className="fa-brands fa-github logo-nav"></i>
          {!isUserAuthenticated() && (
            <>
              <Link to="/" className="item-nav">
                Home
              </Link>
              <Link to="/" className="item-nav">
                Services
              </Link>
              <Link to="/" className="item-nav">
                About us
              </Link>
              <Link to="/" className="item-nav">
                Contact
              </Link>
            </>
          )}
          {isUserAuthenticated() && (
            <>
              <p className="user-nav">{user.email}</p>
            </>
          )}
        </div>
        <div className="auth-nav">
          {!isUserAuthenticated() && (
            <>
              <Link to="/register" className="item-nav sing-in">
                Sign in
              </Link>
              <Link to="/login" className="item-nav sing-up">
                Sign up
              </Link>
            </>
          )}
          {isUserAuthenticated() && (
            <button className="sing-out item-nav" onClick={LogoutUser}>
              Sign out
            </button>
          )}
        </div>
      </div>
      {isUserAuthenticated() && (
        <div className="autn-opcions">
          <Link to="/dashboard" className="item-nav color-one">
            <i className="fa-brands fa-twitch"></i> Dasboard
          </Link>
          <Link to="#" className="item-nav color-one">
            <i className="fa-brands fa-twitch"></i> Historial
          </Link>
          {isUserRolOrganizador() && (
            <Link to="/rifa" className="item-nav color-one">
              <i className="fa-brands fa-twitch"></i> Crear rifas
            </Link>
          )}
          <Link to="/perfil" className="item-nav color-one">
            <i className="fa-brands fa-twitch"></i> Perfil
          </Link>
        </div>
      )}
    </nav>
  );
};
