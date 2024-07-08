import '../css/index.css';
import SideScroll from '../internalComp/SideScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faSnapchat,faTwitter,faInstagram,faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Contact () {
    return (
        <>
        <div className=" mt-40 ml-20 mr-20 mb-40 mlg:mr-9 mmd:mx-0">
            <h1 className="subpixel antialiased font-semibold text-gray-500 text-5xl mmd:text-center">Contact Us</h1>
            <div className="flex flex-row justify-between mt-9 mmd:flex mmd:flex-col ">
                <div className="mmd:flex mmd:justify-center mmd:ml-16">
                    <form className="w-96">
                        <div className="mb-4 flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-gray-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"><p className="mt-2">Name: </p> </label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="John Doe"/>
                        </div>

                        <div className="flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-gray-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"><p className="mt-2">Email: </p></label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Example@gmail.com" />
                        </div>

                        <div className="flex justify-end">
                            <p className="text-sm">what us to give you a call ?<input type="checkbox" className="ml-1"></input></p>
                        </div>

                        <div className="mb-4 flex flex-row font-sans text-gray-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            <label for="name" className="h-12 w-24"><p className="mt-2">Phone No:</p></label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="**********"/>
                        </div>

                        <div className="flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-gray-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">Message: </label>
                            <textarea className="border peer rounded-md h-28 w-72 shadow-lg border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Write content............."/>
                        </div>
                        <div className="flex justify-end mt-5">
                            <button
                                class="select-none font-sans font-bold border text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white-900 text-black shadow-lg shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button"
                                >
                                Submit
                            </button>
                        </div>    
                    </form>

                </div>

                <div className="ml-9 mmd:hidden">
                     <h6 className="text-lg text-center">Socials</h6>
                     <div className="flex flex-col mt-4">
                        <div className="flex flex-row mb-4">
                            <p className="w-9"><FontAwesomeIcon icon={faFacebook} /></p>
                            <p className="ml-9">6te9.tech</p>
                        </div>

                        <div className="flex flex-row mb-4">
                            <p className="w-9"><FontAwesomeIcon icon={faInstagram} /></p>
                            <p className="ml-9">6te9.tech</p>
                        </div>

                        <div className="flex flex-row mb-4">
                            <p className="w-9"><FontAwesomeIcon icon={faTwitter} /></p>
                            <p className="ml-9">6te9</p>
                        </div>

                        <div className="flex flex-row mb-4">
                            <p className="w-9"><FontAwesomeIcon icon={faSnapchat} /></p>
                            <p className="ml-9">6te9</p>
                        </div>

                        <div className="flex flex-row mb-4">
                            <p className="w-9"><FontAwesomeIcon icon={faTelegram} /></p>
                            <p className="ml-9">6te9</p>
                        </div>

                        <div className="flex flex-row">
                            <p className="w-9"><FontAwesomeIcon icon={faWhatsapp} /></p>
                            <p className="ml-9">08084536168</p>
                        </div>
                     </div>
                </div>

                <div className="flex flex-col mt-6 ml-9 mmd:hidden">
                  <SideScroll />
                </div>
                    
                <div className="flex flex-col md:hidden">
                    <h2 className="text-3xl ml-16 mt-16">Socials</h2>
                    <div className="flex flex-row gap-10 ml-16 mt-3">
                        <p>6te9</p>
                        <p>6te9</p>
                    </div>

                    <div className="flex flex-row gap-10 ml-16 mt-3">
                        <p>6te9</p>
                        <p>6te9</p>
                    </div>

                    <div className="flex flex-row gap-10 ml-16 mt-3">
                        <p>6te9</p>
                        <p>6te9</p>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}