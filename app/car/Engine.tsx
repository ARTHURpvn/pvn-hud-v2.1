import { useRef, useEffect } from "react";

export default function Engine({EngineValue}: {EngineValue: number}) {
    const circle = useRef(null)

    useEffect(() => {
        const input : any = circle.current;
        const circumference = -135;
    
        if (input) {
            const teste = EngineValue; 
            const offset = -705 + (circumference - (teste / 100) * circumference) 
            input.style.strokeDashoffset = offset;
        }
    }, [EngineValue]); 
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
            <circle
                cx="150"
                cy="150"
                r="135"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="#5e5e5ee1"
                fill="none"
                strokeDashoffset="-705"
                strokeDasharray="847"
                className="rotate-[40deg] origin-center translate-x-2 translate-y-1"
            />

            <circle
                cx="150"
                cy="150"
                r="135"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="#ff0400"
                fill="none"
                strokeDashoffset="-705"
                strokeDasharray="847"
                className="rotate-[40deg] origin-center translate-x-2 translate-y-1 transition-all ease-linear duration-1000"

                ref={circle}
                style={{filter: `drop-shadow(0px 0px 6px #ff0400e7)` }}
            />
        </svg>
    )
}