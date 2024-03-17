import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Singup = () => {

    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    const handleSingUp = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name, email, password, confirm)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

                // navigate to the footprint
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="mr-4">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full  max-w-sm border-2 border-[#D0D0D0] ">

                    <form onSubmit={handleSingUp} className="card-body">
                        <h1 className="text-4xl font-bold text-[#444] text-center mb-4">Sing Up!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn bg-[#FF3811] text-white' type="submit" value="Sing Up" />
                        </div>

                    </form>
                    <div className='text-center space-y-4 mb-4'>
                        <SocialLogin></SocialLogin>
                        <p><small>Already Have an Account?
                            <Link to={'/login'} className='text-[#FF3811] font-bold pl-2'>Login</Link>
                        </small></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Singup;