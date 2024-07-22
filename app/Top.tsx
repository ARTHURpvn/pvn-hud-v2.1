import Microfone from "./talking/Microfone"
import Radio from "./talking/Radio"

type topProps = {
    talkMode: number,
    isTalking: boolean
    radioTalking: boolean
    frequency: number
}

export default function Top({talkMode, isTalking, frequency, radioTalking}: topProps) {
    return (
        <div className="flex gap-3">
            { frequency > 0 ? (
                <Radio frequency={frequency} radioTalking={radioTalking}/>
            ):null }

            <Microfone isTalking={isTalking} talkMode={talkMode}/>
        </div>
    )
}