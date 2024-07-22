import { useRef, useEffect } from "react"

export default function Fuel({FuelLevel}: {FuelLevel: number}) {    
    const circle = useRef(null)
    useEffect(() => {
        const input : any = circle.current;
        const circumference = 135;
    
        if (input) {
            const teste = FuelLevel; 
            const offset = (circumference - (teste / 100) * circumference) + 705
            input.style.strokeDashoffset = offset;
        }
    }, [FuelLevel]); 

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" className="absolute bottom-5 right-10">
            <circle
                cx="150"
                cy="150"
                r="135"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="#5e5e5ee1"
                fill="none"
                strokeDashoffset="705"
                strokeDasharray="847"
                className="rotate-[137deg] origin-center -translate-x-2 translate-y-1"
            />

            <circle
                cx="150"
                cy="150"
                r="135"
                strokeWidth="7"
                strokeLinecap="round"
                stroke="#e5ff00"
                fill="none"
                strokeDashoffset="705"
                strokeDasharray="847"
                className="rotate-[137deg] origin-center -translate-x-2 translate-y-1 transition-all ease-linear duration-500"

                ref={circle}
                style={{filter: `drop-shadow(0px 0px 6px #e5ff00e7)` }}
            />
        </svg>
    )
}