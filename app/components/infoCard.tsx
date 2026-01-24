import { ShieldCheck } from "lucide-react"

export default function InfoCard( props: {title: string; details: string[], bgColor: string} ){
    return(
        <div className={`
            hidden md:block
            absolute left-1/2 top-44 -translate-x-1/2
            w-90 ${props.bgColor} text-white border-b border-white/20
            rounded-2xl shadow-xl p-6
            opacity-0 scale-95
            group-hover:opacity-100 group-hover:scale-100
            transition-all duration-300
            z-20 
        `}>  
            <h4 className="font-medium text-lg mb-4">
            {props.title}
            </h4>
           
            <ul className="text-sm space-y-2 mb-4 text-left">
            {props.details.map((item, i) => (
                <li key={i}><ShieldCheck className="w-4 h-4 inline mr-2" /> {item}</li>
            ))}
            </ul>
        </div>
    );
}