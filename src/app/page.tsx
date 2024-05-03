"use client"

import { useScroll, motion, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ElFon from "../components/ElFon/ElFon";
import SliderServices from "../components/SliderServices/SliderServices"
import { useTranslation } from "react-i18next";
import LoaderStart from "@/components/LoaderStart/LoaderStart";


export default function Home() {
  const main = useRef(null)
  const { t } = useTranslation()
  const router = useRouter()

  const { scrollYProgress } = useScroll({
    container: main
  });

  const translateY = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001
  });

  const divY = useTransform(translateY, [0, 7.1], [0, 1000]);


  const handlePush = () => {
    router.push('/projects')
  }


  return (
    <main className="flex flex-col wrapper overflow-hidden" ref={main}>
      {/* <LoaderStart /> */}
      <ElFon />
      <div className="flex flex-col gap-[14px] items-center fixed right-[50px] top-[50%] translate-y-[-50%] z-[99]">
        <h3 className="text-[20px]">01</h3>
        <div className="relative w-[2px] bg-white h-40">
          <motion.div className="rounded-full w-[20px] h-[20px] border-[2px] bg-black absolute top-0 left-1/2 translate-x-[-50%]" style={{y: divY, x: '-50%'}}></motion.div>
        </div>
        <h3 className="text-[20px]">06</h3>
      </div>

      <div className="min-h-screen text-center section">
        <motion.h1 initial={{ scale: 0, y: -1000, filter: "blur(100px)" }} animate={{ scale: 1, y: 0, filter: "blur(0)" }} transition={{ duration: 2 }}  className="mob:text-[50px] md:text-[100px] text-[30px] font-bold leading-[100vh] sticky z-1">EXPLORE</motion.h1>
      </div>

      <div className="min-h-screen text-center flex flex-col items-center justify-center sticky z-1 section">
        <motion.h1 initial={{ opacity: 0, scale: 0, filter: "blur(100px)" }} whileInView={{ opacity: 1, scale: [null, 1.1, 1], filter: "blur(0px)" }} transition={{ duration: 0.5, type: "tween", ease: 'easeInOut' }} className="text-[40px] sm:text-[50px] font-bold md:text-[100px]">ABOUT US</motion.h1>
        <motion.hr initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="w-[100px] h-[5px] bg-white mt-[30px] rounded-full"/>
        <motion.p initial={{ opacity: 0, scale: 3, filter: "blur(100px)" }} whileInView={{ opacity: 1, scale: [null, 1.1, 1], filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }} className="text-[10px] md:text-[18px] w-[100%] m-[50px] lx:w-[1050px] pl-[10px] pr-[10px] font-mono">We are a team of professional web developers from the A&A (Azat and  Alfis) studio, specializing in creating high-quality websites and web  applications. Our goal is to help your business succeed in the online  world by providing modern and innovative solutions for your web  presence.</motion.p>
        <motion.button onClick={() => handlePush()} initial={{ scale: 0, y: 100, filter: "blur(100px)" }} whileInView={{ scale: 1, y: 0, filter: "blur(0)" }} transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }} className="rounded-[4px] pt-4 pb-4 pr-[25px] pl-[25px] md:pt-7 md:pb-7 md:pr-[50px] md:pl-[50px] relative overflow-hidden border shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF2A5F] before:duration-300 before:ease-out hover:text-white hover:shadow-[#FF2A5F] hover:before:h-40 hover:before:w-[100%] hover:before:opacity-80 cursor-none">
          <span className="text-[12px] md:text-[20px] relative z-10">our projects</span>
        </motion.button>
        
      </div>

      <div className="min-h-screen text-center flex flex-col items-center justify-center sticky z-1 section">
        <motion.h1 initial={{ opacity: 0, scale: 0, x: -500, filter: "blur(100px)" }} whileInView={{ opacity: 1, scale: [null, 1.1, 1], x: 0, filter: "blur(0px)" }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="text-[40px] sm:text-[50px] font-bold md:text-[100px]">OUR SERVICES</motion.h1>
        <hr className="w-[100px] h-[5px] bg-white mt-[30px] rounded-full"/>
        <div className="mt-[50px] mr-4 ml-4 w-[100%] 1xl:w-[1400px] pr-[20px] pl-[20px] 1xl:pr-[0] 1xl:pl-[0]">
          <SliderServices />
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-start justify-center sticky z-1 ml-[50px] section">
        <motion.h1 initial={{ opacity: 0, x: -100, filter: 'blur(100px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }} transition={{duration: 0.3, ease: 'easeIn'}} className="text-[30px] sm:text-[50px] font-bold md:text-[100px]">Our Approach</motion.h1>
        <motion.hr initial={{ opacity: 0, x: -100, filter: 'blur(100px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }} transition={{duration: 0.3, delay: 0.3, ease: 'easeIn'}} className="rounded-full w-[100px] h-[5px] bg-white mt-[30px]"/>
        <motion.p initial={{ opacity: 0, x: -100, filter: 'blur(100px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }} transition={{duration: 0.3, delay: 0.6, ease: 'easeIn'}} className="text-[10px] md:text-[18px] w-[100%] lx:w-[1050px] mt-[50px] mb-[50px] font-mono">We strive for quality and uniqueness, reflecting your individuality and  effectively showcasing your brand online. Our approach is based on  careful analysis of your business and target audience to create web  solutions that meet your needs and expectations.</motion.p>
        <motion.button initial={{ opacity: 0, x: -200, filter: 'blur(100px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }} transition={{duration: 0.3, delay: 0.9, ease: 'easeIn'}} className="cursor-none rounded-[4px] pt-4 pb-4 pr-[25px] pl-[25px] md:pt-7 md:pb-7 md:pr-[50px] md:pl-[50px] relative overflow-hidden border shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF2A5F] before:duration-300 before:ease-out hover:text-white hover:shadow-[#FF2A5F] hover:before:h-40 hover:before:w-[100%] hover:before:opacity-80">
          <span className="text-[12px] md:text-[20px] relative z-10">our projects</span>
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0, filter: 'blur(100px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0)' }} transition={{duration: 0.5, ease: 'easeIn'}} className="min-h-screen text-center flex flex-col items-center justify-center sticky z-1 section">
        <h1 className="text-[25px] sm:text-[50px] font-bold md:text-[100px]">Why Choose Us</h1>
        <hr className="w-[100px] h-[5px] bg-white mt-[30px] rounded-full"/>
        <p className="text-[10px] md:text-[18px] w-[100%] lx:w-[1050px] m-[50px] pr-[10px] pl-[10px] font-mono">Our team consists of experienced and talented professionals ready to  bring your ideas to life. We value long-term relationships with our  clients and guarantee a personalized approach to each project. We aim  for quality, reliability, and professionalism in everything we do.</p>
      </motion.div>
      
    </main>
  );
}
