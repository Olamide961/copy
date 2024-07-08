import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faPlay } from '@fortawesome/free-solid-svg-icons';
import  ToggleCard from '../internalComp/ToggleCard'


export default function Product() {
    return (
        <>
        <div className="mt-40 mx-9">
            <h1 className="subpixel antialiased font-semibold text-gray-500 text-5xl ml-20">Business Solution</h1>
            <div className="flex mt-18 flex-row justify-start gap-28 w-full">
                <ToggleCard />
                <ToggleCard />
            </div>
        </div>
        </>
    );
}