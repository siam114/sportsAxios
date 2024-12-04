import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#273248] text-white hover:text-black">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Do not Have an Account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
          
        </p>
      </div>
    );
};

export default LogIn;