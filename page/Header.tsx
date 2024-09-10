import React from 'react'
import styled from "../styled/style.module.css"

const Header = () => {
  return (
    <div className='w-full'>
        <div className="w-full h-16">
          <div className='relative'>
            <div className={styled.test_label}></div>
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45 w-1 h-full bg-black"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-45 w-1 h-full bg-black"></div> */}
          </div>
            <h2 className={styled.headerlogin}>로그인</h2>
        </div>
    </div>
  )
}

export default Header
