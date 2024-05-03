import {motion} from 'framer-motion'

export default function ElFon () {
    return (
        <motion.div initial={{ scale: 0, x: '-50%' }} animate={{ scale: 1 }} transition={{ duration: 3 }} className="fixed left-1/2 w-[1677px] h-[1677px]">
            <motion.div className="w-[1677px] h-[1677px] rounded-[100%] border-[177px] border-[#FF2A5F] blur-[40px] absolute top-[50px] left-1/2" style={{x: '-50%', y: '-50%'}}></motion.div>
            <div className="bg-[#FF2A5F] rounded-full absolute top-[50px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] blur-[300px]"></div>
        </motion.div>
    )
}