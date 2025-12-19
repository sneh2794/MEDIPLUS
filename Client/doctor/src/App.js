import logo from './logo.svg';
import './App.css';

import Login from './login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login2 from './login/login2';
import LoginAll from './login/login2';
import Dashbord from './Doctor_side/Dashbord';
import Patient from './Doctor_side/Patient';
import MedicalStoreOrders from './medicalSide/Medical';
import LabReports from './laboratorySide/labReports';
import AdminDashboard from './AdminSide/adminDashboard';
import AddDoctor from './AdminSide/AddDoctor';
import AdminSidebar from './AdminSide/AdminSidebar';
import Appoinments from './AdminSide/Appoinments';
import DoctorList from './AdminSide/DoctorList';
import MedicalList from './AdminSide/MedicalList';
import LaboratoryList from './AdminSide/LaboratoryList';


import DrAppoinment from './Doctor_side/drAppointment';
import EditDoctor from './AdminSide/editDoctor';
import MedicineOrders from './medicalSide/medicineorder';
import DoctorProfile from './Doctor_side/doctorProfile';
import AddMedicine from './AdminSide/addmedicine';
import UserData from './AdminSide/UserData';
import LabHistory from './laboratorySide/labhistory';





function App() {
  return (
    //  <div className="App">
    //    
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login2" element={<LoginAll></LoginAll>}></Route>
        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="/patient" element={<Patient></Patient>}></Route>
        <Route path="/medical" element={<MedicalStoreOrders></MedicalStoreOrders>}></Route>
        <Route path="/labreports" element={<LabReports></LabReports>}></Route>
        <Route path="/adminDashboard" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path="/addDoctor" element={<AddDoctor></AddDoctor>}></Route>
        <Route path="/adminSidebar" element={<AdminSidebar></AdminSidebar>}></Route>
        <Route path="/appoinments" element={<Appoinments></Appoinments>}></Route>
        <Route path="/doctorList" element={<DoctorList></DoctorList>}></Route>
        <Route path="/medicalList" element={<MedicalList></MedicalList>}></Route>
        <Route path="/laboratoryList" element={<LaboratoryList></LaboratoryList>}></Route>
        <Route path="/medicineorder" element={<MedicineOrders></MedicineOrders>}></Route>
        <Route path="/drAppointment" element={<DrAppoinment></DrAppoinment>}></Route>
        <Route path="/admin/doctor/edit/:id" element={<EditDoctor />} />

        <Route path="/doctorProfile" element={<DoctorProfile></DoctorProfile>}></Route>
        <Route path="/addMedicine" element={<AddMedicine></AddMedicine>}></Route>
        <Route path="/userData" element={<UserData></UserData>}></Route>
        <Route path="/labHistory" element={<LabHistory></LabHistory>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
