import React, { useState } from "react";
import './AdministerVaccination.css';

function AdministerVaccination() {
  const [formData, setFormData] = useState({});
  
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleClick = (evt) => {
    console.log(formData);
    evt.preventDefault();
  };

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
                  <input
                    className="form-control"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                    type="text"
                    name="fullName"
                  />
                </div>
                <label className="fw-bold">Date of Birth</label>
                <input
                  className="form-control"
                  value={formData.DOB || ""}
                  onChange={handleChange}
                  type="date"
                  name="DOB"
                />
                <div>
                  <label className="fw-bold">Vaccination</label>
                  <select
                    className="form-control"
                    value={formData.vaccination || ""}
                    onChange={handleChange}
                    name="vaccination"
                  >
                    <option value="">Select Vaccination</option>
                    <option value="First Dose">First Dose</option>
                    <option value="Second Dose">Second Dose</option>
                  </select>
                </div>
                <label className="fw-bold">Date Administrated</label>
                <input
                  className="form-control"
                  value={formData.dateAdministrated || ""}
                  onChange={handleChange}
                  type="date"
                  name="dateAdministrated"
                />

                <label className="fw-bold">Brand Name</label>
                <input
                  className="form-control"
                  value={formData.brandName || ""}
                  onChange={handleChange}
                  type="text"
                  name="brandName"
                />

                <label className="fw-bold">Given At</label>
                <input
                  className="form-control"
                  value={formData.givenAt || ""}
                  onChange={handleChange}
                  type="text"
                  name="givenAt"
                />

                <br></br>
                <button
                  type="submit"
                  className="btn btn-outline-info"
                  onClick={handleClick}
                >
                  Save
                </button>
                <br></br>
                <br></br>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <hr></hr>
    <h2 style={{textAlign : "center"}}>Vaccination Card</h2>
    <br/>
      <table className="table">
        <tr>
        <th >Name of Patient</th>
        <th>Age</th>
        <th>Vaccine Name</th>
        <th>Due Date</th>
        <th>Given On</th> 
        <th>Brand Given</th> 
        </tr>
        <tr>
        <td >Tanushree</td>
        <td>24</td>
        <td>Covaxin</td>
        <td></td>
        <td></td>
        </tr>
      </table>
      </div>
  );
}

export default AdministerVaccination;
