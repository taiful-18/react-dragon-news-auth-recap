import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { providerContext } from "../../provider/Provider";


const Register = () => {
    const { createUsers } = useContext(providerContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = (form.get('email'))
        const password = (form.get('password'))
        // console.log(email, password)
        createUsers(email, password)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h3 className="text-4xl  text-center font-semibold">Register your account</h3>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="PhotoUrl" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                <h2 className="text-center mb-10">Already have an account <Link className="text-blue-600" to='/login'>Login</Link></h2>
            </div>
        </div>
    );
};

export default Register;