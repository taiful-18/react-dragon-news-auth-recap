import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { providerContext } from "../../provider/Provider";


const Login = () => {

    const { login,setUser } = useContext(providerContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = (form.get('email'))
        const password = (form.get('password'))
        login(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h3 className="text-4xl  text-center font-semibold">Login your account</h3>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h2 className="text-center">Do not have an account <Link className="text-pink-600" to='/register'>Register</Link></h2>
            </div>
        </div>
    );
};

export default Login;