import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/auth/authApi";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "@/redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [email, setEmail] = useState("steve@rogers.com");
  const [password, setPassword] = useState("password456");

  const [login, { data, error, isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap(); // To have necessary data only
      const token = response.body.token;
      dispatch(loginSuccess(token));
      navigate(`/user/profile`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <FontAwesomeIcon icon={faUserCircle} />
      <h2>Sign In</h2>
      <label htmlFor="email">
        Email
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          name="email"
          value={email}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          value={password}
        />
      </label>
      <label className="remember" htmlFor="remember">
        <input type="checkbox" name="remember" id="remember" />
        Remember me
      </label>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : "Sign In"}
      </button>

      {error && <p>{error.data.message}</p>}
    </form>
  );
}

export default Form;
