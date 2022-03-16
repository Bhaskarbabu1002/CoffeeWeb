import React, { useState} from 'react' 
import './style.scss';
import { useHistory } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import checkcircle from "../../../../Assets/Icons/check-circle.svg";
import editIcon from "../../../../Assets/Icons/edit.svg";
import trash from "../../../../Assets/Icons/trash.svg";


const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];
const options = {
  page: 1,
  sizePerPage: 5,
  nextPageText: 'Next',
  prePageText: 'Previous',
  showTotal: true,
};
// const handleClick = (e)=>{
//   e.preventDefault();
//     console.log('You clicked submit.');
// }
const ListTraders = () => {
  
const columns  = [
  {
    dataField: "trader",
    text: "Trader",
    sort: true
  },
  {
    dataField: "type",
    text: "Trading Type",
    
    // filter: textFilter()
  },
  {
    dataField: "address",
    text: "Address",
    // filter: textFilter()
  },
  {
    dataField: "country",
    text: "Country",
    sort: true,
    // filter: textFilter()
  },
  {
    dataField: "supplier",
    text: "	Trader Supplier Type(s)",
  
    // filter: textFilter()
  },
  {
    dataField: "verified",
    text: "Verified",
  
    formatter: checkCircle,
    // filter: textFilter()
  },
  {
    dataField: "Edit",
    text: "Edit",
  
    formatter: imageFormatter,
    // editCellStyle: (cell, row, rowIndex, colIndex) => {
    //   <img src={editIcon} alt='edit_icon'/>;
    //   return { editIcon };
    // }
  },
  {
    dataField: "delete",
    text: "Delete",
  
    formatter: trashBin,
    // filter: textFilter()
  },
];
const product = [
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:edit,
    // delete:"",
  },
  {
    trader:"Western Coffee Curers Exports Pvt. Ltd",
    type:"Buyer",
    address:"	Test Address",
    country:"Brazil",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Leo UL",
    type:"Buyer",
    address:"	Test Address",
    country:"China",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"Columbia",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Western Coffee Curers Exports Pvt. Ltd",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"John",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Sriram UL",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
  {
    trader:"Western Coffee Curers Exports Pvt. Ltd",
    type:"Buyer",
    address:"	Test Address",
    country:"India",
    supplier:"	Green Beans,Roasted Beans,Instant Coffee,Ground Coffee",
    // verified:"",
    // edit:"",
    // delete:"",
  },
 
];
  function imageFormatter(cell, row){
    return <div onClick={redirect}><img src= {editIcon} /></div>;
    }
    function checkCircle(cell, row){
      return <img src= {checkcircle} />;
      }
      function trashBin(cell, row){
        return <img src= {trash} />;
        }
  let history = useHistory();
  const redirect = () => {
    history.push('/edittraders')
  }
  const [FormData, setFormData] = useState(product)
  const [searchfilter, setsearchfilter] = useState('');
  const handleSearchElements = (event) => {
    // console.log("searched value", event.target.value);
    let filterData = [];
    setsearchfilter(event.target.value)
    product.forEach((item) => {
            if (item.country.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                filterData.push(item);
                return;
        }
        if (item.trader.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
          filterData.push(item);
          return;
  }
    })
  
    console.log(filterData)
    setFormData(filterData);
  
  }
  return (
   <>
    <div className="list_traders container my-5">
    <div className='row my-3 align-items-center'>
<div className='col-md-6'>
    <h5 className='main-head'>TRADER LIST</h5>
</div>
<div className='col-md-6 text-right'>
    <div className="search_bar text-right">
            <span>Search : </span>
             <input placeholder='Trader or Country' onChange={handleSearchElements} value={searchfilter} className='serch_form' />
               </div>
</div>
    </div>
      
      {/* <input type="text" value={filter}/> */}
    <BootstrapTable 
        striped
        keyField='id'
          data={ FormData }
          columns ={ columns  } 
          
           pagination={ paginationFactory(options) }
          //  filter={ filterFactory()}
          //  filterPosition="top"
           defaultSorted={ defaultSorted } 
/>
    </div>
   </>
  )
}

export default ListTraders