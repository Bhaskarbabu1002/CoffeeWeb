import React from "react";
import "./style.scss";

const ProfileInformation = () => {
  return (
    <>
      <div className="add_user_details container">
        <div className="add_user_details-form">
          <div className="row">
            <div className="col-md-6">
              <p className="profile_user_heading">User Details</p>
            </div>
            <div className="col-md-6 text-right">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Internal
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  External
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  First Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp"
                  placeholder="Enter text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Last Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp"
                  placeholder="Enter text"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Country<span className="text-danger">*</span>
                </label>
                <select className="form-control">
                  <option value="">--Select--</option>
                  <option value="">India</option>
                  <option value="">Brazil</option>
                  <option value="">Afganistan</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Phone<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="textHelp"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Occupation<span className="text-danger">*</span>
                </label>
                <select className="form-control">
                  <option value="">--Select--</option>
                  <option value="">Planter</option>
                  <option value="">Trader</option>
                  <option value="">Exporter</option>
                  <option value="">Importer</option>
                  <option value="">Roster</option>
                  <option value="">Exporter</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  User Menu Group<span className="text-danger">*</span>
                </label>
                <select className="form-control">
                  <option value="">--Select--</option>
                  <option value="">Planter</option>
                  <option value="">Trader</option>
                  <option value="">Exporter</option>
                  <option value="">Importer</option>
                  <option value="">Roster</option>
                  <option value="">Exporter</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Subscription Type<span className="text-danger">*</span>
                </label>
                <select className="form-control">
                  <option value="">--Select--</option>
                  <option value="">Planter</option>
                  <option value="">Trader</option>
                  <option value="">Exporter</option>
                  <option value="">Importer</option>
                  <option value="">Roster</option>
                  <option value="">Exporter</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Subscription Start<span className="text-danger">*</span>
                </label>
                <input type="date" name="bday" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Subscription End<span className="text-danger">*</span>
                </label>
                <input type="date" name="bday" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
              <div translate="yes" className="text-center">
              <div className='differential_btns'>
              <button type="button" className="btn save_btn">Save</button>
             <button type="button" className="btn reset_btn">Reset</button>
             </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
