import { BASE_API } from "./config"

export const addChallenge = async (jwtToken,bodyObject) =>{
    const url = `${BASE_API}/challenges`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':jwtToken
        },
        body: JSON.stringify(bodyObject)
    }
    try{
        const response = await fetch(url, requestOptions)
        if(response.ok){
            return [response, ''];
        }
        if(response.status === 401){
            return ['', 'Unauthorized user, cannot add challenge.' ]
        }
        const errorMessage = await response.text();
        return ['', `Server side error...! ${errorMessage}` ];
    } catch(error){
        return ['', `Server down. ${error}`];
    }
}

export const getActiveAndUpcomingChallenges = async (jwtToken,bodyObject) =>{
    const url = `${BASE_API}/challenges/active_and_upcoming`;
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':jwtToken
        }
    }
    try{
        const response = await fetch(url, requestOptions)
        if(response.ok){
            return [response, ''];
        }
        if(response.status === 401){
            return ['', 'Unauthorized user, cannot add challenge.' ]
        }
        const errorMessage = await response.text();
        return ['', `Server side error...! ${errorMessage}` ];
    } catch(error){
        return ['', `Server down. ${error}`];
    }
}