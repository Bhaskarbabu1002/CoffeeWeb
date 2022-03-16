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
const ListNewsFeed = () => {

    const columns  = [
        {
          dataField: "NewsDate",
          text: "News Date",
          sort: true
        },
        {
          dataField: "NewsAuthor",
          text: "News Author",
          sort: true,
          // filter: textFilter()
        },
        {
          dataField: "NewsSubject",
          text: "News Subject",
          sort: true,
          // filter: textFilter()
        },
        {
          dataField: "Views",
          text: "Views",
          sort: true,
          // filter: textFilter()
        },
        {
          dataField: "Preview",
          text: "Preview",
          sort: true,
          formatter: eye,
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
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Ram",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"More rains expected as depression likely to cross over Tamil Nadu on Nov 11",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Image to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
        {
            NewsDate:"19-12-2021 03:57 AM",
            NewsAuthor:"Jithin",
            NewsSubject:"Video to Check Youtube",
            Views:5,
        },
       
      ];
        function imageFormatter(cell, row){
            return <div onClick={redirect}><img src= {editIcon} /></div>;
        //   return <div onClick={redirect}><img src= {editIcon} /></div>;
          }
          function eye(cell, row){
            return <img src= {eyeIcon} />;
            }
            function trashBin(cell, row){
              return <img src= {trash} />;
              }
        let history = useHistory();
        const redirect = () => {
          history.push('/editnewsfeed')
        }
        const [FormData, setFormData] = useState(product)
        const [searchfilter, setsearchfilter] = useState('');
        const handleSearchElements = (event) => {
          // console.log("searched value", event.target.value);
          let filterData = [];
          setsearchfilter(event.target.value)
          product.forEach((item) => {
                  if (item.NewsAuthor.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                      filterData.push(item);
                      return;
              }
              if (item.NewsSubject.toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
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
    <h5 className='main-head'>NEWS FEED LIST</h5>
</div>
<div className='col-md-6 text-right'>
    <div className="search_bar text-right">
            <span>Search : </span>
             <input placeholder='Author or Subject' onChange={handleSearchElements} value={searchfilter} className='serch_form' />
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

export default ListNewsFeed