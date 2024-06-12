export default function About () {
    return (
        <>
        <div className="flex justify-between mt-20 mx-16 mb-40 mlg:flex mlg:flex-col mmd:mx-3 ">
            <div className="flex-col w-96 mlg:w-full">
                <div>
                    <h1 className="subpixel antialiased font-semibold text-gray-500 text-7xl mlg:text-center">About</h1>
                </div>

                <div className="mt-9 mlg:hidden">
                    <h3 className="text-xl">Mission & Vision </h3>
                    <p className="w-96 mt-3 text-sm">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>    
                </div>

                <div className="mt-9 mlg:hidden">
                    <h3 className="text-xl">Core Values</h3>
                    <p className="w-96 mt-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incid idunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="ml-3 mt-40 mlg:hidden">
                <div className="border border-black rounded-2xl h-72 w-110" src="" alt="" />
            </div>

            <div className="ml-3 mt-44 mlg:hidden">
                <h4>6te9 tech</h4>
                <h4 className="mt-1">6te9 Media</h4>
                <h4 className="mt-1">6te9 Culinary</h4>
                <h4 className="mt-1">Larvae</h4>
                <h4 className="mt-1">Medecene</h4>
            </div>

            <div className="mt-9 ml-9 lg:hidden">
                <h1 className="text-5xl">Networking</h1>
                <p className="mt-6 text-lg opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>

                <p className="mt-12 text-lg opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>    
            </div>

                <div className="flex flex-row gap-4 justify-center mt-32 msm:mt-7 lg:hidden">
                    <div>
                        <div className="w-48 h-40 border border-black rounded-2xl msm:w-28 msm:h-32"  />
                        <p className="text-center">6te9 tech</p>
                    </div>

                    <div>
                        <div className="w-48 h-40 border border-black rounded-2xl msm:w-28 msm:h-32" src="" alt=""  />
                        <p className="text-center">6te9 media</p>
                    </div>

                    <div>
                        <div className="w-48 h-40 border border-black rounded-2xl msm:w-28 msm:h-32" src="" alt=""  />
                        <p className="text-center">6te9 culinary</p>
                    </div>
                </div>
        </div>
        </>
    )
}