import React from 'react';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
const TopNav = () => {
  return (
    <header className="bg-[#1fc213] text-white py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center font-heading text-lg space-y-2 md:space-y-0">
      <ForwardToInboxOutlinedIcon/>
        <a href="mailto:gorkhaadventure@gmail.com" className="mr-0 md:mr-4">
          gorkhaadventure@gmail.com
        </a>
        <PhoneInTalkOutlinedIcon/>
        <a href="tel:+9779840349079" className="">
          +977 9840349079
        </a>
      </div>
      <div className="flex items-center text-lg space-x-4">
        <select className="bg-transparent border-none outline-none cursor-pointer">
          <option value="eng" className="text-black">ENG</option>
          <option value="french" className="text-black">French</option>
          <option value="chinese" className="text-black">Chinese</option>
        </select>
        <button className="">SIGN IN</button>
      </div>
    </header>
  );
};

export default TopNav;
