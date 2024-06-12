

export default function Form () {
    return (
        <>
        <div className="flex flex-row flex-nowrap mx-3 mt-10 mb-40 mlg:hidden">
            <div className="grow text-center">
                <h3 className="subpixel-antialiased text-xl ">BROWSE PRODUCTS</h3>

                <div className="flex flex-wrap gap-4 justify-center mt-6 mmd:hidden">
                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl mmd:hidden" />
                        <a href="/Tech">6te9 tech</a>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl" />
                        <p>6te9 media</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl " />
                        <p>6te9 culinary</p>
                    </div>
                </div>
            </div>

            <div className="grow text-center">
                <h4 className="subpixel-antialiased text-xl">Inquiry/Contact Us</h4>

                <form>
                    <div className="flex flex-col h-auto mb-6 mt-7 msm:hidden">
                        <div className="mb-4">
                            <label for="name">Name: </label>
                            <input type="text" className="border ml-12 w-80 h-12 rounded-xl shadow-xl text-sm p-2.5" placeholder="John Doe" />
                        </div>

                        <div className="mb-1">
                            <label for="email">Email: </label>
                            <input type="text" className="border ml-12 w-80 h-12 rounded-xl shadow-xl text-sm p-2.5" placeholder="Example@gmail.com" />
                        </div>

                        <div className="mb-1">
                            <p className=""><input type="checkbox"></input>what us to give you a call</p>
                        </div>

                        <div className="mb-4">
                            <label for="phone">phone No: </label>
                            <input type="text" className="border ml-5 w-80 h-12 rounded-xl shadow-xl text-sm p-2.5" placeholder="************" />
                        </div>

                        <div className="mb-3">
                            <label for="message" className="inline-block">Message: </label>
                            <textarea id="message" className="border w-80 ml-6 h-48 rounded-xl shadow-xl text-sm p-2.5" placeholder="Give your comment........." />
                        </div>
                        
                        <div className="">
                            <button type="button" className="border text-black h-10 w-24 shadow-2xl rounded-xl shadow-gray-900 float-center ml-72">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <div className="flex flex-col flex-nowrap mx-3 mt-10 mb-40 lg:hidden">
            <div className="grow text-center">
                <h3 className="subpixel-antialiased text-xl ">BROWSE PRODUCTS</h3>

                <div className="flex flex-row gap-4 justify-center mt-4 msm:mt-7">
                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl msm:w-28 msm:h-32"  />
                        <p>6te9 tech</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl msm:w-28 msm:h-32" src="" alt=""  />
                        <p>6te9 media</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl msm:w-28 msm:h-32" src="" alt=""  />
                        <p>6te9 culinary</p>
                    </div>
                </div>
            </div>

            <div className="grow text-center mt-9 ">
                <h4 className="subpixel-antialiased text-xl">Inquiry/Contact Us</h4>

                <form className="w-96 msm:mt-5 msm:w-84">
                        <div className="mb-4 flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-black-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"><p className="mt-2">Name: </p> </label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 msm:w-70" placeholder="John Doe"/>
                        </div>

                        <div className="flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-black-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"><p className="mt-2">Email: </p></label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 msm:w-70" placeholder="Example@gmail.com" />
                        </div>

                        <div className="flex justify-end">
                            <p className="text-sm">what us to give you a call ?<input type="checkbox" className="ml-1"></input></p>
                        </div>

                        <div className="mb-4 flex flex-row font-sans text-black-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            <label for="name" className="h-12 w-24"><p className="mt-2">Phone No:</p></label>
                            <input type="text" className="border peer h-12 w-72 shadow-lg rounded-md border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 msm:w-70" placeholder="**********"/>
                        </div>

                        <div className="flex flex-row">
                            <label for="name" className="h-12 w-24 font-sans text-black-400 antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">Message: </label>
                            <textarea className="border peer rounded-md h-28 w-72 shadow-lg border-blue-gray-200 !border-t-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 msm:70" placeholder="Write content............."/>
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
        </div>
        </>
    )
}