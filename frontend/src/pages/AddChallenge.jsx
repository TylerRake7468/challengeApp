import { useEffect, useState } from "react"
import Button from "../elements/Button"
import Datepicker from "react-tailwindcss-datepicker";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorToolbar, formats, modules } from "../components/EditorToolbar";
import { addChallenge } from "../apis/challenges";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AddChallenge = () =>{
    const MIN_DATE = new Date();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['jwt']);
    const initialErrorsState = {
        title: '',
        description: '',
        date: '',
        api:''
    }
    const [errors, setErrors] = useState(initialErrorsState);
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    useEffect(()=>{
        if(!cookies.jwt){
            navigate("/")
        }
    },[])
    const handleTitleChange = (e) =>{
        console.log("Title::::", e.target.value)
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) =>{
        console.log("Desc::::", e)
        setDescription(e)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let newErrors = {};

        if(title.length === 0){
            newErrors = {
                ...newErrors,
                title: "Blank title"
            };
        }
        if(description.length === 0){
            newErrors = {
                ...newErrors,
                description: "Blank description"
            };
        }
        if(value.startDate === null || value.endDate === null){
            newErrors = {
                ...newErrors,
                date: "Blank start/end date."
            };  
        }
        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(error=> error!='');
        if(hasErrors){
            return;
        }
        addChallengeApi(); 
    }
    const addChallengeApi = async () =>{
        const [response, error] = await addChallenge(cookies.jwt,{
            challenge:{
                title: title,
                description: description,
                start_date: value.startDate,
                end_date: value.endDate
            }
        })
        handleResponse([response, error])
    }
    const handleResponse = async([response, error]) =>{
        if(error){
            setErrors({
                ...errors,
                api: error
            })
        }else{
            console.log("Add challenge successfully....!")
            navigate("/");
        }
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl">Add Challenge</h1>
                <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
                    <div>
                        <input 
                            name="title" 
                            type='title' 
                            placeholder='Enter challenge title' 
                            className='py-2 w-full border border-gray-600 rounded px-3'
                            onChange={handleTitleChange}
                            value={title}
                        />
                        { errors.title && <p className='text-sm text-red-500 text-medium'>{errors.title}</p> }
                    </div>
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
                        { errors.description && <p className='text-sm text-red-500 text-medium'>{errors.description}</p> }
                    </div>
                    <div>
                        <Datepicker
                            minDate={MIN_DATE}
                            inputClassName="py-2 w-full border border-gray-600 rounded px-3"
                            popoverDirection="down"
                            value={value} 
                            onChange={newValue => setValue(newValue)}
                        />
                        { errors.date && <p className='text-sm text-red-500 text-medium'>{errors.date}</p> }
                    </div>
                    <div>
                        <Button type="submit">Add Challenge</Button>
                        { errors.api && <p className='text-sm text-red-500 text-medium'>{errors.api}</p> }
                    </div>
                </form>

            </div>
        </>
    )
}
export default AddChallenge