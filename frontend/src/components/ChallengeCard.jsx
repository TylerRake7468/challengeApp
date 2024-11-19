const ChallengeCard = ({challenge}) =>{
    console.log("ChallengeCard::", challenge);
    return (
        <div className="flex flex-col">
            { challenge.title }
        </div>
    );
}

export default ChallengeCard;