import { useState } from 'react';
import respiratory from '../assets/respiratoryrate.png';
import temperature from '../assets/temperature.png';
import heartBpm from '../assets/HeartBPM.png';

function Measures() {
  return (
    <div className="flex gap-2">
      <div className="flex-1 p-4 measure-a">
        <div>
          <img src={respiratory} alt="respiratory rate" />
        </div>
        <div>
          <h4 className="resRate">Respiratory Rate</h4>
          <h2 className="bpmRate">20 bpm</h2>
          <h6 className="status">Normal</h6>
        </div>
      </div>
      <div className="flex-1 p-4 measure-b">
        <div>
          <img src={temperature} alt="respiratory rate" />
        </div>
        <div>
          <h4 className="resRate">Temperature</h4>
          <h2 className="bpmRate">98.6</h2>
          <h6 className="status">Normal</h6>
        </div>
      </div>
      <div className="flex-1 p-4 measure-c">
        <div>
          <img src={heartBpm} alt="respiratory rate" />
        </div>
        <div>
          <h4 className="resRate">Heart Rate</h4>
          <h2 className="bpmRate">78 bpm</h2>
          <h6 className="status">Lower thanAverage</h6>
        </div>
      </div>
    </div>
  );
}

export default Measures;
