import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVaccine } from "../../store/actions/Vaccine";
import Table from "../Table/Table";
import './AdministerVaccination.css';

function AdministerVaccination() {
  const [formData, setFormData] = useState({});
  const [fieldTouch, setFieldTouch] = useState({});
  const [isValidated, setIsValidated] = useState(false);
  const [patientList] = useState(useSelector(state => state.patient.patients));
  const [vaccineList, setVacccineList] = useState(useSelector(state => state.vaccine.vaccines));
  const [eligibleDoses, setEligibleDoses] = useState([]);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleTouch = ({ target }) => {
    setFieldTouch({ ...fieldTouch, [target.name]: true });
  };

  const handleClick = (evt) => {
    dispatch(addVaccine(formData))
      .then(() => {
        alert('Vaccination Saved Successfully');
        evt.preventDefault();
      })
      .catch((err) => {
        alert(err);
        evt.preventDefault();
      })
  };

  useEffect(() => {
    if (formData.fullName) {
      const patientDOB = patientList.find(patient => patient.fullName === formData.fullName).DOB;
      formData.DOB = patientDOB;
      if (vaccineList.find(vaccine => vaccine.fullName === formData.fullName)) {
        setEligibleDoses(["Second Dose"]);
      } else {
        setEligibleDoses(["First Dose"]);
      }
    }
  }, [formData.fullName, fieldTouch.fullName]);

  useEffect(() => {
    if (formData.fullName && formData.DOB && formData.vaccination && formData.dateAdministrated) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [formData, fieldTouch]);

  return (
    <div>
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-header">
            <h4 className="text-center">Add Vaccination</h4>
          </div>
          <div className="card-body">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="fw-bold">Name of Patient</label>
                  <select
                    className="form-control"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                    onBlur={handleTouch}
                    name="fullName"
                  >
                    <option value="">Select Patient</option>
                    {
                      patientList.map(patient =>
                        <option key={patient.fullName} value={patient.fullName}>{patient.fullName}</option>
                      )
                    }
                  </select>
                  {fieldTouch.fullName && !formData.fullName ? <p className="alert alert-danger">Full Name is required</p> : <></>}
                </div>
                <label className="fw-bold">Date of Birth</label>
                <input
                  className="form-control"
                  value={formData.DOB || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="date"
                  name="DOB"
                  readOnly
                />
                <div>
                  <label className="fw-bold">Vaccination</label>
                  <select
                    className="form-control"
                    value={formData.vaccination || ""}
                    onChange={handleChange}
                    onBlur={handleTouch}
                    name="vaccination"
                  >
                    <option value="">Select Vaccination</option>
                    {
                      eligibleDoses.map(dose => <option key={dose} value={dose}>{dose}</option>)
                    }
                  </select>
                  {fieldTouch.vaccination && !formData.vaccination ? <p className="alert alert-danger">Vaccination is required</p> : <></>}
                </div>
                <label className="fw-bold">Date Administrated</label>
                <input
                  className="form-control"
                  value={formData.dateAdministrated || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="date"
                  name="dateAdministrated"
                />
                {fieldTouch.dateAdministrated && !formData.dateAdministrated ? <p className="alert alert-danger">Date Administered is required</p> : <></>}
                <label className="fw-bold">Brand Name</label>
                <input
                  className="form-control"
                  value={formData.brandName || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="text"
                  name="brandName"
                />

                <label className="fw-bold">Given At</label>
                <input
                  className="form-control"
                  value={formData.givenAt || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="text"
                  name="givenAt"
                />

                <br></br>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={handleClick}
                  disabled={!isValidated}
                >
                  Save
                </button>
                <br></br>
                <br></br>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => {
                    setFormData({});
                    setFieldTouch({});
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 style={{ textAlign: "center" }}>Vaccination Card</h2>
      <br />
      <Table
        columns={[
          { field: 'fullName' },
          { field: 'DOB' },
          { field: 'vaccination' },
          { field: 'dateAdministrated' },
          { field: 'brandName' },
          { field: 'givenAt' }
        ]}
        rows={vaccineList}
      />
    </div>
  );
}

export default AdministerVaccination;
