import React from "react";
import LogoIcon from "../../../../public/logo.svg";
import UserIcon from "../../../../public/login/person.svg";
import KeyIcon from "../../../../public/login/key.svg";
import ArrowIcon from "../../../../public/login/arrow-forward.svg";

const Page: React.FC = () => {
  return (
    <div className="w-full flex flex-col pl-6 md:pl-10 xl:pl-24">
      <div>
        <LogoIcon className="w-[138px] h-[195px] xs:w-[120px] xs:h-[171px] mb-0 md:mb-6" />
        <form className="max-w-[270px]  xs:max-w-[300px] md:max-w-[400px] 2xl:max-w-[500px] w-full">
          <div className="relative mb-6">
            <UserIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] absolute top-[10px] xs:top-[20px] md:top-[15px] left-[10px]" />
            <input
              type="text"
              placeholder="Логин"
              className="py-3 xs:py-5 pl-10 md:pl-14 pr-3 w-full border-b-2 border-gray-300 focus:border-[#38A3A5] outline-none bg-transparent"
            />
          </div>
          <div className="relative">
            <KeyIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] absolute top-[10px] xs:top-[20px] md:top-[15px] left-[10px]" />
            <input
              type="password"
              placeholder="Пароль"
              className="py-3 xs:py-5 pl-10 md:pl-14 pr-3 w-full border-b-2 border-gray-300 focus:border-[#38A3A5] outline-none bg-transparent"
            />
          </div>
          <button className="mt-10 w-full h-[60px] md:h-[78px] flex items-center justify-between relative bg-white rounded-[18px] shadow-[2px_2px_0px_0px_rgba(56,163,165,1.00)] border-2 border-[#38a3a5] overflow-hidden text-left font-open-semibold text-xl md:text-2xl px-4 transition-transform duration-150 active:scale-95">
            Войти
            <ArrowIcon className="w-[38px] h-[38px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
