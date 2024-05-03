"use client"

import Image from "next/image"
import ProjectBlock from "../ProjectBlock/ProjectBlock"
import Select from "./Select/Select"

export default function CatalogProjects() {



    return (
        <div>
            <div className="flex justify-center mt-[50px] gap-[30px]">
                {/* <select name="catgory" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>КАТЕГОРИЯ</option>
                </select>
                <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>ТЕХНОЛОГИИ</option>
                </select>
                <select name="" id="" className="bg-transparent pt-[30px] pb-[30px] pl-[50px] pr-[50px] border outline-none font-bold rounded-[4px]">
                    <option value="" selected>УСЛУГИ</option>
                </select> */}
                <Select />
                <Select />
                <Select />
            </div>
            <div className="flex w-[1700px] m-[auto] mt-[70px] flex-wrap gap-[55px] mb-[50px]">
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
        </div>
    )
}