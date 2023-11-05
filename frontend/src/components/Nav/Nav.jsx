import "./Module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
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
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
};
