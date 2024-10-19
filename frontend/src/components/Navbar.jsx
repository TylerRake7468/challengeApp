import { useCookies } from "react-cookie";
import { logoutApi } from '../apis/authentication';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [jwt, setJwt] = useState(cookies.jwt)
    const navigate = useNavigate();    

    const handleLogout = async() =>{
        const [response, error] = await logoutApi(cookies.jwt)
        handleResponse([response, error])
        // navigate('login')
    }


    const handleLogin = ()=>{
        navigate('/login')
    }

    const handleResponse = async([response, error]) =>{
        if(error){
            removeCookie('jwt')
        }else{
            removeCookie('jwt')
        }
        setJwt(null)
    }
    return (
        <>
            <div className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-2xl">Code Challenges</p>
                        <div>
                            { jwt ?
                                <button onClick={ handleLogout } className="bg-indigo-500 px-3 py-1.5 rounded my-2">Logout</button>
                                :
                                <button onClick={ handleLogin } className="bg-indigo-500 px-3 py-1.5 rounded my-2">Login</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar