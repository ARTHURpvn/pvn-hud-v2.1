type radioProps = {
    frequency: number
    radioTalking: boolean
}

export default function Radio({frequency, radioTalking}:radioProps) {
    var cx = 25
    var cy = 25
    var width = 50
    var x = 13
    var color = "#5e5e5e"

    if (frequency > 0) {
        cx = 90
        cy = -35
        width = 180
        x = 17
    }

    if (radioTalking) {
        color = "#FFFFFF"
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height="50">
            <circle
                cx={cx}
                cy={cy}
                r="20"
                strokeWidth="2"
                strokeLinecap="round"
                stroke={color}
                fill="none"
                strokeDashoffset="0"
                strokeDasharray="125"
                className="-rotate-90 origin-center"
                style={{filter: `drop-shadow(0px 0px 4px ${color}e7)` }}
            />

            {frequency > 0 ? (
                
                <svg>
                    <rect 
                        x="60" 
                        y="6" 
                        rx={20} 
                        width="110" 
                        height="40" 
                        stroke={color}
                        strokeWidth="2" 
                        fill="none"
                        style={{filter: `drop-shadow(0px 0px 4px ${color}e7)` }}
                    />

                    <text 
                        x="80" 
                        y="34" 
                        fontFamily="Arial" 
                        fontSize="25" 
                        fill="white" 
                        className="font-bold"
                        style={{filter: `drop-shadow(0px 0px 2px #FFFFFFe7)` }}>
                        {frequency}
                    </text>

                    <text 
                        x="130" 
                        y="33" 
                        fontFamily="Arial" 
                        fontSize="12" 
                        fill="gray" 
                        className="font-bold">
                        Mhz
                    </text>
                </svg>
                
            ) : null}

            <path 
            d="m223.195,70h-49.221v-14.25c0-8.837-7.163-16-16-16-8.837,0-16,7.163-16,16v14.25h-15.322v-54c0-8.837-7.163-16-16-16s-16,7.163-16,16v54h-3.899c-9.472,0-17.153,7.678-17.153,17.15 0,5.341 0,11.714 0,18.858-0.052,0-0.103-0.008-0.155-0.008-8.723,0-15.794,7.071-15.794,15.794v15.663c0,8.723 7.071,15.794 15.794,15.794 0.052,0 0.103-0.007 0.155-0.008 0,46.564 0,100.454 0,127.608 0,9.474 7.678,17.15 17.153,17.15h132.442c9.472,0 17.153-7.678 17.153-17.15 0-42.608 0-151.056 0-193.7 2.84217e-14-9.476-7.678-17.151-17.153-17.151zm-13.709,59.363c0,2.975-2.411,5.387-5.386,5.387h-94.251c-2.975,0-5.386-2.412-5.386-5.387v-30.227c0-2.975 2.412-5.386 5.386-5.386h94.251c2.975,0 5.386,2.412 5.386,5.386v30.227z"
            fill={color}
            transform={`translate(${x}, 12) scale(.08)`}
            />
        </svg>
    )
}