const Button = ({
    children,
    onClick,
    parentClassName="bg-indigo-300",
    childrenClassName="bg-indigo-300 text-black hover:bg-indigo-600 hover:text-white"
}) =>{
    return (
        <div className={`${parentClassName} rounded hover:-translate-x-1 hover:-translate-y-1`}>
            <button 
                className={`${childrenClassName} w-full hover:-translate-x-1.5 hover:-translate-y-1.5 px-2 py-3 rounded`}
                type="submit"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;