import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";

function Header() {
  const { token } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <header className="Header">
      <h1 className="logo">
        <NavLink to="/">
          <img src="/img/argentBankLogo.png" alt="Argent Bank Logo" />
        </NavLink>
      </h1>
      <nav>
        <ul>
          {!token ? (
            <li className="sign-in">
              <NavLink to="/sign-in">
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <FontAwesomeIcon icon={faUserCircle} />
                {userData?.firstName}
              </li>
              <li className="sign-in logout">
                <NavLink
                  onClick={() => {
                    dispatch(logout());
                  }}
                  to="/"
                >
                  <FontAwesomeIcon icon={faSignOut} />
                  Log out
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
