import React from 'react';
//import { useInput } from '../../hooks/UseInput.js';
import { useForm } from 'react-hook-form'
import '../formstyle.css'

//test

export function FormCreateSet(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {name: "", description: ""}});

    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if(count !== 0)
        {
            console.log(`Send form : ${count}`);
            alert(`Send form : ${count}`);
        }
    }, [count]);

    {/*
    const [name, setName] = useInput('');
    const [description, setDescription] = useInput('');
    function handleSubmit(event){
        event.preventDefault();
        console.log(name + ': ' + description);
    }
    */}

    const onSubmit = async (data) =>{
        console.log(data);
        fetch("http://localhost:5000/api/set/create",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function(response){console.log(response)})
        .catch(function(response){console.log(response)})    
    }

    return(
        <div className='ihatereact'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form_item'>
                    <label htmlFor='name'>
                        Set Name:
                    </label>
                    <input type='text' name='name' id='name' {...register("name", {required: "Fill the Name Space", minLength: {value: 3, message: "The Name Space must contain at least 3 characters"}})}/>
                    <p className='error-msg'>{errors.name?.message}</p>
                </div>
        
                <div className='form_item'>
                    <label htmlFor='description'>
                        Description:
                    </label>
                    <textarea name='description' id='description' {...register("description", {required: "Fill the Description Space"})}/>
                    <p className='error-msg'>{errors.description?.message}</p>
                </div>
        
                <div className='form_item'>
                    <input className='submit' type='submit' value='Create Set's/>
                </div>
            </form>
        </div>
    );
}

