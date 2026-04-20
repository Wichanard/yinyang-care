import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProviderDetail from './pages/ProviderDetail';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ClinicProfile from './pages/ClinicProfile';
import ClinicCertification from './pages/ClinicCertification';
import DoctorProfile from './pages/DoctorProfile';
import ReviewSystem from './pages/ReviewSystem';
import AppointmentSystem from './pages/AppointmentSystem';
import TreatmentTracking from './pages/TreatmentTracking';
import DoctorBio from './pages/DoctorBio';
import ChatSupport from './pages/ChatSupport';
import BottomNav from './components/BottomNav';
import { useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();
  const showBottomNav = [
    '/clinic-profile', 
    '/clinic-certification', 
    '/doctor-profile', 
    '/reviews', 
    '/appointments', 
    '/tracking', 
    '/doctor-bio'
  ].some(path => location.pathname.startsWith(path));

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: showBottomNav ? '0' : '80px', paddingBottom: showBottomNav ? '100px' : '0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/provider/:id" element={<ProviderDetail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clinic-profile" element={<ClinicProfile />} />
          <Route path="/clinic-certification" element={<ClinicCertification />} />
          <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
          <Route path="/reviews" element={<ReviewSystem />} />
          <Route path="/appointments" element={<AppointmentSystem />} />
          <Route path="/tracking" element={<TreatmentTracking />} />
          <Route path="/doctor-bio/:id" element={<DoctorBio />} />
          <Route path="/chat-support" element={<ChatSupport />} />
        </Routes>
      </main>
      {showBottomNav && <BottomNav />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
