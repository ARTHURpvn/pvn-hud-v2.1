type microfoneProps = {
    isTalking: boolean
    talkMode: number
}

export default function Microfone({isTalking, talkMode}: microfoneProps) {
    var valueMode : number = 2
    var talkColor : string = "#5e5e5e"

    if (isTalking) {
        talkColor = "#FFFFFF"
    }

    if (talkMode == 1) {
        valueMode = 84
    } else if (talkMode == 2) {
        valueMode = 42
    } else {
        valueMode = 0
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
            <circle
                cx="25"
                cy="25"
                r="20"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#5e5e5e"
                fill="none"
                strokeDashoffset="0"
                strokeDasharray="125"
                className="-rotate-90 origin-center"
            />
            
            <circle
                cx="25"
                cy="25"
                r="20"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="#FFFFFF"
                fill="none"
                strokeDashoffset={valueMode}
                strokeDasharray="125"
                className="-rotate-90 origin-center transition-all ease-linear duration-150"
                style={{filter: `drop-shadow(0px 0px 4px #FFFFFFe7)` }}
            />

            <path
                d="M118,333 C121.866,333 125,329.866 125,326 L125,316 C125,312.134 121.866,309 118,309 C114.134,309 111,312.134 111,316 L111,326 C111,329.866 114.134,333 118,333 L118,333 Z M129,328 L127,328 C126.089,332.007 122.282,335 118,335 C113.718,335 109.911,332.007 109,328 L107,328 C107.883,332.799 112.063,336.51 117,336.955 L117,339 L116,339 C115.448,339 115,339.448 115,340 C115,340.553 115.448,341 116,341 L120,341 C120.552,341 121,340.553 121,340 C121,339.448 120.552,339 120,339 L119,339 L119,336.955 C123.937,336.51 128.117,332.799 129,328 L129,328 Z"
                transform={`translate(-46, -170) scale(.6)`}
                fill={talkColor}
                style={{filter: `drop-shadow(0px 0px 6px ${talkColor}7)` }}
            />
        </svg>
    )
}