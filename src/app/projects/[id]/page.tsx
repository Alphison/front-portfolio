import ElFon from "@/components/ElFon/ElFon";
import Image from "next/image";

export default function Page({params}: {params: {id: string}}) {

    return (
        <div id="page-wrap">
            <ElFon />
            <main className="sticky z-1">
                <h1 className='pt-[200px] text-[40px] sm:text-[60px] lx:text-[113px] font-bold text-center font-mono '>НАШИ ПРОЕКТЫ</h1>
                <hr className='w-[100px] h-[5px] bg-white mt-[30px] rounded-full m-[auto]'/>
                <p className='text-center m-auto mt-[30px] w-[85%] mi:w-[65%] sm:w-[45%] lx:w-[25%] font-mono'>Доверьте нам разработку вашего следующего проекта и убедитесь сами в качестве нашей работы.</p>
                <div className="my-[70px] flex w-[1700px] mx-[auto] gap-[40px] items-start relative">
                    <div className="border w-[60%] sticky top-[120px]">
                        <div className="py-[50px] px-[30px] border-b">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[24px] font-bold font-mono">VIDEO HOSTING</h1>
                                <p className="text-[16px] font-mono">02.05.2024</p>
                            </div>
                            <p className="mt-[20px] font-mono">Tailored solutions for establishing your online presence, enhancing brand  identity, and optimizing user engagement for corporate entities of all sizes.</p>
                            <div className="flex items-center justify-between mt-[46px]">
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
                                <p className="font-mono border px-[20px] py-[10px] font-bold uppercase text-[18px]">
                                    pet project
                                </p>
                            </div>
                        </div>
                        <p className="p-[30px] font-mono text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id facilisis elit. In bibendum interdum ante, id elementum turpis hendrerit vitae. In hac habitasse platea dictumst. Maecenas quis risus id urna vestibulum sollicitudin. Vivamus turpis lorem, porta sed vestibulum in, lacinia at lacus. Fusce interdum urna dui, sed convallis arcu fermentum vel. Praesent sodales dapibus lectus in pellentesque. Curabitur pretium, purus sagittis dictum euismod, purus quam maximus eros, a ultrices justo ipsum sit amet felis. Sed imperdiet eleifend lacinia. Ut leo arcu, posuere a quam eu, consectetur sollicitudin nunc. Integer mollis iaculis maximus. Nulla auctor vel ipsum vitae euismod. In in condimentum neque, sit amet convallis eros.
                            Sed gravida non lectus eu dapibus. Quisque ligula metus, porta sed convallis vel, tempus in nisi. Duis ornare leo id eros tempor commodo. Fusce blandit, nisi a sagittis ornare, augue dolor varius dolor, ac imperdiet nulla mauris id lacus. Maecenas imperdiet nunc sit amet vestibulum convallis. Nulla vulputate sollicitudin arcu a malesuada. Vivamus magna dolor, dignissim vitae tellus suscipit, rhoncus condimentum ante.
                        </p>
                    </div>
                    <div className="w-[50%] flex flex-col gap-[20px]">
                        <Image className="w-[100%]" src={'/assets/images/ванпис.jpeg'} width={900} height={900} alt=""/>
                        <Image className="w-[100%]" src={'/assets/images/ванпис.jpeg'} width={900} height={900} alt=""/>
                        <Image className="w-[100%]" src={'/assets/images/ванпис.jpeg'} width={900} height={900} alt=""/>
                        <Image className="w-[100%]" src={'/assets/images/ванпис.jpeg'} width={900} height={900} alt=""/>
                        <Image className="w-[100%]" src={'/assets/images/ванпис.jpeg'} width={900} height={900} alt=""/>
                    </div>
                </div>
            </main>
        </div>
    )
}