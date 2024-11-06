import { useState } from "react"
import Button from "../elements/Button"
import Datepicker from "react-tailwindcss-datepicker";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorToolbar, formats, modules } from "../components/EditorToolbar";

const AddChallenge = () =>{
    const MIN_DATE = new Date();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) =>{
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
                    <ReactQuill theme="snow" value={description} onChange={handleChangeDescription} />
                    <div className="text-editor">
                        <EditorToolbar />
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={handleChangeDescription}
                            placeholder={"Write something awesome..."}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    <Button type="submit">Add Challenge</Button>
                </form>

            </div>
        </>
    )
}
export default AddChallenge