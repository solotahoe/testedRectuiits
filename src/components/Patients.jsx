import { useState } from 'react';
import searchIcon from '../assets/search_FILL0_wght300_GRAD0_opsz24.png'
import {allPatients} from '../data/allPatientsData.js'
import imagefr from '../assets/Layer12.png';
import dots from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png';
function Patients() {
  console.log(allPatients)
  return (
    <div className="w-1/4 p-4 patients-section">
      <div className='flex justify-between items-center'>
      <h2 className="Patients">Patients</h2>
       <img src={searchIcon}  className ="searchIcon" alt="search icon" />
      </div>
      <ul className='mt-5'>
        {allPatients.map(({name, gender, age, image})=>(
              <li className='flex items-center justify-between mb-5'> 
              <div className='flex items-center'>
              <div className='mr-5'>
               <img src={image} alt="Layer9@2x.png" h="48px" w="48px" className='patientsImg'/>
                </div>
                <div>
                  <h4 className='patName'>{name}</h4>
                  <h4 className='patAge'>{gender}, {age}</h4>
                </div>
              </div>
             <div>
             <img src={dots} className="pl-5 pr-5" alt="settings" />
             </div>
          
               
              </li>
        ))}
      
      </ul>
    </div>
  );
}

export default Patients;
