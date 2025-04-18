export default function ServiceDetails () {
    return (
        <>
        <div className='mt-48 mx-20'>
            <h1 className="subpixel antialiased font-semibold text-gray-500 text-5xl">Service Details</h1>
            <div className="flex flex-row justify-between mt-9">
                <div className="flex flex-row relative w-110">
                    <div className="h-96 w-96 border border-black absolute rounded-2xl" />
                    <div className="h-40 w-48 border border-black rounded-2xl absolute z-40 bg-white left-64 top-9" />
                </div> 

                <div className="flex flex-col ml-9">
                    <h6 className="subpixel antialiased text-xl">Networking</h6>
                    <p  className="mt-9 w-96 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="mt-40 flex flex-row">
                        <h2 className="mt-14">Clentele: </h2>
                        <div className="border border-black h-20 w-20 ml-20" />
                        <div className="border border-black h-20 w-20 ml-4" />
                        <div className="border border-black h-20 w-20 ml-4" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}