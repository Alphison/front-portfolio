"use client"

import { useMenuStore } from "@/store/useMenuStore"

export default function Burger(){

    const updateStatus = useMenuStore((state) => state.updateStatus)

    return (
        <button onClick={() => updateStatus()}>
            <div className="flex flex-col gap-[15px] w-[80px] cursor-pointer">
                <div className="bg-white h-[2px]"></div>
                <div className="bg-white h-[2px]"></div>
            </div>
        </button>

    )
}