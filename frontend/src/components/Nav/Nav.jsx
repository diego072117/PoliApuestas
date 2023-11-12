import { useValidators } from "../../hooks/useValidations";
import { UseUserActions } from "../../hooks/UseUserActions";
import { Link } from "react-router-dom";
import "./Module.scss";

export const Nav = () => {
  const { isUserAuthenticated, isUserRolOrganizador } = useValidators();
  const { LogoutUser } = UseUserActions();
  return (
    <nav className="container-nav">
      <Link to="/" className="item-nav">
        HOME
      </Link>
      {isUserAuthenticated() ? (
        <>
          <Link to="/perfil" className="item-nav">
            PERFIL
          </Link>
          <Link to="/dashboard" className="item-nav">
            DASHBOARD
          </Link>
          {isUserRolOrganizador() && (
            <Link to="/rifa" className="item-nav">
              CREAR RIFA
            </Link>
          )}
          <button className="item-nav" onClick={LogoutUser}>
            <i className="fa fa-sign-out" aria-hidden="true"></i> LOGOUT
          </button>
        </>
      ) : (
        <div className="user-options">
          <Link to="/register" className="item-nav">
            <i className="fa fa-user" aria-hidden="true"></i> REGISTER
          </Link>
          <Link to="/login" className="item-nav">
            <i className="fa fa-user" aria-hidden="true"></i> LOGIN
          </Link>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      )}
    </nav>
  );
};
