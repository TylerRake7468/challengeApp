import defaultImage from "../assets/default_problem_pic.svg";
import { formatDate } from "../utilities/date";
const ChallengeCard = ({challenge, type}) =>{
    return (
        <div className="flex flex-col border border-black rounded-xl hover:cursor-pointer hover:shadow-2xl">
            <img className="w-full border-b border-black" src={defaultImage} alt="" />
            <div className="p-6">
                <p className="font-medium">{ challenge.title }</p>
                {
                    type === "active" ? 
                        <p className="font-normal text-red-700">End Date: {formatDate(new Date(challenge.end_date))}</p>
                        : <p className="font-normal text-green-700">Start Date: {formatDate(new Date(challenge.start_date))}</p>
                }
            </div>
        </div>
    );
}

export default ChallengeCard;