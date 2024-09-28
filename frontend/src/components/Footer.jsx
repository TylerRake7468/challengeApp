import Instagram from "../assets/instagram.svg"
import GitHub from "../assets/github.svg"
import LinkedIn from "../assets/linkedin.svg"
import YouTube from "../assets/youtube.svg"
const Footer = () =>{
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-between items-center gap-2">
                        <div className="flex gap-3">
                            <img className="h-6 w-6" src={Instagram}/>
                            <img className="h-6 w-6" src={GitHub}/>
                            <img className="h-6 w-6" src={LinkedIn}/>
                            <img className="h-6 w-6" src={YouTube}/>
                        </div>
                        <p className="font-medium text-sm text-gray-600">
                            @ kuch nahi bass ye footer hai
                        </p>
                        <p className="items-center flex gap-2 font-medium text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                            Code Challenge is developed by Tyler Rake
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 fill-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer