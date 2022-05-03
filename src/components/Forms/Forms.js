import React, { useState, useEffect } from "react";

function Forms(props) {
  const [formData, setFormData] = useState({});
  const [isValidated, setIsValidated] = useState(false);
  const [fieldTouch, setFieldTouch] = useState({});

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleTouch = ({ target }) => {
    setFieldTouch({ ...fieldTouch, [target.name]: true });
  };

  useEffect(() => {
    if (formData.fullName && formData.DOB) {
      if ((formData.height && formData.height <= 0) || (formData.weight && formData.weight <= 0)) {
        setIsValidated(false);
      } else {
        setIsValidated(true);
      }
    } else {
      setIsValidated(false);
    }
  }, [formData, fieldTouch]);

  const handleClick = (evt) => {
    console.log(formData);
    alert("Patient's details have been saved successfully");
    window.location.href="/";
    evt.preventDefault();
  };

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
                  <label className="fw-bold">Name of Patient</label>
                  <input
                    className="form-control"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                    onBlur={handleTouch}
                    type="text"
                    name="fullName"
                    required
                  />
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
                />
                {fieldTouch.DOB && !formData.DOB ? <p className="alert alert-danger">DOB is required</p> : <></>}
                <div>
                  <label className="fw-bold">Gender</label>
                  <select
                    className="form-control"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    onBlur={handleTouch}
                    name="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <label className="fw-bold">Place of Birth</label>
                <input
                  className="form-control"
                  value={formData.address || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="text"
                  name="address" required
                />
                <label className="fw-bold">Blood Group</label>
                <select
                  className="form-control"
                  value={formData.bloodGroup || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
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
                  onBlur={handleTouch}
                  type="number"
                  min={0}
                  name="height"
                />
                {fieldTouch.height && formData.height && formData.height <= 0 ? <p className="alert alert-danger">Height should be positive</p> : <></>}
                <label className="fw-bold">Weight</label>
                <input
                  className="form-control"
                  value={formData.weight || ""}
                  onChange={handleChange}
                  onBlur={handleTouch}
                  type="number"
                  min={0}
                  name="weight"
                />
                {fieldTouch.weight && formData.weight && formData.weight <= 0 ? <p className="alert alert-danger">Weight should be positive</p> : <></>}
                <br></br>
                <button
                  type="submit"
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
                    window.location.href = "/";
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
