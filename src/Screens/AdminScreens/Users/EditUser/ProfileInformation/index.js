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
  <label translate="yes" htmlFor="txtFirstName" className="form-label">First Name<span className="text-danger">*</span></label>
  <input type="text" required className="form-control" id="txtFirstName" aria-describedby="emailHelp" defaultValue="ajesh1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
  <label translate="yes" htmlFor="txtLastName" className="form-label">Last Name<span className="text-danger">*</span></label>
  <input type="text" required className="form-control" id="txtLastName" aria-describedby="emailHelp" defaultValue="mp1" />
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
            <div>
  <label translate="yes" htmlFor="txtPhone" className="form-label">Phone<span className="text-danger">*</span></label>
  <div className="input-group">
    {/* <div className="input-group-prepend  countrycode">
      <span className="input-group-text countrycodeprepend" style={{border: '1px solid #dfe2e7 !important'}} id>+971</span>
    </div> */}
    <input defaultValue={1111111} data-parsley-errors-container=".grp2" type="text" required data-parsley-pattern="^[0-9]*$" id="txtPhone" className="form-control" />
  </div>
</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
  <label translate="yes" htmlFor="txtEmail" className="form-label">Email</label>
  <input defaultValue="test456@gmail.com1" type="text" className="form-control" data-parsley-pattern="/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/" id="txtEmail" data-parsley-validate-if-empty="true" />
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
              <button type="button" className="btn save_btn">Submit</button>
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
