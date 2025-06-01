import LeftIcon from '../assets/img/img1.png';
import RightIcon from '../assets/img/img3.png';
import Icon from "../assets/img/img2.png"

export default function Carousel () {
    return (
        <>
        <div className="relative h-92 flex items-center justify-center bg-white">
            <img
            src={LeftIcon}
            alt="Left Icon"
            className="absolute left-0 top-3/4 transform -translate-y-1/2 w-60" />

            <img
            src={RightIcon}
            alt="Left Icon"
            className="absolute  right-0 top-16 transform -translate-y-1/2 w-60 " />

            <div className='absolute top-0 mt-14 text-center '>
                <h1 className='text-3xl md:text-4xl font-bold mb-6'>
                    Multifaceted Operations Solution. 
                </h1>
                <button className='bg-black text-white px-6 py-2 rounded font-semibold mb-3'>
                    Explore
                </button>

                <div className='flex justify-center'>
                    <img 
                    src={Icon}
                    alt="icon"
                    className=''
                    />
                </div>

                <p className='text-sm mt-5 tracking-widest text-gray-700'>
                    EVERYONE DESERVES THE BEST
                </p>
            </div>
        </div>
        </>
    )
}  