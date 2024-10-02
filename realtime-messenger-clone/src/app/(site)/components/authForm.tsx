'use client'

import {useState, useCallback} from 'react'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import Input from '@/app/components/inputs/input'
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN'){ 
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if(variant === 'REGISTER'){
            // axios Register
            
        }
        if(variant === 'LOGIN'){
            // next auth signIn
        }
    } 
    const socialAction = (action: string) => {
        setIsLoading(true)
        // social signIn
    }
    return (
       <div
       className="
       mt-8
       sm:mx-auto
       sm:w-full
       sm:max-w-md
       "
       >
        <div className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-md
        sm:px-10
        "
        >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {variant === 'REGISTER' && (
            <Input 
            id="name" 
        label="Name" 
        register={register} 
        errors={errors} 
        />  
         )} 
        <Input 
        id="email" 
        label="Email Addess"
        type="email"
        register={register} 
        errors={errors} 
        />   
       <Input 
        id="password" 
        label="Password"
        type="password"
        register={register} 
        errors={errors} 
        />
        </form>
        </div>
       </div> 

    )
}

export default AuthForm;