import React, { use, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/Authprovider";

const Login = () => {
  const { signInUser, loading, forgetPassword } = use(AuthContext);
  const [password, setPassword] = useState(false);
  const [erorSms, seterorSms] = useState("");
  const [sucessful, setsucsecful] = useState(false);

  const navigate = useNavigate();

  const passwordShowHandler = () => {
    setPassword(!password);
  };

  const emailRef = useRef('')

  const forgetHandler = (e) => {
       e.preventDefault()
    const email = emailRef.current.value
    console.log('forget password',email)
 
    forgetPassword(email)
    .then((result)=>{
      console.log(result)
      alert('Password reset email sent! Check your inbox.')
    })
  };

  const longinHandler = (e) => {
    e.preventDefault();
    // console.log('login was cliked')
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        setsucsecful(true);
        navigate("/");
      })
      .catch((eror) => {
        console.log(eror);
        seterorSms(eror.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-3xl">Login Now</h2>

            <div className="flex items-center justify-center text-3xl m-2">
              <FaRegUser />
            </div>

            <form
              onSubmit={longinHandler}
            >
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  ref={emailRef}
                />

                <label className="label ">Password</label>
                <div className="relative">
                  <input
                    type={password ? "text" : "password"}
                    name="password"
                    className="input "
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-5 text-2xl"
                    onClick={passwordShowHandler}
                  >
                    {password ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>

                <div>
                  <a onClick={forgetHandler} className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn bg-gray-500 text-white font-bold mt-4"
                >
                  {loading ? <loading></loading> : "Login"}
                </button>
                <div className="mt-5">
                  <h2 className="font-bold">
                    Don't have an account?
                    <NavLink
                      className={"text-blue-500 font-bold ml-2"}
                      to={"/authLayouts/registration"}
                    >
                      Sign Up
                    </NavLink>
                  </h2>
                </div>
                {sucessful && (
                  <h1 className="text-green-500">
                    Your account has been login successfully.
                  </h1>
                )}
                {erorSms && <h1 className="text-red-500">{erorSms}</h1>}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
