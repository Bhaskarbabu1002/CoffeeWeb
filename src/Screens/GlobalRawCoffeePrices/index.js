import React from 'react'
import "./style.scss";
import InfoIcon from "../../Assets/Icons/Info_Icon.png";
const GlobalRawCoffeePrices = () => {
    const Data = [
        {
            SlNo: '1',
            Countries: 'India',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '2',
            Countries: 'Brazil',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '3',
            Countries: 'Viet Nam',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '4',
            Countries: 'Colombia',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '5',
            Countries: 'Indonesia',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '6',
            Countries: 'Ethiopia',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '7',
            Countries: 'Honduras',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '8',
            Countries: 'Uganda',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
            SlNo: '9',
            Countries: 'Mexico',
            ArabicaParchmentLower: 1300,
            ArabicaParchmentHigher: 13200,
            ArabicaCherryLower: 6600,
            ArabicaCherryHigher: 6800,
            RobustaCherryLower: 3800,
            RobustaCherryHigher: 4000,
            RobustaParchmentLower: 'NIL',
            RobustaParchmentHigher: 'NIL',
            OtherGradesLower: 'Test',
            OtherGradesHigher: '100-200',
        },
        {
          SlNo: '10',
          Countries: 'Mexico',
          ArabicaParchmentLower: 1300,
          ArabicaParchmentHigher: 13200,
          ArabicaCherryLower: 6600,
          ArabicaCherryHigher: 6800,
          RobustaCherryLower: 3800,
          RobustaCherryHigher: 4000,
          RobustaParchmentLower: 'NIL',
          RobustaParchmentHigher: 'NIL',
          OtherGradesLower: 'Test',
          OtherGradesHigher: '100-200',
      },
      {
        SlNo: '11',
        Countries: 'Mexico',
        ArabicaParchmentLower: 1300,
        ArabicaParchmentHigher: 13200,
        ArabicaCherryLower: 6600,
        ArabicaCherryHigher: 6800,
        RobustaCherryLower: 3800,
        RobustaCherryHigher: 4000,
        RobustaParchmentLower: 'NIL',
        RobustaParchmentHigher: 'NIL',
        OtherGradesLower: 'Test',
        OtherGradesHigher: '100-200',
    },
    {
      SlNo: '12',
      Countries: 'Mexico',
      ArabicaParchmentLower: 1300,
      ArabicaParchmentHigher: 13200,
      ArabicaCherryLower: 6600,
      ArabicaCherryHigher: 6800,
      RobustaCherryLower: 3800,
      RobustaCherryHigher: 4000,
      RobustaParchmentLower: 'NIL',
      RobustaParchmentHigher: 'NIL',
      OtherGradesLower: 'Test',
      OtherGradesHigher: '100-200',
  },
    ]
  return (
    <>
<div className='container global_coffee_price'>
    <div className='row my-3'>
<div className='col-md-6'>
    <h5 className='main-head'>Global Raw Coffee Prices</h5>
    <h6 className='sub-head'><b>NOTE : </b> <span>PRICES ARE SHOWING FOR 50 KG OF RAW BAGS</span></h6>
</div>
<div className='col-md-6 text-right'>
    <span><b>Select Your Currency :-</b></span>
    <select name="cars" id="cars">
    <option value="volvo">USD-US Dollar</option>
    <option value="saab">BRL-Brazilian Real</option>
    <option value="opel">VND-Dong</option>
    <option value="audi">COP-Colombian Peso</option>
    <option value="audi">KES-Kenyan Shilling</option>
    <option value="audi">PGK-Kina</option>
    <option value="audi">CRC-Costa Rican Colon</option>
    <option value="audi">XOF-CFA Franc BCEAO</option>
    <option value="audi">CNY-Yuan Renminbi</option>
  </select>
</div>
 </div>
{/* Table Starts */}
<div className="table-scrollable" style={{height: '440px !important', overflowX: 'scroll !important'}}>
  <table cellSpacing={0} className="table table-sm table-bordered table-striped" style={{minWidth: '100%'}}>
    <thead translate="yes" className='coffee_price_thead'>
      <tr>
        <th className="customthead" rowSpan={2}>Sl No</th>
        <th className="customthead" rowSpan={2}>Countries</th>
        <th className="customthead" colSpan={2}>Arabica Parchment</th>
        <th className="customthead" colSpan={2}>Arabica Cherry</th>
        <th className="customthead" colSpan={2}>Robusta Cherry</th>
        <th className="customthead" colSpan={2}>Robusta Parchment</th>
        <th className="customthead" colSpan={2}>Other Grades</th>
      </tr>
      <tr>
        <th className="customthead">Lower</th>
        <th className="customthead">Higher</th>
        <th className="customthead">Lower</th>
        <th className="customthead">Higher</th>
        <th className="customthead">Lower</th>
        <th className="customthead">Higher</th>
        <th className="customthead">Lower</th>
        <th className="customthead">Higher</th>
        <th className="customthead">Grade Name</th>
        <th className="customthead">Between</th>
      </tr>
    </thead>
    <tbody>
    {Data.map((item) => {
                  // console.log("mP",item);
                  return (
      <tr>
          
        <th style={{verticalAlign: 'middle', fontWeight: 'normal', width: 60}} data-columns="ledger-col-0">{item.SlNo}</th>
        <td className="countrycls" data-c-id={31} style={{padding: '0px 0px 0px 10px', verticalAlign: 'middle'}}>
          <img src="/Content/Images/Flags/32/br_32.png" />
          <span style={{verticalAlign: 'middle'}}>{item.Countries}</span>
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center',}}>
          {item.ArabicaParchmentLower} 
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.ArabicaParchmentHigher}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.ArabicaCherryLower}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.ArabicaCherryHigher}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.RobustaCherryLower}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.RobustaCherryHigher}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.RobustaParchmentLower}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.RobustaParchmentHigher}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.OtherGradesLower}
        </td>
        <td className='price_data' style={{width: 120, textAlign:'center'}}>
          {item.OtherGradesHigher}
        </td>
      </tr>
      );
    })}
    </tbody>
  </table>
</div>
</div>
    </>
  )
}

export default GlobalRawCoffeePrices