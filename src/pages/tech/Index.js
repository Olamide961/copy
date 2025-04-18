import  ToggleCard from '../../component/ToggleCard'


export default function Index() {
    return (
        <>
        <div className="mt-40 mx-9">
            <h1 className="subpixel antialiased font-semibold text-gray-500 text-5xl ml-20">Business Solution</h1>
            <div className="flex mt-18 flex-row justify-start gap-28 w-full">
                <ToggleCard />
                <ToggleCard />
                
            </div>
        </div>
        </>
    );
}