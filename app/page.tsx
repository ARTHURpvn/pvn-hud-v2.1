'use client'
import React, { useEffect, useState } from "react";
import Essencial from "./Essencial";
import Car from "./Car";
import Top from "./Top";

export default function Page() {
  const [person, setPerson] = useState({
    health: 100,
    armour: 100,
    thirst: 100,
    hunger: 100,
    stamina: 30,
    oxigen: 50,
  });

  const [talk, setTalk] = useState({
    micMode: 1,
    radioChannel: 0,
    isTalkingMic: false,
    isTalkingRadio: false
  });

  const [vehicle, setVehicle] = useState({
    isInVehicle        : true,
    vehicleLock        : true,
    beltLock           : true,
    vehicleVelocity    : 999,
    vehicleMaxVelocity : 100,
    vehicleFuel        : 100,
    vehicleHealth      : 100,
    rpm                : 100,
    gear               : 0,
    maxGear            : 7,
  });

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      const data = e.data;

      if (data.type === 'perso') {
        setPerson({
          health: data.health,
          armour: data.armour,
          thirst: data.thirst,
          hunger: data.hunger,
          stamina: data.stamina,
          oxigen: data.oxigen,
        });
      }

      if (data.type === 'talk') {
        setTalk({
          micMode: data.micMode,
          radioChannel: data.radioChannel,
          isTalkingMic: data.isTalkingMic,
          isTalkingRadio: data.isTalkingRadio
        })

      }

      if (data.type === 'vehicle') {
        setVehicle({
          isInVehicle        : data.isInVehicle,
          vehicleLock        : data.vehicleLock,
          beltLock           : data.beltLock,
          vehicleVelocity    : data.vehicleVelocity,
          vehicleMaxVelocity : data.vehicleMaxVelocity,
          vehicleFuel        : data.vehicleFuel,
          vehicleHealth      : data.vehicleHealth,
          rpm      : data.rpm,
          gear     : data.gear,
          maxGear  : data.maxGear,
        })

      }
    };

    window.addEventListener('message', messageHandler);
    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="absolute top-3 right-3">
        <Top talkMode={talk.micMode} isTalking={talk.isTalkingMic} frequency={talk.radioChannel} radioTalking={talk.isTalkingRadio}/>
      </div>

      { vehicle.isInVehicle ? (
        <div id="car">
          <Car SpeedometerValue={vehicle.vehicleMaxVelocity} Speed={vehicle.vehicleVelocity} RpmValue={vehicle.rpm} FuelLevel={vehicle.vehicleFuel} EngineValue={vehicle.vehicleHealth} GearValue={vehicle.gear} LastGear={vehicle.maxGear} BeltLock={vehicle.beltLock} Locked={vehicle.vehicleLock}/>
        </div>
      ): null }


      <div id="essencial" className="absolute flex bottom-2 left-2">
        <Essencial type='Health' value={person.health} isEnding={false}/>
        <Essencial type='Armour' value={person.armour} isEnding={false}/>
        <Essencial type='Thirst' value={person.thirst} isEnding={false}/>
        <Essencial type='Hunger' value={person.hunger} isEnding={false}/>

        { person.stamina < 100 && person.stamina > 21 ? ( 
          <Essencial type='Stamine' value={person.stamina} isEnding={false}/>

        ) : person.stamina <= 20 ? (
          <Essencial type='Stamine' value={person.stamina} isEnding={true}/>
        ) : null }

        { person.oxigen < 100 ? ( 
          <Essencial type='Oxigen' value={person.oxigen} isEnding={false}/>
        ) : null }
      </div>
    </div>
  )
}