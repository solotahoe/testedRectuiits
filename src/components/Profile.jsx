import { useState } from 'react';
import pic2x from '../assets/Layer2@2x.png';
import calender from '../assets/BirthIcon.png';
import FemaleIcon from '../assets/FemaleIcon.png';
import PhoneIcon from '../assets/PhoneIcon.png';
import InsuranceIcon from '../assets/InsuranceIcon.png';

function Profile() {
  return (
    <div className="w-1/4 p-4 profile-section ml-10">
      <div className="flex flex-col items-center">
        <img src={pic2x} alt="Layer 2@2x.png" className="profilePicpng" />
        <h2 className="profileName mt-5">Jessica Taylor</h2>
      </div>
      <div className="list-none flex mt-5">
        <div>
          <img src={calender} alt="date of birth" />
        </div>
        <div>
          <ul className="ml-5">
            <li className="dob-profile"> Date of Birth</li>
            <li className="actual-dob-profile pt-1"> August 23 1996</li>
          </ul>
        </div>
      </div>
      <div className="list-none flex mt-5">
        <div>
          <img src={FemaleIcon} alt="date of birth" />
        </div>
        <div>
          <ul className="ml-5">
            <li className="dob-profile"> Gender </li>
            <li className="actual-dob-profile pt-1"> Female</li>
          </ul>
        </div>
      </div>
      <div className="list-none flex mt-5">
        <div>
          <img src={PhoneIcon} alt="date of birth" />
        </div>
        <div>
          <ul className="ml-5">
            <li className="dob-profile"> Contact info </li>
            <li className="actual-dob-profile pt-1"> (415) 555-5678</li>
          </ul>
        </div>
      </div>
      <div className="list-none flex mt-5">
        <div>
          <img src={PhoneIcon} alt="date of birth" />
        </div>
        <div>
          <ul className="ml-5">
            <li className="dob-profile"> Emergency contacts </li>
            <li className="actual-dob-profile pt-1"> (415) 555-5678</li>
          </ul>
        </div>
      </div>
      <div className="list-none flex mt-5">
        <div>
          <img src={InsuranceIcon} alt="date of birth" />
        </div>
        <div>
          <ul className="ml-5">
            <li className="dob-profile"> Insurance Provider </li>
            <li className="actual-dob-profile pt-1">
              {' '}
              Sunrise Health Assurance
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <button className="showAllInfoBtn">Show All information</button>
      </div>
    </div>
  );
}

export default Profile;
