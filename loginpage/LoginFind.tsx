import React from 'react'
import styled from "../styled/style.module.css"

const LoginFind = () => {
  return (
    <div className='mt-4'>
        <span className={styled.loginFindtext}>회원가입</span>
        <span className={styled.loginFindStic}> | </span>
        <span className={styled.loginFindtext}>로그인 찾기</span>
        <span className={styled.loginFindStic}> | </span>
        <span className={styled.loginFindtext}>비밀번호 찾기</span>
    </div>
  )
}

export default LoginFind
