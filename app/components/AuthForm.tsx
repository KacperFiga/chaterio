'use client';
import React, { useState } from 'react';
import { RegisterForm } from './forms/RegisterForm';
import { LoginForm } from './forms/LoginForm';


const AuthForm = () => {

  type FormType = 'REGISTER'| 'LOGIN';

  const [formType, setFormType] = useState<FormType>('REGISTER')


  return (
    <div className='bg-primary h-screen text-primaryTextColor'>
      <div className='flex items-center flex-col pt-[50px]'>
        <h1 className='text-myBlue font-bold text-3xl'>Chatero.io</h1>
        <p className="max-w-[200px] text-center mt-[20px]">
        Create account and chat with other people!
        </p>
      </div>

{formType === 'LOGIN' ?  <LoginForm changeFormType={()=>setFormType('REGISTER')}/> : <RegisterForm changeFormType={()=>setFormType('LOGIN')}/>}


    </div>
  )
}

export default AuthForm;