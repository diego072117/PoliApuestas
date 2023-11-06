import { useSelector } from "react-redux";
import "./Module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Nav = () => {
  const isAuthenticated = useSelector((state) => state.users.auth.access_token);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <>
      <nav className="container-nav">
        <Link to="/" className="item-nav">
          HOME
        </Link>

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
      </nav>
    </>
  );
};
