import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true } || '/home');
    }

    return (
        <div className='w-75 mx-auto border border-2 p-3 w-75 mx-auto rounded-2'>
            <form onSubmit={handleCreateUser}>
                <h2 className='text-primary text-center mt-2'>Register</h2>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <p className='text-danger'>{error?.message}</p>
                <input className="btn btn-primary btn-block mt-2 mx-auto d-block w-50" type="submit" value="Register" />
                <p className="forgot-password text-right">
                    Already registerd? <Link className='font-italic btn btn-link text-primary pe-auto text-decoration-none' to={'/login'}>Login here</Link>
                </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;