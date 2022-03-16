import React from 'react'
import"./style.scss";
const AccountSettings = () => {
  return (
    <>
  <div className="account_Settings_card">
  <p style={{marginBottom: 35, fontWeight: 'bold'}}>
    <a className="no-display goback" title="Back" href="/Admin/UserList?menu=admin" style={{display: 'inline'}}><i className="fas fa-arrow-circle-left" aria-hidden="true" /></a>
    <span translate="yes">ACCOUNT SETTINGS</span>
  </p>
  <div className="row">
    <div className="tradermainrow col-md-12 " style={{borderBottom: '1px solid #e1e0e0', marginBottom: 20}}>
      <h6 translate="yes" style={{fontWeight: 'bold'}}>
        Delete Trading Account
      </h6>
      <div translate="yes">
        Once you delete trading account,need to reinitiate the verification process to get a new one later. All data belongs to
        the current trading account will be deleted permenantly.
      </div>
      <div>
        <div translate="yes" style={{padding: 35, textAlign: 'center'}}>
          <button style={{width: 120}} type="submit" className=" btn btndeletetradeaccount btn-sm btn-danger has-spinner">Yes, Delete</button>
        </div>
      </div>
    </div>
    <div className="col-md-12" style={{borderBottom: '1px solid #e1e0e0'}}>
      <h6 translate="yes" style={{fontWeight: 'bold'}}>
        Delete Account
      </h6>
      <div translate="yes">
        If you delete account, there is no getting it back.Make sure you want to do this.
      </div>
      <div>
        <div translate="yes" style={{padding: 35, textAlign: 'center'}}>
          <button style={{width: 120}} type="submit" className="btn btndeletemyaccount btn-sm btn-danger has-spinner">Yes, Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default AccountSettings