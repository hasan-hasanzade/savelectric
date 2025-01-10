"use client";

import React, { useState, useRef, useEffect } from "react";
import LogoIcon from "../../../../public/logo-main.svg";
import ArrowIcon from "../../../../public/auth-header/arrow-down.svg";
import MinusIcon from "../../../../public/socket/minus.svg";
import PlusIcon from "../../../../public/socket/plus.svg";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedSocket, setSelectedSocket] = useState("Розетка №1");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);
  const selectLanguage = (language: string) => {
    setSelectedSocket(language);
    setOpen(false);
  };

  const sockets = ["Розетка №1", "Розетка №2", "Розетка №3"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 flex justify-between items-center h-[70px] md:h-full  border-b border-gray-200 flex gap-2">
      <LogoIcon className="w-[131px] md:w-[144px] h-[31px] md:h-[68px]" />
      <div>
        <div className="flex gap-2 md:gap-4">
            <div className="relative" ref={dropdownRef}>
              <div className="w-full">
                <div
                  className="w-[158px] md:w-[170px] w-full h-[36px] md:h-[46px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-[32px] shadow-[0px_4px_12px_0px_rgba(35,69,30,0.10)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.25)] shadow-[inset_2px_-2px_4px_0px_rgba(0,0,0,0.05)] border border-black/10 overflow-hidden cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center h-full p-3">
                    <div className="font-open text-[17px] ml-2 md:ml-[10px] mr-2 md:mr-[19px] w-full">
                      {selectedSocket}
                    </div>
                    <ArrowIcon width={24} height={24} />
                  </div>
                </div>
                {open && (
                  <div className="absolute top-[60px] left-[2px] bg-white shadow-lg rounded-[12px] border border-gray-200 z-10 max-w-[176px] w-full  bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] border border-[#ced4da] flex-col justify-start items-center inline-flex overflow-hidden gap-1">
                    {sockets.map((sockets) => (
                      <div
                        key={sockets}
                        onClick={() => selectLanguage(sockets)}
                        className="hover:bg-gray-100 cursor-pointer font-open text-[17px] w-full p-2 text-center"
                      >
                        {sockets}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-[36px]  md:w-[46px] h-[36px]  md:h-[46px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-[32px] shadow-[0px_4px_12px_0px_rgba(35,69,30,0.10)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.25)] shadow-[inset_2px_-2px_4px_0px_rgba(0,0,0,0.05)] border border-black/10 overflow-hidden cursor-pointer flex items-center justify-center">
                <PlusIcon />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
