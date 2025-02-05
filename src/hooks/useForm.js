import { useState } from "react";

export const useForm = (initialState = {})=>{

    const [formState, setFormState] = useState(initialState)


    const onInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = ()=>{
        setFormState(initialState)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}