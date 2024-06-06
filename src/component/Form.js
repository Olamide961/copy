

export default function Form () {
    return (
        <>
        <div className="flex flex-row flex-nowrap mx-3 mt-10 mb-9 mlg:hidden">
            <div className="grow text-center">
                <h3 className="subpixel-antialiased text-xl ">BROWSE PRODUCTS</h3>

                <div className="flex flex-wrap gap-4 justify-center mt-4">
                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl"  />
                        <p>6te9 tech</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl" src="" alt=""  />
                        <p>6te9 media</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl" src="" alt=""  />
                        <p>6te9 culinary</p>
                    </div>
                </div>
            </div>

            <div className="grow text-center">
                <h4 className="subpixel-antialiased text-xl">Inquiry/Contact Us</h4>

                <form>
                    <div className="flex flex-col h-auto mb-6 mt-7 ">
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


        <div className="flex flex-col flex-nowrap mx-3 mt-10 mb-9 lg:hidden">
            <div className="grow text-center">
                <h3 className="subpixel-antialiased text-xl ">BROWSE PRODUCTS</h3>

                <div className="flex flex-row gap-4 justify-center mt-4">
                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl"  />
                        <p>6te9 tech</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl" src="" alt=""  />
                        <p>6te9 media</p>
                    </div>

                    <div>
                        <div className="w-40 h-40 border border-black rounded-2xl" src="" alt=""  />
                        <p>6te9 culinary</p>
                    </div>
                </div>
            </div>

            <div className="grow text-center mt-9">
                <h4 className="subpixel-antialiased text-xl">Inquiry/Contact Us</h4>

                <form>
                    <div className="flex flex-col h-auto mb-6 mt-7 ">
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
        </>
    )
}