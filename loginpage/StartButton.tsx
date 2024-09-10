import Styled from '../styled/style.module.css'
import Image from "next/image";

const StartButton = () => {
  return (
    <div className='w-full mt-8 flex flex-col items-center relative'>
        <div className={Styled.easyStart}>간편하게 시작하기!</div>
        <button className={Styled.startBtn} >
        <Image src="/카카오톡로고.png" width={30} height={30} blurDataURL="/temp.png" placeholder="blur" className="mr-3" alt=""/>
            카카오로 시작하기
        </button>
    </div>
  )
}

export default StartButton
