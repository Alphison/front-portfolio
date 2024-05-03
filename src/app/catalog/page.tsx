"use client"

import ElFon from "@/components/ElFon/ElFon";
import ProjectBlock from "@/components/ProjectBlock/ProjectBlock";
import Image from "next/image";

export default function Page() {

    return (
        <div>
            <ElFon />
            <main className='flex flex-col m-[auto] sticky z-1'>
                <h1 className='mt-[200px] text-[113px] font-bold text-center font-mono'>ПРОЕКТЫ</h1>
                <hr className='w-[100px] h-[5px] bg-white mt-[30px] rounded-full m-[auto]'/>
                <div className="flex m-[auto] mt-[50px] gap-[30px]">
                    <select name="catgory" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                        <option value="" selected>КАТЕГОРИЯ</option>
                    </select>
                    <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                        <option value="" selected>ТЕХНОЛОГИИ</option>
                    </select>
                    <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                        <option value="" selected>УСЛУГИ</option>
                    </select>
                </div>
                <div className="flex w-[1700px] m-[auto] mt-[70px] flex-wrap gap-[40px] mb-[50px]">
                    <div className="flex flex-col gap-[20px] w-[530px]">
                        <ProjectBlock />
                        <p className="font-mono">
                            Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                            </div>
                            <p className="font-mono">
                                02.06.2003
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[530px]">
                        <ProjectBlock />
                        <p className="font-mono">
                            Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                            </div>
                            <p className="font-mono">
                                02.06.2003
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[530px]">
                        <ProjectBlock />
                        <p className="font-mono">
                            Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                            </div>
                            <p className="font-mono">
                                02.06.2003
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[530px]">
                        <ProjectBlock />
                        <p className="font-mono">
                            Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                            </div>
                            <p className="font-mono">
                                02.06.2003
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-[530px]">
                        <ProjectBlock />
                        <p className="font-mono">
                            Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full border flex justify-center items-center bg-black bg-opacity-50">
                                    <Image src={'/assets/images/icon_laravel.png'} width={25} height={25} alt=""/>
                                </div>
                            </div>
                            <p className="font-mono">
                                02.06.2003
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

} 