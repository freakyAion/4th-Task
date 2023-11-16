import React from 'react';
import { useForm } from 'react-hook-form'
import '../formstyle.css'

export function FormCreateCard(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {front: "", back: ""}});


    return(
        <div className='ihatereact'>
            <form onSubmit={handleSubmit((data) => {console.log(data);})}>
                <div className='form_item'>
                    <label htmlFor='front'>
                        Front:
                    </label>
                    <input type='text' name='front' id='front' {...register("front", {required: "Fill the Front Side Space", minLength: {value: 3, message: "The Front Side must contain at least 3 characters"}})}/>
                    <p className='error-msg'>{errors.front?.message}</p>
                </div>

                <div className='form_item'>
                    <label htmlFor='back'>
                        Back:
                    </label>
                    <textarea name='back' id='back' {...register("back", {required: "Fill the Back Side Space"})}/>
                    <p className='error-msg'>{errors.back?.message}</p>
                </div>

                <div className='form_item'>
                    <input className='submit' type='submit' value='Create Card's/>
                </div>
            </form>
        </div>
    )
}
