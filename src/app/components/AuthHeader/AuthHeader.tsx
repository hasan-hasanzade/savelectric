'use client'

import React, { useState, useEffect, useRef } from 'react';
import WebIcon from '../../../../public/auth-header/web.svg';
import ArrowIcon from '../../../../public/auth-header/arrow-down.svg';

const AuthHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setOpen(false);
  };

  const languages = ['Русский', 'English', 'Suomi'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="h-20 max-h-full flex items-center justify-start">
      <div className="px-6 relative" ref={dropdownRef}>
        <div className="w-full">
          <div
            className="w-[165px] w-full h-[46px] bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-[32px] shadow-[0px_4px_12px_0px_rgba(35,69,30,0.10)] shadow-[inset_-2px_2px_4px_0px_rgba(255,255,255,0.25)] shadow-[inset_2px_-2px_4px_0px_rgba(0,0,0,0.05)] border border-black/10 overflow-hidden cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center h-full p-3">
              <WebIcon width={24} height={24} />
              <div className="font-open text-[17px] ml-[10px] mr-[19px] w-[60px]">{selectedLanguage}</div>
              <ArrowIcon width={24} height={24} />
            </div>
          </div>
          {open && (
            <div className="absolute top-[60px] left-[26px] bg-white shadow-lg rounded-[12px] border border-gray-200 z-10 max-w-[156px] w-full  bg-gradient-to-b from-[#e7ede6] to-[#f8f9fa] rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] border border-[#ced4da] flex-col justify-start items-center inline-flex overflow-hidden gap-1">
              {languages.map((language) => (
                <div
                  key={language}
                  onClick={() => selectLanguage(language)}
                  className="hover:bg-gray-100 cursor-pointer font-open text-[17px] w-full p-2 text-center"
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
