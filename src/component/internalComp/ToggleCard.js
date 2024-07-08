
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faPlay } from '@fortawesome/free-solid-svg-icons'

const  ToggleCard = () => {
    return (
<>
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
</>
    );

}

 export default ToggleCard; 