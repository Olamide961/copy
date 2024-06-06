import React, { useState, useEffect} from "react";

export default function Carousel () {

    return (
        <>
        <div className="h-96 mt-9 bg-gray-300 mx-4 rounded-3xl">
            <div className="flex justify-center">
                <p className="mt-40 text-5xl text-gray-500">optimize
                     evolve  transend</p>
            </div>
        </div>
        </>
    )
   {/* const [currentState, setCurrentState] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState===2) {
                setCurrentState(0)
            }else {
                setCurrentState(currentState+1)
            }
        },5000)
        return () => clearTimeout(timer)
    },[currentState])

    const imageSlide = [
        {
            img : "#d8d8d8",
            text : "Optimize",
        },
        {
            img : "#d8d8d8",
            text : "Evolve"
        },
        {
            img : "#d8d8d8",
            text : "Transend"
        }
    ]

    const bgImageStyle = {
        backgroundImage : `img(${imageSlide[currentState].img})`,
    }
    return (
        <>
        <div className="bg-gray-700 opacity-50 rounded-lg mx-2 mt-4 relative">
                <img className="w-full-96" src="" alt="" />
                <div className="absolute  inset-x-o top-36 h-20 w-full ">
                    <div className="text-4xl font-bold text-grey-700">
                        <p className=" absolute left-1/3">
                        Optimize 
                        
                        evolve 
                        
                        Transend
                    
                    </p>
                    </div>
                </div>

            <div className="h-96 rounded-lg sm:h-96 xl:h-80 2xl:h-96">
                <div style={bgImageStyle} />
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <p>{imageSlide[currentState].text}</p>
                </div>
    </div>    
            
        </div> 
    </>   
    ) */}
} 