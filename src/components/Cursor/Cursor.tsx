"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Cursor(): JSX.Element {

    const cursor = useRef<HTMLDivElement>(null)
    const follower = useRef<HTMLDivElement>(null)

    let mouseX = 0
    let mouseY = 0
    let posX = 0
    let posY = 0

    useEffect(() => {

        if(cursor.current && follower.current) {
            cursor.current.classList.add('hidden')
            follower.current.classList.add('hidden')
        }

        document.body.addEventListener('mousemove', (e:MouseEvent) => {
            if(cursor.current && follower.current) {
                cursor.current.classList.remove('hidden')
                follower.current.classList.remove('hidden')

                mouseX = e.pageX
                mouseY = e.pageY

                gsap.to({}, 0.01, {

                    repeat: -1,
                    onRepeat: () => {
                        posX += (mouseX - posX) / 10000
                        posY += (mouseY - posY) / 10000

                        gsap.set(cursor.current, {
                            css: {
                                left: mouseX,
                                top: mouseY
                            }
                        })

                        gsap.set(follower.current, {
                            css: {
                                left: posX - 24,
                                top: posY - 24
                            }
                        })
                    }

                })
            }

        })

        document.body.addEventListener('mouseout', (e:MouseEvent) => {
            
            if(cursor.current && follower.current) {
                cursor.current.classList.add('hidden')
                follower.current.classList.add('hidden')
            }

        })
    }, [])    

    return (
        <div>
            <div id="cursor" ref={cursor}></div>
            <div id="aura" ref={follower}></div>
        </div>
    )
}
