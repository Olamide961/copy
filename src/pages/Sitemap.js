import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sitemap () {
    return (
        <>
        <div className="flex flex-row justify-between mx-20 mt-40 mxl:mx-9" >
            <div className="flex flex-col">
                <h2 className="text-grey-400">6te9 LTD</h2>
                <div className="border-l-4 h-96 border-gray-500 w-20 mt-0">
                    <div className="absolute left-20 mxl:left-9">
                        <div className="ml-3 mt-3">
                            <p>Products</p>
                            <p>About Us</p>
                            <p>Contact us</p>
                        </div>

                        <div className="mt-4">
                            <h2><FontAwesomeIcon className="fa-2xl fa-thin" icon={faMinus} style={{color: "#7a7a7a",}} /><span className="ml-4">6te9 tech</span></h2>
                            <div className="ml-3 mt-3">
                                <p>Products</p>
                                <p>About Us</p>
                                <p>Contact us</p>
                            </div>
                        </div>

                        <div className="mt-4 p-0">
                            <h2><FontAwesomeIcon className="fa-2xl fa-thin" icon={faMinus} style={{color: "#7a7a7a",}} /><span className="ml-4">6te9 media</span></h2>
                            <div className="ml-3 mt-3">
                                <p>Products</p>
                                <p>Service</p>
                                <p>Contact us</p>
                            </div>
                        </div>

                        <div className="mt-5">
                        <h2 className="text-"><FontAwesomeIcon className="fa-2xl fa-thin" icon={faMinus} style={{color: "#7a7a7a",}} /><span className="ml-4">6te9 culinary</span></h2>
                        </div>

                   </div> 
                </div>
            </div>

            <div className="mt-20 ml-20">
                <div className="w-96 h-110 border border-black rounded-2xl mxl:w-80" />
            </div>

            <div className="flex flex-col mt-16 ml-9">
                <h4 className="text-center text-2xl">Latest News</h4>
                <p className="w-110 mt-9 text-sm mxl:w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="w-110 mt-16 text-sm mxl:w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
        </>
    )
}