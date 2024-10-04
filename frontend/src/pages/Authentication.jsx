import PropType from 'prop-types'
import { useState } from 'react';

const Authentication = ({pageType}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
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

                    <form className='mt-10 max-w-64 flex flex-col gap-2'>
                        <input 
                            name="email" 
                            type='email' 
                            placeholder='Enter email' 
                            className='py-2 border border-gray-600 rounded px-3'
                            onChange={handleEmailChange}
                            value={email}
                        />

                        <input 
                            name="password" 
                            type='password' 
                            placeholder='Enter password' 
                            className='py-2 border border-gray-600 rounded px-3'
                            onChange={handlePasswordChange}
                            value={password}
                        />
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