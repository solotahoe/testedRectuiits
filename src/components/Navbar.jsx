import { useState } from 'react';
import Testsvg from '../assets/TestLogo.svg';
import homeSvg from '../assets/home_FILL0_wght300_GRAD0_opsz24.svg';
import patientSvg from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg';
import calenderSvg from '../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import chatSvg from '../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import transactionSvg from '../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import doctor from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import settings from '../assets/settings_FILL0_wght300_GRAD0_opsz24@2x.png';
import dots from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png';
import viteLogo from '/vite.svg';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between navbarTop mt-10">
        <div className="flex items-center ml-10">
          <img
            src={Testsvg}
            className="tecarelogo h-48px w-211px"
            alt="tech care logo"
          />
        </div>

        <div className="flex items-center">
          <li className="list-none flex cursor-pointer">
            <img
              src={homeSvg}
              className="homesvg h-17px w-16px"
              alt="tech care logo"
            />{' '}
            <span className="items-center p-2 nav-menu-items">Overview </span>
          </li>
          <li className="list-none flex active-menu pl-5">
            <img src={patientSvg} className="patient" alt="tech care logo" />{' '}
            <span className="items-center p-2 nav-menu-items ">patients </span>
          </li>
          <li className="list-none flex cursor-pointer pl-5">
            <img src={calenderSvg} className="callender" alt="tech care logo" />{' '}
            <span className="items-center p-2 nav-menu-items">Schedule </span>
          </li>
          <li className="list-none flex cursor-pointer pl-5">
            <img src={chatSvg} className="messaging svg" alt="messaging svg" />{' '}
            <span className="items-center p-2 nav-menu-items">Message </span>
          </li>
          <li className="list-none flex cursor-pointer pl-5">
            <img
              src={transactionSvg}
              className="transaction svg"
              alt="transaction svg"
            />
            <span className="items-center p-2 nav-menu-items">
              Transactions{' '}
            </span>
          </li>
        </div>
        <div className="flex items-center">
          <div className="pr-5">
            <img src={doctor} className="h-44px w-44px" alt="doctor" />
          </div>
          <div className="cursor-pointer">
            <h2 className="doctorName">Dr. jose Simmons</h2>
            <h2 className="doctorPractice">General Practioner</h2>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <img
            src={settings}
            className="h-19px w-190px settingsIcon"
            alt="settings"
          />
          <img src={dots} className=" h-18px w-4px pl-5 pr-5" alt="settings" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
