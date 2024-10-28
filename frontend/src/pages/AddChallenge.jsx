import { useState } from "react"
import Button from "../elements/Button"
import Datepicker from "react-tailwindcss-datepicker";

const AddChallenge = () =>{
    const MIN_DATE = new Date();
    const [title, setTitle] = useState('')
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("form submitted")
    }
    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl">Add Challenge</h1>
                <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
                    <input 
                        name="title" 
                        type='title' 
                        placeholder='Enter challenge title' 
                        className='py-2 w-full border border-gray-600 rounded px-3'
                        onChange={handleTitleChange}
                        value={title}
                    />
                    <Datepicker
                        minDate={MIN_DATE}
                        inputClassName="py-2 w-full border border-gray-600 rounded px-3"
                        popoverDirection="down"
                        value={value} 
                        onChange={newValue => setValue(newValue)}
                    />
                
                    <Button type="submit">Add Challenge</Button>
                </form>

            </div>
        </>
    )
}
export default AddChallenge