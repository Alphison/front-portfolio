import CatalogProjects from "@/components/CatalogProjects/CatalogProjects";
import ElFon from "@/components/ElFon/ElFon";

export default function Page() {

    return (
        <div>
            <ElFon />
            <main className='flex flex-col m-[auto] sticky z-1'>
                <h1 className='mt-[200px] text-[113px] font-bold text-center font-mono'>ПРОЕКТЫ</h1>
                <hr className='w-[100px] h-[5px] bg-white mt-[30px] rounded-full m-[auto]'/>
                <CatalogProjects />
            </main>
        </div>
    )

} 