import { useEffect, useState } from "react"
import Button from "../elements/Button"
import 'react-quill/dist/quill.snow.css';
import { useCookies } from "react-cookie";
import { getActiveAndUpcomingChallenges } from "../apis/challenges";
import ChallengeCard from "../components/ChallengeCard";

const ChallengeList = () =>{
    const [cookies, setCookie] = useCookies(['jwt']);
    const [activeChallenges, setActiveChallenges] = useState([]);
    const [upcomingChallenges, setUpcomingChallenges] = useState([]);
    const initialErrorsState = {
        title: '',
        description: '',
        date: '',
        api:''
    }
    const [errors, setErrors] = useState(initialErrorsState);

    useEffect(()=>{
        getActiveAndUpcomingChallengesApi();
    }, []);

    const getActiveAndUpcomingChallengesApi = async () =>{
        const [response, error] = await getActiveAndUpcomingChallenges(cookies.jwt)
        handleResponse([response, error])
    }
    const handleResponse = async([response, error]) =>{
        if(error){
            setErrors({
                ...errors,
                api: error
            })
        }else{
            const data = await response.json();
            setActiveChallenges(data.active);
            setUpcomingChallenges(data.upcoming);
        }
    }
    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                {
                    activeChallenges && activeChallenges.length > 0 && 
                    <>
                        <h3 className="text-2xl font-bold">Active Challenges: {activeChallenges.length}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-12">
                            {
                                activeChallenges.map((challenge)=>{
                                    return <ChallengeCard key={challenge.id} challenge={challenge} />
                                })
                            }
                            </div>
                    </>
                }
                {
                    upcomingChallenges && upcomingChallenges.length > 0 && 
                    <>
                        <h3 className="text-2xl font-bold">Upcoming Challenges: {upcomingChallenges.length}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-12">
                        {
                            upcomingChallenges.map((challenge)=>{
                                return <ChallengeCard key={challenge.id} challenge={challenge} />
                            })
                        }
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default ChallengeList