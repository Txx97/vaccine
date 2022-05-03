import React, { useState } from "react";
// import './Forms.css'
// import { Prompt } from "react-router-dom";

function Forms(props) {
  const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    validateForm();
  };
  const handleClick = (evt) => {
    validateForm();
    console.log(formData);
    alert("data saved successfully")
    evt.preventDefault();
    
  };
  
  const validateForm = () => {
    const { fullName, address, DOB, gender, bloodGroup, height, weight } =
      formData;
      
    setValidationMessages([]);
    let messages = [];
    if (!fullName) {
      messages.push("Full Name is required");
    }
    if (!address) {
      messages.push("Address is required");
    }
    if (!gender) {
      messages.push("Please select a Gender");
    }
    if (!bloodGroup) {
      messages.push("Please select a blood group");
    }
    if (!DOB) {
      messages.push("Date of Birth is required");
    }
    setValidationMessages(messages);
  };
//   console.log(formData);
//  alert ("details saved successfully!")
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-header">
            <h4 className="text-center">Add a patient</h4>
          </div>
          <div className="card-body">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="fw-bold">Full Name</label>
                  <input
                    className="form-control"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                    type="text"
                    name="fullName"
                    required
                  />
                  {formData.fullName?'':<p className="alert alert-danger">Full Name is required</p>}
                </div>
                <label className="fw-bold">Address</label>
                <input
                  className="form-control"
                  value={formData.address || ""}
                  onChange={handleChange}
                  type="text"
                  name="address" required
                />
                {/* <p className="alert alert-danger">{formData.address?'':'Address is required'}</p> */}

                <p>{validationMessages.address && ''}</p>
                <label className="fw-bold">Date of Birth</label>
                <input
                  className="form-control"
                  value={formData.DOB || ""}
                  onChange={handleChange}
                  type="date"
                  name="DOB"
                />
                {formData.DOB?'':<p className="alert alert-danger">Date of Birth is required</p>}

                <label className="fw-bold">Blood Group</label>
                <select
                  className="form-control"
                  value={formData.bloodGroup || ""}
                  onChange={handleChange}
                  name="bloodGroup"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>

                <label className="fw-bold">Height</label>
                <input
                  className="form-control"
                  value={formData.height || ""}
                  onChange={handleChange}
                  type="decimal"
                  name="height"
                />
                <label className="fw-bold">Weight</label>
                <input
                  className="form-control"
                  value={formData.weight || ""}
                  onChange={handleChange}
                  type="decimal"
                  name="weight"
                />
                <label className="fw-bold">Gender</label>
                <div>
                <select
                  className="form-control"
                  value={formData.gender || ""}
                  onChange={handleChange}
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  </select>
                </div>
                  <br></br>
                <button
                  type="submit"
                  className="btn btn-outline-info"
                  onClick={handleClick}
                    disabled={Object.keys(formData).length === 7 && validationMessages.length === 0 ? false : true}
                        
                >
                  Save
                </button>
                <br></br>
                <br></br>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
          <div style={{ color: "rebeccapurple" }}>
            {validationMessages.length > 0 && <span>Validation Summary</span>}
            <ul>
              {validationMessages.map((vm) => (
                <li key={vm}>{vm}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
