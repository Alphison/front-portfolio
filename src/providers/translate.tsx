"use client"

import { WithTranslation } from "next-i18next";
import { PropsWithChildren } from "react";
import { withTranslation } from "react-i18next";

interface Props extends WithTranslation {}

function Translate({children}: PropsWithChildren<Props>){
    return (
        <div>
            {children}
        </div>
    )
}

export default withTranslation()(Translate)