import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './firebase.init';
import SocialLogin from './SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleUserSignIn = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent. Check your mailbox');
        }
        else {
            toast('Please enter your Email address');
        }
    }

    if (user) {
        navigate(from, { replace: true } || '/home')
    }
    return (
        <div className='mx-auto border border-2 p-3 w-75 mx-auto rounded-2'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" id='getEmail' required />
                    <Form.Text>Password must be 6 character length.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <br />
                    <p className='text-danger'>{error?.message}</p>
                </Form.Group>
                <input onClick={handleUserSignIn} className='btn btn-primary mb-2 w-50 mx-auto d-block' type="submit" value="Login" />
                <p>Forget Password? <span onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'> Reset Password</span></p>
                <p>Don't have an Account? <Link to={'/register'} className='text-primary pe-auto text-decoration-none'> Register here</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;