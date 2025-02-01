import { useState } from "react";
import { useDispatch } from "react-redux"; // We use dispatch to
import { useLoginMutation } from "@/redux/auth/authApi";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "@/redux/auth/authSlice";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("steve@rogers.com");
  const [password, setPassword] = useState("password456");
  const [login, { data, error, isLoading }] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      const token = response.body.token;
      dispatch(loginSuccess(token));
      navigate("/user/1");
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    console.log("Voici l'erreur :");

    console.log(JSON.stringify(error));
    console.log("---------------");
  }
  return (
    <form onSubmit={handleSubmit} className="Form">
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
