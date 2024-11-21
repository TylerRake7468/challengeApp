export const formatDate = (date)=>{
    const options = {
        day: '2-digit',
        month: 'short'
    };
    return date.toLocaleDateString('en-GB', options);
}