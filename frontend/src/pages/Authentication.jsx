const Authentication = ({pageType}) =>{
    return (
        <>
            Authentication page welcome you...!
            {
                (pageType === PageType.LOGIN) ? 
                    <h1>Hello Login</h1> 
                    : 
                    <h1>Hello Register</h1>
            }
        </>
    );
}

export const PageType = Object.freeze({
    LOGIN : 0,
    REGISTER : 1 
})

export default Authentication;