import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Product() {
    return (
        <>
        <div className="mt-40 mx-9">
            <h1 className="subpixel antialiased font-semibold text-gray-500 text-5xl ml-20">Business Solution</h1>
            <div className="flex mt-18 flex-row justify-start gap-28 w-full">
                <div className="flex flex-row relative mt-20">
                    <div className=" border border-black w-96 h-40 rounded-xl"></div>
                    <div className="absolute border border-black w-96 h-40 left-14 -top-10 bg-white rounded-xl">
                        <div className='absolute right-0 mr-2  mt-16'>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#000000", }}/></span>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#919191", }}/></span>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#ebebeb", }}/></span>
                            <span className='ml-1'><FontAwesomeIcon className='fa-lg fa-thin' icon="fa-thin fa-play" bounce style={{ color: "000000", }} /></span>
                        </div>
                    </div>
                </div>       

                <div className="flex flex-row relative mt-20">
                    <div className="border border-black w-96 h-40 rounded-xl"></div>
                    <div className="absolute border border-black w-96 h-40 left-14 -top-10 bg-white rounded-xl">
                    <div className='absolute right-0 mr-2  mt-16'>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#000000", }}/></span>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#919191", }}/></span>
                            <span><FontAwesomeIcon className='fa-2xs' icon={faCircle} style={{color: "#ebebeb", }}/></span>
                            <span className='ml-1'><FontAwesomeIcon className='fa-lg fa-thin' icon={faPlay} bounce style={{ color: "000000", }} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}