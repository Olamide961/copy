

export default function Product() {
    return (
        <>
        <div className="mt-40 mx-9">
            <h1 className="text-center text-4xl text-gray-600">Business Solution</h1>
            <div className="flex mt-18 flex-row justify-center w-full">
                <div className="flex flex-row relative mt-20">
                    <div className="relative border border-black w-96 h-40 rounded-xl"></div>
                    <div className="absolute border border-black w-96 h-40 left-14 -top-10 bg-white rounded-xl"></div>
                </div>       

                <div className="flex flex-row relative mt-20 ml-40">
                    <div className="relative border border-black w-96 h-40 rounded-xl"></div>
                    <div className="absolute border border-black w-96 h-40 left-14 -top-10 bg-white rounded-xl"></div>
                </div>
            </div>
        </div>
        </>
    )
}