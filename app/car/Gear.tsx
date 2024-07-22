export default function Gear({GearValue, LastGear}: {GearValue: number, LastGear: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" className="absolute bottom-5 right-10">
             <text 
                x="117" 
                y="250" 
                fontFamily="Arial" 
                fontSize="20" 
                fill="#b1b983" 
                className="font-bold">
                {GearValue == 1 ? (
                    "N"
                ): GearValue == 0 ? null: GearValue - 1}
            </text>

            {GearValue >= 1 ? (
                <circle
                    cx="122"
                    cy="225"
                    r="2"
                    fill="#b1b983"
                />
            ) : null}
           
             <text 
                x="143" 
                y="255" 
                fontFamily="Arial" 
                fontSize="26" 
                fill="#e5ff00" 
                style={{filter: `drop-shadow(0px 0px 2px #e5ff00e7)` }}
                className="font-bold">
                {GearValue == 0? "R" : GearValue}
            </text>

            <circle
                cx="150"
                cy="223"
                r="3"
                fill="#e5ff00"
            />

            <text 
                x="172" 
                y="250" 
                fontFamily="Arial" 
                fontSize="20" 
                fill="#b1b983" 
                className="font-bold">
                {GearValue >= LastGear ? null : (GearValue + 1) }
            </text>
            
            {GearValue >= LastGear ? null : (
                <circle
                    cx="176"
                    cy="225"
                    r="2"
                    fill="#b1b983"
                />
            ) }

        </svg>
    )
}