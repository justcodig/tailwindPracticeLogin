import React from 'react'
import styled from "../styled/style.module.css"

const LoginForm = () => {

  return (
    <div>
        <input className={`${styled.loginFormInput} bg-[url('C:\Users\이강식\Desktop\React\tailwindPracticeLogin\login\public\네이버.png')] `}  type="text" placeholder='아이디또는이메일' />
        <input className={`${styled.loginFormInput} mt-4`} type="text" placeholder='비밀번호' />
        <img className='absolute pt-5 right-3 cursor-pointer' src="" alt="" />
        <div className='flex mt-4'>
        <input type="checkbox"  className="w-4 opacity-50 text-black border-gray-300 "/>
        <span className='ml-2 opacity-50'>아이디 저장</span>
        </div>
        <button className={styled.loginFormButton}>로그인</button>
    </div>
  )
}

export default LoginForm
