import './App.css';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero.jsx';
import About from './pages/About/About.jsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LightFooter from './components/LightFooter/LightFooter.jsx';
import Course from './pages/Courses/Course.jsx';
import FeedbackShare from './pages/FeedbackShare/FeedbackShare.jsx';
import { useEffect } from 'react';
import Contact from './pages/Enroll/Enroll.jsx';
import Careers from './pages/Careers/Careers.jsx';
import Authpage from './pages/enrollStudent/EnrollStudent.jsx';
import AddStudents from './pages/AddStudents/AddStudents.jsx';
import GiveCred from './pages/GiveCredy/GiveCred.jsx';
import VerifyCertificate from './pages/VerifyCertificate/VerifyCertificate.jsx';
import Contributors from './pages/Contributors/Contributors.jsx';
import Events from './pages/Events/Events.jsx';
import Colleges from './pages/Colleges/Colleges.jsx';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
           <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/verify-certificate' element={<VerifyCertificate />} />
          <Route path='/contributors' element={<Contributors />} />
          <Route path='/Internships' element={<Events/>}/>
          <Route path='/College-event' element={<Colleges/>}/>
          <Route element={<Authpage />}>
            <Route path='/secret-Auth_fes' element={<AddStudents />} />
            <Route path='/Give-credentials' element={<GiveCred />} />
          </Route>
          <Route path='/feedback-share' element={<FeedbackShare />} />
          <Route path='/Enroll-course' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
          </Routes>
        <LightFooter /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
