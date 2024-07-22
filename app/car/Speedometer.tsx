import { useEffect, useRef } from "react"

export default function Speedometer({SpeedometerValue}: {SpeedometerValue: number}) {
    const circle = useRef(null)
    useEffect(() => {
        const input : any = circle.current;
        const circumference = 2 * Math.PI * 95
    
        if (input) {
            const teste = SpeedometerValue; 
            const offset = (circumference - (teste / 100) * circumference) + 197
            input.style.strokeDashoffset = offset
        }
    }, [SpeedometerValue]); 

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" className="absolute bottom-5 right-10">
            <circle
                cx="150"
                cy="150"
                r="126"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="#5e5e5ee1"
                fill="none"
                strokeDashoffset="197"
                strokeDasharray="791"
                className="rotate-[134deg] origin-center"
            />

            <circle
                cx="150"
                cy="150"
                r="126"
                strokeWidth="7"
                strokeLinecap="round"
                stroke="white"
                fill="none"
                strokeDashoffset="791"
                strokeDasharray="791"
                className="rotate-[134deg] origin-center transition-all ease-linear duration-1000"
                
                ref={circle}
                style={{filter: `drop-shadow(0px 0px 3px #ffffffe7)` }}
            />
        </svg>
    )
}