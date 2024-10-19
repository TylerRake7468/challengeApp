import { DOMAIN } from "./config"

export const registerApi = async (bodyObject) =>{
    const url = `${DOMAIN}/users`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    }
    try{
        const response = await fetch(url, requestOptions)
        if(response.ok){
            return [response, ''];
        }
        if(response.status === 422){
            return ['', 'User already exists.' ]
        }
        const errorMessage = await response.text();
        return ['', 'Server side error...!'];
    } catch(error){
        return ['', `Server down. ${error}`];
    }
}

export const loginApi = async (bodyObject) =>{
    const url = `${DOMAIN}/users/sign_in`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    }
    try{
        const response = await fetch(url, requestOptions)
        if(response.ok){
            return [response, ''];
        }
        if(response.status === 401){
            return ['', `Invalid Email or Password` ]
        }
        const errorMessage = await response.text();
        return ['', 'Server side error...!'];
    } catch(error){
        return ['', `Server down. ${error}`];
    }
}

export const logoutApi = async (jwtToken) =>{
    const url = `${DOMAIN}/users/sign_out`;
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        }
    }
    try{
        const response = await fetch(url, requestOptions)
        if(response.ok){
            return [response, ''];
        }
        if(response.status === 401){
            return ['', `Invalid Email or Password` ]
        }
        const errorMessage = await response.text();
        return ['', 'Server side error...!'];
    } catch(error){
        return ['', `Server down. ${error}`];
    }
}