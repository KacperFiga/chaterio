import React from 'react'
import { useForm } from 'react-hook-form';


export const LoginForm = ({changeFormType}) => {
    
    type FormData = {
        email: String,
        password: String
    }

    const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

    const onSubmit = async data => {
      const res = await fetch('api/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
      })
      
    }

  return (
    <div className="bg-secondary w-[350px] mt-[50px] mx-auto rounded-sm p-4 pt-7">
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center flex-col items-center gap-[15px]'>
    <input type="text" placeholder='Email' {...register('email')} className='w-[250px] rounded-sm h-[40px] text-dark p-1 outline-none border-none focus:border-1 focus:border-myBlue'/>
    <input type="password" placeholder='Password' {...register('password')}  className='w-[250px] h-[40px] rounded-sm  text-dark p-1 outline-none border-none focus:border-1 focus:border-myBlue'/>
    <button type="submit" className="bg-myBlue block outline-none px-4 py-1 rounded-sm"> Log in</button>
    </form>
    <p className="text-sm mt-8"> Don't have an account yet? <span className='underline cursor-pointer' onClick={changeFormType}> Register here </span></p>
    </div>
  )
}
