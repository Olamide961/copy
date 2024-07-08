import { text } from "@fortawesome/fontawesome-svg-core"

export default function ServiceCard ({person}){

    return (
        <>
        <div>
            <div className="w-60 h-40 border border-black rounded-2xl" /> 
            <a className="flex justify-center" href="/ServiceDetails">{person.text}</a>
        </div>
        </>
    )
}