"use client";

import React, { useState } from "react";
import EyesIcon from "../../../public/socket/eyes.svg";
import MinusIcon from "../../../public/socket/minus.svg";
import PlusIcon from "../../../public/socket/plus.svg";
import RemoveIcon from "../../../public/socket/remove.svg";
import EditIcon from "../../../public/socket/edit.svg";

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [hours, setHours] = useState(1);

  const handleToggle = () => {
    setIsEnabled((prevState) => !prevState);
  };

  const decrementHours = () => {
    setHours((prevHours) => (prevHours > 1 ? prevHours - 1 : prevHours));
  };

  const incrementHours = () => {
    setHours((prevHours) => (prevHours < 24 ? prevHours + 1 : prevHours));
  };

  const getHourLabel = (hours: number) => {
    if (hours === 1) return "час";
    if (hours >= 2 && hours <= 4) return "часа";
    if (hours >= 5 && hours <= 20) return "часов";
    if (hours % 10 === 1 && hours !== 11) return "час";
    if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours))
      return "часа";
    return "часов";
  };

  return (
    <div className="p-4 flex flex-col w-full">
      <div className="flex-shrink flex-col gap-4">
        <div className="font-open-semibold text-4xl sm:text-5xl flex items-center gap-4">
          <div>Розетка №1</div>
          <div className="flex items-center gap-2">
          <div className="w-[36px]  md:w-[46px] h-[36px]  md:h-[46px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-[32px] shadow-[0px_4px_12px_0px_rgba(35,69,30,0.10)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.25)] shadow-[inset_2px_-2px_4px_0px_rgba(0,0,0,0.05)] border border-black/10 overflow-hidden cursor-pointer flex items-center justify-center">
                <EditIcon className='flex-shrink-0 w-[22px] h-[22px]'/>
            </div>
            <div className="w-[36px]  md:w-[46px] h-[36px]  md:h-[46px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-[32px] shadow-[0px_4px_12px_0px_rgba(35,69,30,0.10)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.25)] shadow-[inset_2px_-2px_4px_0px_rgba(0,0,0,0.05)] border border-black/10 overflow-hidden cursor-pointer flex items-center justify-center">
                <RemoveIcon className='flex-shrink-0 w-[20px] h-[20px]'/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isEnabled ? (
            <span className="font-open text-xl">В сети</span>
          ) : (
            <span className="font-open text-xl">Не в сети</span>
          )}
          <div
            className={`w-[38px] h-[18px] relative rounded-xl overflow-hidden 
              shadow-[-4px_4px_4px_rgba(0,0,0,0.05)] 
              shadow-[4px_-4px_4px_rgba(255,255,255,0.05)] 
              shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.5)] 
              shadow-[inset_2px_-2px_12px_rgba(0,0,0,0.05)] 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
              ${isEnabled ? "bg-[#38a3a5] before:bg-[#38a3a5]" : "bg-[#FF4848] before:bg-[#FF4848] !w-[18px] rounded-full"}`}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-between">
        <div className="flex items-center justify-center h-full">
          <div className="w-[260px] h-[260px] relative">
            <div
              className={`w-[260px] h-[260px] left-0 top-0 absolute bg-gradient-to-b ${
                isEnabled
                  ? "from-[#38A3A5] to-[#80ED99]"
                  : "from-[#7a0000] to-[#FF4848]"
              } rounded-full shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[4px_-4px_4px_0px_rgba(255,255,255,0.05)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.50)] shadow-[inset_2px_-2px_12px_0px_rgba(0,0,0,0.05)]`}
            ></div>

            <div
              className={`w-56 h-56 left-[18px] top-[18px] absolute bg-gradient-to-b ${
                isEnabled
                  ? "from-[#38A3A5] to-[#80ED99]"
                  : "from-[#7a0000] to-[#FF4848]"
              } rounded-full shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.50)] shadow-[inset_2px_-2px_12px_0px_rgba(0,0,0,0.05)]`}
            />
            <div className="w-[197px] h-[197px] flex items-center justify-center left-[31px] top-[31px] absolute bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-full shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[4px_-4px_4px_0px_rgba(255,255,255,0.05)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.50)] shadow-[inset_2px_-2px_12px_0px_rgba(0,0,0,0.05)]">
              <EyesIcon className="w-[140px] h-[37px] " />
            </div>
          </div>
        </div>
        <div className="">
            <div className="mt-[5px] flex-1">
              <div className="max-w-[392px] w-full h-[75px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-xl shadow-md border border-[#ced4da] flex items-center justify-between px-6">
                <div
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  onClick={decrementHours}
                >
                  <MinusIcon className="w-[32px] h-[32px]" />
                </div>
                <div className="text-center">
                  <div className="text-[15px] font-open text-[#1a1a1a]">
                    Время работы
                  </div>
                  <div className="text-2xl font-open-semibold text-[#1a1a1a]">
                    {hours} {getHourLabel(hours)}
                  </div>
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  onClick={incrementHours}
                >
                  <PlusIcon className="w-[32px] h-[32px]" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleToggle}
                className={`max-w-[190px] w-full h-[55px] font-open-semibold text-xl rounded-[32px] overflow-hidden border transition-all duration-300 transform 
                  ${
                    isEnabled
                      ? "text-[#1a1a1a] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] border-[#ced4da]"
                      : "text-white bg-[#38a3a5]"
                  }`}
              >
                Включить
              </button>
              <button
                onClick={handleToggle}
                className={`max-w-[190px] w-full h-[55px] font-open-semibold text-xl rounded-[32px] overflow-hidden border transition-all duration-300 transform 
                  ${
                    isEnabled
                      ? "text-white bg-[#38a3a5]"
                      : "text-[#1a1a1a] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] border-[#ced4da]"
                  }`}
              >
                Выключить
              </button>
            </div>
            <div className="mt-6 font-open text-base max-w-[392px] text-center">
              Savelectric автоматически включит розетку в часы с самой низкой
              стоимостью электроэнергии
            </div>
        </div>
      </div>
    </div>
  );
}
