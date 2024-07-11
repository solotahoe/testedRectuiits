
import NavBar from './components/Navbar' 
import Patients from './components/Patients'
import DiagnosisHistory from './components/DiagnosisHIstory'
import Profile from './components/Profile'

function App() {
  return (
    <>
     <NavBar />
     <div className='flex mt-10'>
      <Patients />
      <DiagnosisHistory />
       <Profile />
     </div>
    </>
  );
}

export default App;
