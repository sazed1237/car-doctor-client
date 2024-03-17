import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {


    const { googleSingIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result)

                // navigate to the footprint
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <p><small>Or Sing In with</small></p>
            <div className='flex justify-center'>
                <FaFacebook className='bg-[#F5F5F8] rounded-[50%] text-[#FF3811] h-9 w-9 mx-2 p-2'></FaFacebook>
                <FaLinkedin className='bg-[#F5F5F8] rounded-[50%] text-[#FF3811] h-9 w-9 mx-2 p-2'></FaLinkedin>
                <FaGoogle onClick={handleGoogleSingIn} className='bg-[#F5F5F8] rounded-[50%] text-[#FF3811] h-9 w-9 mx-2 p-2'></FaGoogle>
            </div>

        </div>
    );
};

export default SocialLogin;