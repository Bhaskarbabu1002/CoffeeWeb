import React from 'react'
import "./FreightRateEntry.scss";
const FreightRateEntry = () => {
  const FreightData = [
    {
        SlNo: '1',
        LoadingPorts: 'MANGALORE, KARNATKA',
        DestinationPorts: {
          Port1:'GENOVA',
          Port2:'TRIESTE',
          Port3:'NAPOLI',
          Port4:'JEBEL ALI',
        },
        Country: 25,
        FreightRate: 15,
        TransitPeriod: 20,
        Others: 10,
        PlantationsScreen16High: 15,
    },
    {
      SlNo: '2',
      LoadingPorts: 'MANGALORE, KARNATKA',
      DestinationPorts: {
        Port1:'GENOVA',
        Port2:'TRIESTE',
        Port3:'NAPOLI',
        Port4:'JEBEL ALI',
      },
      Country: 25,
      FreightRate: 15,
      TransitPeriod: 20,
      Others: 10,
      PlantationsScreen16High: 15,
  },
  ]
  return (
    <>
    <div className='freight_entry_section container'>
    <div className='row my-3 align-items-center'>
<div className='col-md-6'>
    <h5 className='main-head'>GLOBAL FREIGHT RATES</h5>
    <div className='freight_top_btns'>
    <button className='btn btn-sm addrm_btn'>Add Loading Port</button>
    <button className='btn btn-sm addrm_btn'>Remove Loading Port</button>
    </div>
</div>
<div className='col-md-6 text-right'>
    <span><b>Select Your Country :-</b></span>
    <select name="cars" id="cars">
    <option value="volvo">India</option>
    <option value="saab">USA</option>
    <option value="opel">Brazil</option>
    <option value="audi">China</option>
    <option value="audi">Mexico</option>
    <option value="audi">Indonasia</option>
  </select>
</div>
    </div>
  <div className="table-scrollable" style={{height: '400px !important', overflowX: 'scroll'}}>
  <table cellSpacing={0} className="table table-sm table-bordered table-striped rowfy" style={{minWidth: '100%', verticalAlign: 'middle'}}>
    <thead translate="yes" className='freight_head'>
      <tr>
        <th className="customthead">&nbsp;</th>
        <th className="customthead">Sl No</th>
        <th className="customthead">Loading Ports</th>
        <th className="customthead">Destination Ports</th>
        <th className="customthead">Country</th>
        <th className="customthead" colSpan={2}>Freight Rate</th>
        <th className="customthead">Transit Period</th>
        <th className="customthead">Others</th>
        <th className="customthead">&nbsp;</th>
      </tr>
      <tr>
        <th className="customthead" />
        <th className="customthead" />
        <th className="customthead" />
        <th className="customthead" />
        <th className="customthead" />
        <th className="customthead" colSpan={2}>Between</th>
        <th className="customthead" />
        <th className="customthead" />
        <th className="customthead" />
      </tr>
    </thead>
   
    <tbody className="itembody">
   
    {FreightData.map((item) => {
          return (
            <>
      <tr>
        <td rowSpan={4} style={{width: 35}} className="chkRow"><input type="checkbox" className="chkdelete" rowSpan={4} /></td>
        <td style={{width: 85}} className="slno" rowSpan={4}>{item.SlNo}</td>
        <td className="loadport" style={{}} rowSpan={4}><input type="text" className="form-control" defaultValue={item.LoadingPorts} /></td>
        <td><input type="text" className="form-control" defaultValue={item.DestinationPorts.Port1} /></td>
        <td><input type="text" className="form-control autocompleteloaded" defaultValue="ITALY" id="autocom82" /></td>
        <td><input type="text" className="form-control" defaultValue="$7000" /></td>
        <td><input type="text" className="form-control" defaultValue="$7500" /></td>
        <td><input type="text" className="form-control" defaultValue="60 TO 70 DAYS" /></td>
        <td><input type="text" className="form-control" defaultValue="SHIPPING LINE: MSC, CMA CGM....." /></td>
        <td><button type='button' className='btn btn-sm rowfy-deleterow btn-danger'>-</button></td>
      </tr>
      <tr>
        <td rowSpan={4} style={{width: 35, display: 'none'}} className="chkRow"><input type="checkbox" className="chkdelete" rowSpan={4} /></td>
        <td style={{width: 85, display: 'none'}} className="slno" rowSpan={4}>1</td>
        <td className="loadport" style={{display: 'none'}} rowSpan={4}><input type="text" className="form-control" defaultValue="MANGALORE, KARNATKA" /></td>
        <td><input type="text" className="form-control" defaultValue={item.DestinationPorts.Port2} /></td>
        <td><input type="text" className="form-control autocompleteloaded" defaultValue="ITALY" id="autocom83" /></td>
        <td><input type="text" className="form-control" defaultValue="$6500" /></td>
        <td><input type="text" className="form-control" defaultValue="$7000" /></td>
        <td><input type="text" className="form-control" defaultValue="50 TO 60 DAYS" /></td>
        <td><input type="text" className="form-control" defaultValue="SHIPPING LINE: E-GREEN, MAERSK" /></td>
        <td><button type='button' className='btn btn-sm rowfy-deleterow btn-danger'>-</button></td>
      </tr>
      <tr>
        <td rowSpan={4} style={{width: 35, display: 'none'}} className="chkRow"><input type="checkbox" className="chkdelete" rowSpan={4} /></td>
        <td style={{width: 85, display: 'none'}} className="slno" rowSpan={4}>1</td>
        <td className="loadport" style={{display: 'none'}} rowSpan={4}><input type="text" className="form-control" defaultValue="MANGALORE, KARNATKA" /></td>
        <td><input type="text" className="form-control" defaultValue={item.DestinationPorts.Port3} /></td>
        <td><input type="text" className="form-control autocompleteloaded" defaultValue="ITALY" id="autocom84" /></td>
        <td><input type="text" className="form-control" defaultValue="$6000" /></td>
        <td><input type="text" className="form-control" defaultValue="$6500" /></td>
        <td><input type="text" className="form-control" defaultValue="25 TO 30 DAYS" /></td>
        <td><input type="text" className="form-control" defaultValue="SHIPPING LINE : HAPAG LLOYD......" /></td>
        <td><button type='button' className='btn btn-sm rowfy-deleterow btn-danger'>-</button></td>
      </tr>
      <tr>
        <td rowSpan={4} style={{width: 35, display: 'none'}} className="chkRow"><input type="checkbox" className="chkdelete" rowSpan={4} /></td>
        <td style={{width: 85, display: 'none'}} className="slno" rowSpan={4}>1</td>
        <td className="loadport" style={{display: 'none'}} rowSpan={4}><input type="text" className="form-control" defaultValue="MANGALORE, KARNATKA" /></td>
        <td><input type="text" className="form-control" defaultValue={item.DestinationPorts.Port4} /></td>
        <td><input type="text" className="form-control autocompleteloaded" defaultValue="DUBAI" id="autocom85" /></td>
        <td><input type="text" className="form-control" defaultValue="$1000" /></td>
        <td><input type="text" className="form-control" defaultValue="$1500" /></td>
        <td><input type="text" className="form-control" defaultValue="15 TO 20 DAYS" /></td>
        <td><input type="text" className="form-control" defaultValue="SHIPPING LINE : HAPAG LLOYD......" /></td>
        <td><button type='button' className='btn btn-sm rowfy-deleterow btn-success'>+</button></td>
      </tr>
      </>
       );
      })} 
      
    </tbody>  
  </table>
</div>
<div className='my-4'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-4 differential_btns'>
  <button type="button" className="btn btn-primary">Save</button>
  <button type="button" className="btn btn-outline-primary">Reset</button>
        </div>
        <div className='col-md-5 text-right price_info'>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default FreightRateEntry