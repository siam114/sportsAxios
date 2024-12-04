import { Link } from "react-router-dom";

const Register = () => {
    const handleSignUp = (e) =>{
        e.preventDefault();
        console.log('form sign up')
    }
    return (
        <div className="card bg-base-100 py-10 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#273248] text-white hover:text-black">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
        Already Have an Account ?{" "}
          <Link to="/auth/login" className="text-red-500">
          Login
          </Link>
          
        </p>
      </div>
    );
};

export default Register;