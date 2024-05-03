import Image from "next/image";

export default function ProjectBlock(){
    return (
        <div>
            <Image src={'/assets/images/ванпис.jpeg'} className="rounded-[7px] w-[100%]" alt="" width={500} height={284}/>
            <div className="mt-[30px] w-[100%] flex justify-between items-center">
                <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                <div className="border pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[2px]">
                    <p className="text-[18px] font-bold font-mono">Web design</p>
                </div>
            </div>
            <hr className="mt-[30px]"/>
        </div>
    )
}