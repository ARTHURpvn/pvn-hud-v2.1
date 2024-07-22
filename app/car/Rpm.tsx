import { useEffect, useRef } from "react"

export default function Rpm({RpmValue}: {RpmValue: number}) {
    const circle = useRef(null)
    useEffect(() => {
        const input : any = circle.current;
        const circumference = 116; // 791
    
        if (input) {
            const teste = RpmValue; 
            const offset = 676 + (circumference - (teste  / 100) * circumference)
            input.style.strokeDashoffset = offset;
        }
    }, [RpmValue]); 

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" className="absolute bottom-5 right-10">
            <circle
                cx="150"
                cy="150"
                r="126"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="gray"
                fill="none"
                strokeDashoffset="680"
                strokeDasharray="791"
                className="-rotate-[115deg] origin-center translate-y-5"
            />

            <circle
                cx="150"
                cy="150"
                r="126"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="#ff0400"
                fill="none"
                strokeDashoffset="791"
                strokeDasharray="791"
                className="-rotate-[115deg] origin-center translate-y-5  transition-all ease-linear duration-500"

                ref={circle}
                style={{filter: `drop-shadow(0px 0px 6px #ff0400e7)` }}
            />
        </svg>
    )
}