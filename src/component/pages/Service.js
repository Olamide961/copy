import { text } from "@fortawesome/fontawesome-svg-core"
import ServiceCard from "../internalComp/ServiceCard"
export default function Service () {
    return (

        <>
        <div className="mt-40 mx-20">
            <h1 className="ml-28 text-5xl text-black-900">Services</h1>
            <div className="flex flex-row justify-center gap-7 mt-5">
                <ServiceCard person={{
                    text: "Networking",
                }}/>

                <ServiceCard person={{
                    text: "System Maintenance",
                }}/>

                <ServiceCard person={{
                    text: "Access Control",
                }}/>

                <ServiceCard person={{
                    text: "IT Consultant ",
                }}/>
            </div>

            <div className="flex flex-row justify-center gap-7 mt-5">

                <ServiceCard person={{
                    text: "Smart Homes",
                }}/>


                    <ServiceCard person={{
                    text: "Software Devlepoment",
                }}/>


                <ServiceCard person={{
                    text: "Procurements",
                }}/>

                <ServiceCard person={{
                    text: "Cyber Security",
                }}/>

            </div>

        </div>
        </>
    )
}