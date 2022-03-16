import React from "react";
import "./style.scss";
const ApprovalSettings = () => {
  return (
    <>
      <div className="approval_Settings_card">
        <p style={{ marginBottom: 15, fontWeight: "bold" }}>
          <a
            translate="yes"
            className="no-display goback"
            title="Back"
            href="/Admin/UserList?menu=admin"
            style={{ display: "inline" }}
          >
            <i className="fas fa-arrow-circle-left" aria-hidden="true" />
          </a>
          <span translate="yes">APPROVAL SETTINGS</span>
        </p>
        <div className="form-group mb-0">
          <ul className="list-group list-group-sm">
            <li
              className="list-group-item has-icon rdgrp"
              data-ind={100}
              style={{ padding: 20 }}
            >
              <h6
                translate="yes"
                style={{ marginBottom: 15, fontWeight: "bold" }}
              >
                Raw Coffee Price Approver
              </h6>
              <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    value="option1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    YES
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                    value="option2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    NO
                  </label>
                </div>
              </div>
            </li>
            <li
              className="list-group-item has-icon rdgrp"
              data-ind={101}
              style={{ padding: 20 }}
            >
              <h6
                translate="yes"
                style={{ marginBottom: 15, fontWeight: "bold" }}
              >
                Differentials Approver
              </h6>
              <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline3"
                    name="customRadioInline2"
                    className="custom-control-input"
                    value="option3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline3"
                  >
                    YES
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline4"
                    name="customRadioInline2"
                    className="custom-control-input"
                    value="option4"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline4"
                  >
                    NO
                  </label>
                </div>
              </div>
            </li>
            <li
              className="list-group-item has-icon rdgrp"
              data-ind={102}
              style={{ padding: 20 }}
            >
              <h6
                translate="yes"
                style={{ marginBottom: 15, fontWeight: "bold" }}
              >
                Freight Rate Approver
              </h6>
              <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline5"
                    name="customRadioInline3"
                    className="custom-control-input"
                    value="option5"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline5"
                  >
                    YES
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline6"
                    name="customRadioInline3"
                    className="custom-control-input"
                    value="option6"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline6"
                  >
                    NO
                  </label>
                </div>
              </div>
              {/* <div className="form-check form-check-inline">
          <input data-tid={3} className="form-check-input" type="radio" name="inlineRadioOptions102" id="inlineRadio1102" defaultValue={1} />
          <label translate="yes" className="form-check-label" htmlFor="inlineRadio1102">YES</label>
        </div>
        <div className="form-check form-check-inline">
          <input data-tid={3} defaultChecked className="form-check-input" type="radio" name="inlineRadioOptions102" id="inlineRadio2102" defaultValue={0} />
          <label translate="yes" className="form-check-label" htmlFor="inlineRadio2102">NO</label>
        </div> */}
            </li>
          </ul>
        </div>
        <div translate="yes" className="mt-3" style={{ textAlign: "center" }}>
              <button type="button" className="btn save_btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ApprovalSettings;
