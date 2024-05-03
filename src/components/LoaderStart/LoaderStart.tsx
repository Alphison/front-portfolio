"use client"

import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import style from "./style.module.css"

export default function LoaderStart () {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className={isLoading ? style.wrapper_loader : style.wrapper_loader + ' ' + style.active}>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#FF2A5F"
                ariaLabel="triangle-loading"
                wrapperClass='m-auto my-[50px]'
            />
        </div>
    )
}