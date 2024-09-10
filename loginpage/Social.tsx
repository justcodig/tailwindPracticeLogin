import Image from "next/image";

const Social = () => {
return (
    <div className="w-full flex justify-center mt-7">
        <Image src="/페이스북.png" width={50} height={50} blurDataURL="/temp.png" placeholder="blur" className="mr-5" alt=""/>
        <Image src="/애플.png" width={50} height={50} blurDataURL="/temp.png" placeholder="blur" className="mr-3" alt=""/>
        <Image src="/네이버.png" width={60} height={50} blurDataURL="/temp.png" placeholder="blur" className="" alt=""/>
    </div>
)
}

export default Social
