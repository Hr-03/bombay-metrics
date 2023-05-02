import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Branch from './Menu/Clinic Settings/Branch';
import AddBranch from './Menu/Clinic Settings/AddBranch';
import SkinAndLaser from './Menu/Clinic Settings/Treatments/Skin&Laser';
import WeightLoss from './Menu/Clinic Settings/Treatments/WeightLoss';
import HairT from './Menu/Clinic Settings/Treatments/Hair';
import Homeopathy from './Menu/Clinic Settings/Treatments/Homeopathy';
import LeadSources from './Menu/Clinic Settings/LeadSources';
import Role from './Menu/User Settings/Role';
import AccessPermission from './Menu/User Settings/AccessPermission';
import AddAccess from './Menu/User Settings/AddAccess';
import DoctorRegistration from './Menu/User Settings/DoctorRegistration';
import AddDoctor from './Menu/User Settings/AddDoctor';
import EmployeeRegistration from './Menu/User Settings/EmployeeRegistration';
import AddEmployee from './Menu/User Settings/AddEmployee';
import Enquiries from './Menu/Leads/Enquiries';
import AddEntry from './Menu/Leads/AddEntry';
import ViewEntry from './Menu/Leads/ViewEntry';
import FollowUpEntries from './Menu/Leads/FollowUpEntries';
import FollowupDetails from './Menu/Leads/FollowupDetails';
import ViewFollowupDetails from './Menu/Leads/ViewFollowupDetails';
import PatientConversion from './Menu/Leads/PatientConversion';
import Patients from './Menu/Leads/Patients';
import ViewPatient from './Menu/Leads/ViewPatient';
import UploadLeads from './Menu/Leads/UploadLeads';
// import BookAppointmnet from './Menu/Appointment/BookAppointment';
import BookAppointment from './Menu/Appointment/BookAppointment';
import AddAppointment from './Menu/Appointment/AddAppointment';
import ViewAppointment from './Menu/Appointment/ViewAppointment';
// import TodaysAppointment from './Pages/TodaysFollowups';
import TodaysFollowups from './Pages/TodaysFollowups';
import ViewDoctorProfile from './Menu/User Settings/ViewDoctorProfile';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
   <>
  <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/sbar" element={<Sidebar/>} />
          <Route path="/branch" element={<Branch/>} />
          <Route path="/add-branch" element={<AddBranch/>} />
          <Route path="/s&l" element={<SkinAndLaser/>} />
          <Route path="/wl" element={<WeightLoss/>} />
          <Route path="/ht" element={<HairT/>} />
          <Route path="/homeopathy" element={<Homeopathy/>} />
          <Route path="/lead-srcs" element={<LeadSources/>} />
          <Route path="/role" element={<Role/>} />
          <Route path="/access-perm" element={<AccessPermission/>} />
          <Route path="/add-access" element={<AddAccess/>} />
          <Route path="/dr-reg" element={<DoctorRegistration/>} />
          <Route path="/add-dr" element={<AddDoctor/>} />
          <Route path="/emp-reg" element={<EmployeeRegistration/>} />
          <Route path="/add-emp" element={<AddEmployee/>} />
          <Route path="/enquiries" element={<Enquiries/>} />
          <Route path="/add-entry" element={<AddEntry/>} />
          <Route path="/view-enquiry/:enquiryId" element={<ViewEntry/>} />
          <Route path="/fup-entries" element={<FollowUpEntries/>} />
          <Route path="/fup-details/:enquiryId" element={<FollowupDetails/>} />
          <Route path="/fup-view" element={<ViewFollowupDetails/>} />
          <Route path="/p-cvrt" element={<PatientConversion/>} />
          <Route path="/patients" element={<Patients/>} />
          <Route path="/view-p" element={<ViewPatient/>} />
          <Route path="/up-leads" element={<UploadLeads/>} />
          <Route path="/appmnt" element={<BookAppointment/>} />
          <Route path="/book-apmt/:enqId" element={<AddAppointment/>} />
          <Route path="/view-apmt" element={<ViewAppointment/>} />
          <Route path="/today-fup" element={<TodaysFollowups/>} />
          <Route path="/view-dr" element={<ViewDoctorProfile/>} />


          </Routes>
          </Router>
   </>
  );
}

export default App;
