import React, { useState} from 'react' 
import './style.scss'
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import eyeIcon from "../../../../Assets/Icons/eye_Icon.svg";
import editIcon from "../../../../Assets/Icons/edit.svg";
import trash from "../../../../Assets/Icons/trash.svg";
import { useHistory } from 'react-router-dom';
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
const ListUsers = () => {
    const columns  = [
        {
          dataField: "User",
          text: "User",
          sort: true
        },
        {
          dataField: "Occupation",
          text: "Occupation",
          sort: true,
          // filter: textFilter()
        },
        {
          dataField: "Country",
          text: "Country",
          sort: true,
          // filter: textFilter()
        },
        {
          dataField: "Phone",
          text: "Phone",
          sort: true,
          // filter: textFilter()
        },
        {
            dataField: "Email",
            text: "Email",
            sort: true,
            // filter: textFilter()
          },
          {
            dataField: "Subscription",
            text: "Subscription",
            sort: true,
            // filter: textFilter()
          },
          {
            dataField: "UserType",
            text: "User Type",
            sort: true,
            // filter: textFilter()
          },
        // {
        //   dataField: "verified",
        //   text: "Verified",
        
        //   formatter: checkCircle,
        //   // filter: textFilter()
        // },
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
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"Brazil",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"Platinum",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"China",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"Columbia",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"Internal",
            UserType:"Gold",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"Internal",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"Gold",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"External",
        },
        {
            User:"John Doe",
            Occupation:"Employee",
            Country:"India",
            Phone:"9989989499",
            Email:"testing@gmail.com",
            Subscription:"	Regular",
            UserType:"Internal",
        },
       
      ];
        function imageFormatter(cell, row){
            return <div onClick={redirect} style={{cursor:'pointer'}}><img src= {editIcon} /></div>;
        //   return <div onClick={redirect}><img src= {editIcon} /></div>;
          } 
            function trashBin(cell, row){
              return <img src= {trash} />;
              }
        let history = useHistory();
        const redirect = () => {
          history.push('/edituser')
        }
        const [FormData, setFormData] = useState(product)
        const [searchfilter, setsearchfilter] = useState('');
        const handleSearchElements = (event) => {
          // console.log("searched value", event.target.value);
          let filterData = [];
          setsearchfilter(event.target.value)
          product.forEach((item) => {
                  if (item.Country.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                      filterData.push(item);
                      return;
              }
              if (item.Subscription.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                filterData.push(item);
                return;
        }
          })
        
          console.log(filterData)
          setFormData(filterData);
        
        }

  return (
    <>
  <div className="list_newsfeed container my-5">
    <div className='row my-3 align-items-center'>
<div className='col-md-6'>
    <h5 className='main-head'>USER LIST</h5>
</div>
<div className='col-md-6 text-right'>
    <div className="search_bar text-right">
            <span>Search : </span>
             <input onChange={handleSearchElements} value={searchfilter} className='serch_form' />
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

export default ListUsers