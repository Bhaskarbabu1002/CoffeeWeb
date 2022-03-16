import React from 'react'
import "./DifferentialsEntry.scss";
const DifferentialsEntry = () => {
    const DiffData = [
        {
            SlNo: '1',
            Countries: 'India',
            PlantationsScreen18Low: 20,
            PlantationsScreen18High: 25,
            PlantationsScreen17Low: 15,
            PlantationsScreen17High: 20,
            PlantationsScreen16Low: 10,
            PlantationsScreen16High: 15,
            PlantationsScreen15Low: 5,
            PlantationsScreen15High: 10,
            PlantationsScreen14Low: 0,
            PlantationsScreen14High: 5,
            ArabicaCherryScreen18Low: 20,
            ArabicaCherryScreen18High: 25,
            ArabicaCherryScreen17Low: 15,
            ArabicaCherryScreen17High: 20,
            ArabicaCherryScreen16Low: 10,
            ArabicaCherryScreen16High: 15,
            ArabicaCherryScreen15Low: 5,
            ArabicaCherryScreen15High: 10,
            ArabicaCherryScreen14Low: 0,
            ArabicaCherryScreen14High: 5,
        },
        {
          SlNo: '2',
          Countries: 'Brazil',
          PlantationsScreen18Low: 20,
          PlantationsScreen18High: 25,
          PlantationsScreen17Low: 15,
          PlantationsScreen17High: 20,
          PlantationsScreen16Low: 10,
          PlantationsScreen16High: 15,
          PlantationsScreen15Low: 5,
          PlantationsScreen15High: 10,
          PlantationsScreen14Low: 0,
          PlantationsScreen14High: 5,
          ArabicaCherryScreen18Low: 20,
          ArabicaCherryScreen18High: 25,
          ArabicaCherryScreen17Low: 15,
          ArabicaCherryScreen17High: 20,
          ArabicaCherryScreen16Low: 10,
          ArabicaCherryScreen16High: 15,
          ArabicaCherryScreen15Low: 5,
          ArabicaCherryScreen15High: 10,
          ArabicaCherryScreen14Low: 0,
          ArabicaCherryScreen14High: 5,
      },
      {
        SlNo: '3',
        Countries: 'China',
        PlantationsScreen18Low: 20,
        PlantationsScreen18High: 25,
        PlantationsScreen17Low: 15,
        PlantationsScreen17High: 20,
        PlantationsScreen16Low: 10,
        PlantationsScreen16High: 15,
        PlantationsScreen15Low: 5,
        PlantationsScreen15High: 10,
        PlantationsScreen14Low: 0,
        PlantationsScreen14High: 5,
        ArabicaCherryScreen18Low: 20,
        ArabicaCherryScreen18High: 25,
        ArabicaCherryScreen17Low: 15,
        ArabicaCherryScreen17High: 20,
        ArabicaCherryScreen16Low: 10,
        ArabicaCherryScreen16High: 15,
        ArabicaCherryScreen15Low: 5,
        ArabicaCherryScreen15High: 10,
        ArabicaCherryScreen14Low: 0,
        ArabicaCherryScreen14High: 5,
    },
    {
      SlNo: '4',
      Countries: 'Colombia',
      PlantationsScreen18Low: 20,
      PlantationsScreen18High: 25,
      PlantationsScreen17Low: 15,
      PlantationsScreen17High: 20,
      PlantationsScreen16Low: 10,
      PlantationsScreen16High: 15,
      PlantationsScreen15Low: 5,
      PlantationsScreen15High: 10,
      PlantationsScreen14Low: 0,
      PlantationsScreen14High: 5,
      ArabicaCherryScreen18Low: 20,
      ArabicaCherryScreen18High: 25,
      ArabicaCherryScreen17Low: 15,
      ArabicaCherryScreen17High: 20,
      ArabicaCherryScreen16Low: 10,
      ArabicaCherryScreen16High: 15,
      ArabicaCherryScreen15Low: 5,
      ArabicaCherryScreen15High: 10,
      ArabicaCherryScreen14Low: 0,
      ArabicaCherryScreen14High: 5,
  },
  {
    SlNo: '5',
    Countries: 'Costarica',
    PlantationsScreen18Low: 20,
    PlantationsScreen18High: 25,
    PlantationsScreen17Low: 15,
    PlantationsScreen17High: 20,
    PlantationsScreen16Low: 10,
    PlantationsScreen16High: 15,
    PlantationsScreen15Low: 5,
    PlantationsScreen15High: 10,
    PlantationsScreen14Low: 0,
    PlantationsScreen14High: 5,
    ArabicaCherryScreen18Low: 20,
    ArabicaCherryScreen18High: 25,
    ArabicaCherryScreen17Low: 15,
    ArabicaCherryScreen17High: 20,
    ArabicaCherryScreen16Low: 10,
    ArabicaCherryScreen16High: 15,
    ArabicaCherryScreen15Low: 5,
    ArabicaCherryScreen15High: 10,
    ArabicaCherryScreen14Low: 0,
    ArabicaCherryScreen14High: 5,
},
{
  SlNo: '6',
  Countries: 'Ivaro Coast',
  PlantationsScreen18Low: 20,
  PlantationsScreen18High: 25,
  PlantationsScreen17Low: 15,
  PlantationsScreen17High: 20,
  PlantationsScreen16Low: 10,
  PlantationsScreen16High: 15,
  PlantationsScreen15Low: 5,
  PlantationsScreen15High: 10,
  PlantationsScreen14Low: 0,
  PlantationsScreen14High: 5,
  ArabicaCherryScreen18Low: 20,
  ArabicaCherryScreen18High: 25,
  ArabicaCherryScreen17Low: 15,
  ArabicaCherryScreen17High: 20,
  ArabicaCherryScreen16Low: 10,
  ArabicaCherryScreen16High: 15,
  ArabicaCherryScreen15Low: 5,
  ArabicaCherryScreen15High: 10,
  ArabicaCherryScreen14Low: 0,
  ArabicaCherryScreen14High: 5,
},
{
  SlNo: '7',
  Countries: 'Costarica',
  PlantationsScreen18Low: 20,
  PlantationsScreen18High: 25,
  PlantationsScreen17Low: 15,
  PlantationsScreen17High: 20,
  PlantationsScreen16Low: 10,
  PlantationsScreen16High: 15,
  PlantationsScreen15Low: 5,
  PlantationsScreen15High: 10,
  PlantationsScreen14Low: 0,
  PlantationsScreen14High: 5,
  ArabicaCherryScreen18Low: 20,
  ArabicaCherryScreen18High: 25,
  ArabicaCherryScreen17Low: 15,
  ArabicaCherryScreen17High: 20,
  ArabicaCherryScreen16Low: 10,
  ArabicaCherryScreen16High: 15,
  ArabicaCherryScreen15Low: 5,
  ArabicaCherryScreen15High: 10,
  ArabicaCherryScreen14Low: 0,
  ArabicaCherryScreen14High: 5,
},
{
  SlNo: '8',
  Countries: 'Equador',
  PlantationsScreen18Low: 20,
  PlantationsScreen18High: 25,
  PlantationsScreen17Low: 15,
  PlantationsScreen17High: 20,
  PlantationsScreen16Low: 10,
  PlantationsScreen16High: 15,
  PlantationsScreen15Low: 5,
  PlantationsScreen15High: 10,
  PlantationsScreen14Low: 0,
  PlantationsScreen14High: 5,
  ArabicaCherryScreen18Low: 20,
  ArabicaCherryScreen18High: 25,
  ArabicaCherryScreen17Low: 15,
  ArabicaCherryScreen17High: 20,
  ArabicaCherryScreen16Low: 10,
  ArabicaCherryScreen16High: 15,
  ArabicaCherryScreen15Low: 5,
  ArabicaCherryScreen15High: 10,
  ArabicaCherryScreen14Low: 0,
  ArabicaCherryScreen14High: 5,
},
    ]
  return (
    <>
    <div className='differentials_entry_section container'>
    <div className='row my-3 align-items-center'>
<div className='col-md-6'>
    <h5 className='main-head'>GLOBAL DIFFERENTIALS</h5>
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
       <div className="table-scrollable" style={{height: '440px !important', overflowX: 'scroll !important'}}>
  <table cellSpacing={0} className="table table-sm table-bordered table-striped" style={{minWidth: 5500}}>
    <thead translate="yes" className='differentials_thead'>
      <tr>
        <th className="customthead" data-inner-menu={18} rowSpan={3}>Sl No</th>
        <th className="customthead" data-inner-menu={19} rowSpan={3}>Countries</th>
        <th className="customthead" data-inner-menu={20} colSpan={10}>Plantations</th>
        <th className="customthead" data-inner-menu={21} colSpan={10}>Arabica Cherry</th>
        <th className="customthead" data-inner-menu={22} colSpan={10}>Robusta Cherry</th>
        <th className="customthead" data-inner-menu={23} colSpan={11}>Other Grades</th>
      </tr>
      <tr>
        <th className="customthead" data-inner-menu={24} colSpan={2}>Screen-18</th>
        <th className="customthead" data-inner-menu={25} colSpan={2}>Screen-17</th>
        <th className="customthead" data-inner-menu={26} colSpan={2}>Screen-16</th>
        <th className="customthead" data-inner-menu={27} colSpan={2}>Screen-15</th>
        <th className="customthead" data-inner-menu={28} colSpan={2}>Screen-14</th>
        <th className="customthead" data-inner-menu={29} colSpan={2}>Screen-18</th>
        <th className="customthead" data-inner-menu={30} colSpan={2}>Screen-17</th>
        <th className="customthead" data-inner-menu={31} colSpan={2}>Screen-16</th>
        <th className="customthead" data-inner-menu={32} colSpan={2}>Screen-15</th>
        <th className="customthead" data-inner-menu={33} colSpan={2}>Screen-14</th>
        <th className="customthead" data-inner-menu={34} colSpan={2}>Screen-18</th>
        <th className="customthead" data-inner-menu={35} colSpan={2}>Screen-17</th>
        <th className="customthead" data-inner-menu={36} colSpan={2}>Screen-16</th>
        <th className="customthead" data-inner-menu={37} colSpan={2}>Screen-15</th>
        <th className="customthead" data-inner-menu={38} colSpan={2}>Screen-14</th>
        <th className="customthead" data-inner-menu={39} colSpan={2}>Screen-18</th>
        <th className="customthead" data-inner-menu={40} colSpan={2}>Screen-17</th>
        <th className="customthead" data-inner-menu={41} colSpan={2}>Screen-16</th>
        <th className="customthead" data-inner-menu={42} colSpan={2}>Screen-15</th>
        <th className="customthead" data-inner-menu={43} colSpan={2}>Screen-14</th>
        <th className="customthead" data-inner-menu={86} colSpan={2}>Grade Name</th>
      </tr>
      <tr>
        <th className="customthead" data-inner-menu={44}>Low</th>
        <th className="customthead" data-inner-menu={45}>High</th>
        <th className="customthead" data-inner-menu={46}>Low</th>
        <th className="customthead" data-inner-menu={47}>High</th>
        <th className="customthead" data-inner-menu={48}>Low</th>
        <th className="customthead" data-inner-menu={49}>High</th>
        <th className="customthead" data-inner-menu={52}>Low</th>
        <th className="customthead" data-inner-menu={53}>High</th>
        <th className="customthead" data-inner-menu={54}>Low</th>
        <th className="customthead" data-inner-menu={55}>High</th>
        <th className="customthead" data-inner-menu={56}>Low</th>
        <th className="customthead" data-inner-menu={57}>High</th>
        <th className="customthead" data-inner-menu={58}>Low</th>
        <th className="customthead" data-inner-menu={59}>High</th>
        <th className="customthead" data-inner-menu={60}>Low</th>
        <th className="customthead" data-inner-menu={61}>High</th>
        <th className="customthead" data-inner-menu={62}>Low</th>
        <th className="customthead" data-inner-menu={63}>High</th>
        <th className="customthead" data-inner-menu={64}>Low</th>
        <th className="customthead" data-inner-menu={65}>High</th>
        <th className="customthead" data-inner-menu={66}>Low</th>
        <th className="customthead" data-inner-menu={67}>High</th>
        <th className="customthead" data-inner-menu={68}>Low</th>
        <th className="customthead" data-inner-menu={85}>High</th>
        <th className="customthead" data-inner-menu={69}>Low</th>
        <th className="customthead" data-inner-menu={70}>High</th>
        <th className="customthead" data-inner-menu={71}>Low</th>
        <th className="customthead" data-inner-menu={72}>High</th>
        <th className="customthead" data-inner-menu={73}>Low</th>
        <th className="customthead" data-inner-menu={74}>High</th>
        <th className="customthead" data-inner-menu={75}>Low</th>
        <th className="customthead" data-inner-menu={76}>High</th>
        <th className="customthead" data-inner-menu={77}>Low</th>
        <th className="customthead" data-inner-menu={78}>High</th>
        <th className="customthead" data-inner-menu={79}>Low</th>
        <th className="customthead" data-inner-menu={80}>High</th>
        <th className="customthead" data-inner-menu={81}>Low</th>
        <th className="customthead" data-inner-menu={82}>High</th>
        <th className="customthead" data-inner-menu={83}>Low</th>
        <th className="customthead" data-inner-menu={84}>High</th>
        <th className="customthead" data-inner-menu={87} />
      </tr>
    </thead>
    <tbody>
      {DiffData.map((item) => {
          return (
            <tr>
            <th style={{verticalAlign: 'middle', fontWeight: 'normal', width: 60}} data-columns="ledger-col-0">{item.SlNo}</th>
            <td className="countrycls" data-c-id={102} style={{padding: '0px 0px 0px 10px', verticalAlign: 'middle', minWidth: 200}}>
              <img src="/Content/Images/Flags/32/in_32.png" />
              <span style={{verticalAlign: 'middle'}}>{item.Countries}</span>
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen18Low} type="text" className="form-control mynmeric" data-menu-id={44} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen18High} type="text" className="form-control mynmeric" data-menu-id={45} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen17Low} type="text" className="form-control mynmeric" data-menu-id={46} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen17High} type="text" className="form-control mynmeric" data-menu-id={47} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen16Low} type="text" className="form-control mynmeric" data-menu-id={48} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen16High} type="text" className="form-control mynmeric" data-menu-id={49} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen15Low} type="text" className="form-control mynmeric" data-menu-id={52} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen15High} type="text" className="form-control mynmeric" data-menu-id={53} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen14Low} type="text" className="form-control mynmeric" data-menu-id={54} data-country-id={102} />
            </td>
            <td>
              <input defaultValue={item.PlantationsScreen14High} type="text" className="form-control mynmeric" data-menu-id={55} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={56} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={57} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={58} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={59} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={60} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={61} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={62} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={63} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={64} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={65} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={66} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={67} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={68} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={85} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={69} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={70} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={71} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={72} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={73} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={74} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={75} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={76} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={77} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={78} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={79} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={80} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={81} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={82} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={83} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={84} data-country-id={102} />
            </td>
            <td>
              <input type="text" className="form-control mynmeric" data-menu-id={87} data-country-id={102} />
            </td>
          </tr>
          );
      })}
     
    </tbody>
  </table>
</div>
<div className='my-4'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-4 differential_btns'>
  <button type="button" className="btn save_btn">Save</button>
  <button type="button" className="btn reset_btn">Reset</button>
  <button type="button" className="btn save_btn">New Entry</button>
        </div>
        <div className='col-md-5 text-right price_info'>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default DifferentialsEntry