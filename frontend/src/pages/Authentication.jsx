import PropType from 'prop-types'
import { useState } from 'react';
import { validateEmail, validatePassword } from '../utilities/validations';
import { Link } from 'react-router-dom';
import { registerApi } from '../apis/authentication';

const Authentication = ({pageType}) =>{
    const initialErrorsState = {
        email: '',
        password: '',
        api: ''
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialErrorsState);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let newErrors = {};
        if(!validateEmail(email)){
            newErrors = {
                ...newErrors,
                email: "Invalid Email"
            };
        }
        if(!validatePassword(password)){
            newErrors = {
                ...newErrors,
                password: "Password should be at least 6 characters long."
            };
        }
        setErrors(newErrors);
        // API CALLS
        if(pageType === PageType.LOGIN){
        } else{
            const [result, error] = await registerApi({
                user:{
                    email: email,
                    password: password
                }
            })
            console.log("result:::", result);
            console.log("error:::", error);
        }
    }

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                    <h3 className="text-xl font-bold">
                    {
                        (pageType === PageType.LOGIN) ? 'Login' : 'Sign Up'
                    }
                    </h3>
                    {
                        (pageType === PageType.LOGIN) ?
                            <p>Not a user? 
                                <Link to="/register" className='ms-2 underline'>
                                    Register
                                </Link>
                            </p>
                            :
                            <p>Already register?
                                <Link to="/login" className='ms-2 underline'>
                                    Login
                                </Link>
                            </p>
                    }
                    <form onSubmit={handleSubmit} className='mt-10 max-w-96 flex flex-col gap-6'>
                        <div>
                            <input 
                                name="email" 
                                type='email' 
                                placeholder='Enter email' 
                                className='py-2 w-full border border-gray-600 rounded px-3'
                                onChange={handleEmailChange}
                                value={email}
                            />
                            { errors.email && <p className='text-sm text-red-500 text-medium'>{errors.email}</p> }
                        </div>

                        <div>
                            <input 
                                name="password" 
                                type='password' 
                                placeholder='Enter password' 
                                className='py-2 w-full border border-gray-600 rounded px-3'
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            { errors.password && <p className='text-sm text-red-500 text-medium'>{errors.password}</p> }
                        </div>
                        <button type='submit' className='bg-indigo-500 rounded px-3 py-2 hover:bg-indigo-600 text-white'>
                            {(pageType === PageType.LOGIN) ? 'Login' : 'Sign Up'} 
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export const PageType = Object.freeze({
    LOGIN : 0,
    REGISTER : 1 
})

Authentication.PropType = {
    pageType: PropType.number.isRequired
}

export default Authentication;