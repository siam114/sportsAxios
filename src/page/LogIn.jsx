import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {  GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const {signInUser, setUser,user} = useContext(AuthContext);
  const [error,setError] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleLogIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email,password)
    .then(result => {
      const user = result.user;
      setUser(user);
      toast.success("Login successful!");
      navigate(location?.state ? location.state : '/')
    })
    .catch(err=>{
      setError({...error,login:err.message})
      toast.error("Login failed! Please check your credentials.");
    })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Google sign-in failed! Please try again.");
      });
  };

  useEffect(() => {
    if (!!user && typeof window != "undefined") {
      window.location.replace("/");
    }
  }, [user]);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn("Please provide a valid email address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent! Please check your inbox.");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(`Failed to send password reset email: ${errorMessage}`);
        });
    }
  };

    return (
        <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
           <ToastContainer position="top-right" />
           <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input ref={emailRef} type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {
              error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )
            }
            <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn dark:text-[#273248] dark:bg-slate-300 bg-[#273248] text-white hover:text-black">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Do not Have an Account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link> 
        </p>

        <div className="divider">OR</div>
        <div className="form-control w-10/12 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn border border-black"
            >
              <span className="text-2xl">
                <FcGoogle />{" "}
              </span>{" "}
              Login with Google
            </button>
          </div>
      </div>
    );
};

export default LogIn;