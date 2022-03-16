import React, {useState} from 'react'
import './style.scss';
import MultiSelectDD from "../../../../Components/MultiSelectDD";
const EditTradeBox = () => {
  let Items=[
    {
      id:'dd1',
      value:'Green Beans'
    },
    {
      id:'dd2',
      value:'Roasted Beans'
    },
    {
      id:'dd3',
      value:'Instant Coffee'
    },
    {
      id:'dd4',
      value:'Ground Coffee'
    },
  ]
  const handleSelectedItem=(item)=>{
    console.log(item);
    if (Array.isArray(item)) {
      setfruit([...item])
    }
    else{
  setfruit({...item,
    id:item.id,
  value:item.value})
    }
  }

  const [fruit, setfruit] = useState({
    id:'',
    value:''
  })
  const hadle_removeSelected_item=(arg)=>{
    console.log("remove zSle",arg);
    let temp_arr=[]
    fruit.filter((item)=>{
    item.id!=arg.id&&temp_arr.push(item)
    })
    setfruit(temp_arr)
    }
  return (
    <>
<div className="list_trader container" style={{marginBottom: 20, marginTop: 20}}>
  <div className="d-flex justify-content-center h-100">
    <div className="trader_card" style={{height: 'auto', width: 700}}>
      <div className="card-body">
        <div translate="yes" className="msg no-display" />
        <input type="hidden" id="hdnSessionId" defaultValue={22} />
        <div className="row">
          <div className="col-md-6">
            <p translate="yes" style={{fontWeight: 'bold'}}>
              <a className="no-display goback" title="Back"><i className="fas fa-arrow-circle-left" aria-hidden="true" /></a>
              TRADER DETAILS
            </p>
          </div>
        </div>
        <form className="frmseller" data-parsley-validate data-parsley-focus="none">
          <div className="row discntrl my-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label translate="yes" htmlFor="ddlUsers" className="form-label" style={{width: '100%'}}>User<span className="mandate">*</span></label>
              <select data-parsley-errors-container=".grp1" name="ddlselect2" id="ddlUsers" className="select2 form-control" style={{width: '100%'}} required data-parsley-min-message="This value is required." data-parsley-min={1}>
                <option value={0}>--Select--</option>
                <option value={2}> Vishnu Chandran</option>
                <option value={5}> Ronaldo Carlos</option>
                <option value={11}> ajesh1 mp1</option>
                <option value={12}> Sasi Kanth</option>
                <option selected value={22}> Isha Vijayan</option>
                <option value={23}> Sriram UL</option>
                <option value={24}> Sachin BP</option>
                <option value={29}> Soumya Prasad</option>
                <option value={30}> Raman Naik</option>
                <option value={35}> Sunil DS</option>
                <option value={128}> Chethan KG</option>
              </select>
              <div className="grp1" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" style={{borderTop: '1px solid #cdc8c8'}}>
              <span>&nbsp;</span>
            </div>
          </div> */}
          <div className="row  sectionrow my-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label translate="yes" htmlFor="txtSellerName" className="form-label">Trading Name<span className="mandate">*</span></label>
              <input type="text" required className="form-control" id="txtSellerName" defaultValue="Isha Vijayan" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="row  sectionrow my-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label translate="yes" htmlFor="ddlTradingType" className="form-label ">Trading Type<span className="mandate">*</span></label>
              <select className="form-control select2" name="ddlselect2" data-parsley-errors-container=".grp11" id="ddlTradingType" required data-parsley-min-message="This value is required." data-parsley-min={1}>
                <option value={0}>--Select--</option>
                <option selected value={1}>Buyer</option>
                <option value={2}>Seller</option>
              </select>
              <div className="grp11" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label translate="yes" htmlFor="txtWebsite" className="form-label">Website Address</label>
              <input type="text" className="form-control" id="txtWebsite" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="row  sectionrow my-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label translate="yes" htmlFor="txtAddress1" className="form-label">Full Address<span className="mandate">*</span></label>
              <input type="text" required className="form-control" id="txtAddress1" aria-describedby="emailHelp" defaultValue="Test" />
            </div>
          </div>
          <div className="row  sectionrow my-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label translate="yes" htmlFor="ddlSupplierType" className="form-label" style={{width: '100%'}}>Trader Supplier Type(s)<span className="mandate">*</span></label>
              {/* <select class="selectpicker" multiple data-live-search="true" className="form-control select2" name="ddlselect2" data-parsley-errors-container=".grp11" id="ddlTradingType" required data-parsley-min-message="This value is required." data-parsley-min={1}>
              <option value={0}>--Select--</option>
                <option value={1}>Green Beans</option>
                <option value={2}>Roasted Beans</option>
                <option value={3}>Instant Coffee</option>
                <option value={4}>Ground Coffee</option>
              </select> */}
                 <MultiSelectDD  
   item={fruit}
    items={Items}
    multiSelect={true}
     seletedItem={handleSelectedItem}
     removeSelected={hadle_removeSelected_item}
     hint={'please select the values'}
     data-parsley-errors-container=".grp11" id="ddlTradingType" required
     data-parsley-min={1}
     />
              <div className="grp2" />
            </div>
          </div>
          <div translate="yes" className="mt-3  sectionrow" style={{textAlign: 'center'}}>
          <div className='differential_btns'>
  <button type="button" className="btn save_btn">Save</button>
  <button type="button" className="btn reset_btn">Reset</button>
        </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default EditTradeBox