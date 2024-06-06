export default function About () {
    return (
        <>
        <div className="flex flex-row mt-40 mx-20">
            <div className="flex-column justify-start h-auto w-auto">
                <div>
                    <h1 className="text-5xl">About</h1>
                </div>

                <div className="mt-9">
                    <h3 className="text-xl">Mission & Vision </h3>
                    <p className="w-110 mt-3 text-sm">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>    
                </div>

                <div className="mt-9">
                    <h3 className="text-xl">Core Values</h3>
                    <p className="w-110 mt-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incid idunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="justify-center ml-32 mt-20">
                <div className="border border-black rounded-2xl h-72 w-110" src="" alt="" />
            </div>

            <div className="ml-32 mt-28">
                <h4>6te9 tech</h4>
                <h4 className="mt-1">6te9 Media</h4>
                <h4 className="mt-1">6te9 Culinary</h4>
                <h4 className="mt-1">Larvae</h4>
                <h4 className="mt-1">Medecene</h4>
            </div>
        </div>
        </>
    )
}