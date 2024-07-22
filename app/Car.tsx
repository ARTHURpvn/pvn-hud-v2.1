import Speedometer from "./car/Speedometer";
import Rpm from "./car/Rpm";
import Fuel from "./car/Fuel";
import Engine from "./car/Engine";
import Gear from "./car/Gear";
import Icon from './car/Icons'

type carProps = {
    SpeedometerValue: number,
    Speed: number,
    RpmValue: number,
    FuelLevel: number,
    EngineValue: number,
    GearValue: number,
    LastGear: number,
    BeltLock: boolean,
    Locked: boolean,
}

export default function Car({SpeedometerValue, Speed, RpmValue, FuelLevel, EngineValue, GearValue, LastGear, BeltLock, Locked}: carProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" className="absolute bottom-0 right-5">
            <circle cy="150" cx="150" r="124" fill="#131313da" className="backdrop-blur"/>
            <Speedometer SpeedometerValue={SpeedometerValue}/>
            <Rpm RpmValue={RpmValue}/>
            <Fuel FuelLevel={FuelLevel}/>
            <Engine EngineValue={EngineValue}/>

            { Speed >= 100 ? (
                <text
                    x="90"
                    y="145" 
                    fontFamily="Arial" 
                    fontSize="60" 
                    fill="white" 
                    className="font-black tracking-wide" 
                    style={{filter: `drop-shadow(0px 0px 2px #ffffffe7)` }}>
                    {Speed}
                </text>
            ): null }

            { Speed >= 10 && Speed < 100 ? (
                <>
                    <text
                        x="90"
                        y="145" 
                        fontFamily="Arial" 
                        fontSize="60" 
                        fill="gray" 
                        className="font-black tracking-wide">
                        0
                    </text>

                    <text
                        x="132"
                        y="145" 
                        fontFamily="Arial" 
                        fontSize="60" 
                        fill="white" 
                        className="font-black tracking-wide" 
                        style={{filter: `drop-shadow(0px 0px 2px #ffffffe7)` }}>
                        {Speed}
                    </text>
                </>
            ) : null }
            

            { Speed < 10 ? (                
                <>
                    <text
                        x="90"
                        y="145" 
                        fontFamily="Arial" 
                        fontSize="60" 
                        fill="gray" 
                        className="font-black tracking-wide">
                        0
                    </text>

                    <text
                        x="132"
                        y="145" 
                        fontFamily="Arial" 
                        fontSize="60" 
                        fill="white" 
                        className="font-black tracking-wide" 
                        style={{filter: `drop-shadow(0px 0px 2px #ffffffe7)` }}>
                        0{Speed}
                    </text>
                </>
            ) : null }
            
            <text 
                x="125" 
                y="170" 
                fontFamily="Arial" 
                fontSize="20" 
                fill="gray" 
                className="font-bold">
                Km/h
            </text>

            <Gear GearValue={GearValue} LastGear={LastGear}/>
            <Icon BeltLock={BeltLock} Locked={Locked}/>
        </svg>
    )
}
