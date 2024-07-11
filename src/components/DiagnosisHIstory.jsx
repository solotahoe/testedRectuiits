import { useState } from 'react';
import LineChart from './LineChart';
import Measures from './Measures';
import DiagnotiList from './DiagnosticList'

function DiagnosisHistory() {
  return (
    <div className="w-1/2 p-4 Diagnosis-history ml-10">
      <h2 className="diagnosis-title">Diagnosis History</h2>
      <div>
        <LineChart />
        <div className='mt-5'>
            <Measures />
        </div>
        <div className='mt-5'>
            <DiagnotiList />
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
