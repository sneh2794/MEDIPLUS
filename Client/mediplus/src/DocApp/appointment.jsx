import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import emailjs from '@emailjs/browser';


function Appointment() {
  const [appname, setAppname] = useState("");
  const [appemail, setAppemail] = useState("");
  const [appdate, setAppdate] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedDoctorName, setSelectedDoctorName] = useState("");


  const userid = sessionStorage.getItem("userid");
  const form = useRef();
  const navigate = useNavigate();

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const maxDateObj = new Date();
  maxDateObj.setDate(today.getDate() + 15);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctor/list")
      .then((res) => {
        console.log("res.data")
        setDoctors(res.data)
      })

      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const appointment = async (e) => {
    e.preventDefault();

    if (!userid) {
      alert("Please login first to book an appointment.");
      navigate("/login");
      return;
    }

    const selectedDoctor = doctors.find(doc => doc.doctorid === selectedDoctorId);

    const data = {
      userid,
      appname,
      appemail,
      appdate,
      appdoctor: selectedDoctor?.doctorname || "",
      doctorid: selectedDoctorId,
      image: selectedDoctor?.image || "",
      experience: selectedDoctor?.experience || "",
      specialty: selectedDoctor?.specialty || "",
      fees: selectedDoctor?.fees || ""
    };

    emailjs
      .sendForm('service_pwuuoej', 'template_ff453mk', form.current, {
        publicKey: 'ETcvDxubpAoiwRDET',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    try {
      await axios.post("http://localhost:5000/api/appointments", data);
      alert("Appointment booked successfully!");
      navigate('/userAppoinments');
    } catch (error) {
      console.error("Booking error", error);
      alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <section className="slider">
        <div className="hero-slider">
          <div className="single-slider" style={{ backgroundImage: 'url("img/slider2.jpg")' }}>
            <div className="container mb-5">
              <div className="row">
                <div className="col-lg-7 py-5">
                  <h2 className="text-center mb-4">Book an Appointment</h2>
                  <div className="appointment-form p-4 bg-transparent">
                    <form onSubmit={appointment} ref={form}>
                      <input type="hidden" name="appdoctor" value={selectedDoctorName} />

                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="appname" onChange={(e) => setAppname(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="appemail" onChange={(e) => setAppemail(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Appointment Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="appdate"
                          min={minDate}
                          max={maxDate}
                          onChange={(e) => setAppdate(e.target.value)}
                          required
                        />

                      </div>
                      <div className="mb-3">
                        <label className="form-label">Doctor</label>
                        <select
                          name="doctorid"
                          value={selectedDoctorId}
                          onChange={(e) => {
                            const selectedId = e.target.value;
                            setSelectedDoctorId(selectedId);
                            const selectedDoc = doctors.find(doc => doc.doctorid === selectedId);
                            setSelectedDoctorName(selectedDoc?.doctorname || "");
                          }}
                          className="form-control"
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctors.map((doc) => (
                            <option key={doc._id} value={doc.doctorid}>
                              {doc.doctorname} ({doc.specialty})
                            </option>
                          ))}
                        </select>

                      </div>
                      <button type="submit" className="btn btn-primary w-100 mt-3">Book Appointment</button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment; 
