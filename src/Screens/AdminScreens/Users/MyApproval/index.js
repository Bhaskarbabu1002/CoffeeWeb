import React, { useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import eyeIcon from "../../../../Assets/Icons/eye_Icon.svg";
import editIcon from "../../../../Assets/Icons/edit.svg";
import trash from "../../../../Assets/Icons/trash.svg";
import { useHistory } from "react-router-dom";
import "./style.scss";
const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];
const options = {
  page: 1,
  sizePerPage: 5,
  nextPageText: "Next",
  prePageText: "Previous",
  showTotal: true,
};
const MyApproval = () => {
  const columns = [
    {
      dataField: "ApprovalType",
      text: "Approval Type",
      sort: true,
    },
    {
      dataField: "Status",
      text: "Status",
      sort: true,
      // filter: textFilter()
    },
    {
      dataField: "StatusBy",
      text: "Status By",
      sort: true,
      // filter: textFilter()
    },
    {
      dataField: "StatusDate",
      text: "Status Date",
      sort: true,
      // filter: textFilter()
    },
    {
      dataField: "CreatedDate",
      text: "Created Date",
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
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
    {
      ApprovalType:"Differentials",
      Status:"Approved",
      StatusBy: "Jithin",
      StatusDate: "19-12-2021 03:57 AM",
      CreatedDate: "19-12-2021 03:57 AM",
    },
  ];
  function imageFormatter(cell, row) {
    return (
      <div onClick={redirect}>
        <img src={editIcon} />
      </div>
    );
    //   return <div onClick={redirect}><img src= {editIcon} /></div>;
  }
  function eye(cell, row) {
    return <img src={eyeIcon} />;
  }
  function trashBin(cell, row) {
    return <img src={trash} />;
  }
  let history = useHistory();
  const redirect = () => {
    history.push("/editnewsfeed");
  };
  const [FormData, setFormData] = useState(product);
  const [searchfilter, setsearchfilter] = useState("");
  const handleSearchElements = (event) => {
    // console.log("searched value", event.target.value);
    let filterData = [];
    setsearchfilter(event.target.value);
    product.forEach((item) => {
      if (
        item.NewsAuthor.toString()
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase())
      ) {
        filterData.push(item);
        return;
      }
      if (
        item.NewsSubject.toString()
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase())
      ) {
        filterData.push(item);
        return;
      }
    });

    console.log(filterData);
    setFormData(filterData);
  };
  return (
    <>
      <div className="approval_list container my-5">
        <div className="row my-3 align-items-center">
          <div className="col-md-6">
            <h5 className="main-head">APPROVAL LIST</h5>
          </div>
          <div className="col-md-6 text-right">
            <div className="search_bar text-right">
              <span>Search : </span>
              <input
                placeholder=""
                onChange={handleSearchElements}
                value={searchfilter}
                className="serch_form"
              />
            </div>
          </div>
        </div>

        {/* <input type="text" value={filter}/> */}
        <BootstrapTable
          striped
          keyField="id"
          data={FormData}
          columns={columns}
          pagination={paginationFactory(options)}
          //  filter={ filterFactory()}
          //  filterPosition="top"
          defaultSorted={defaultSorted}
        />
      </div>
    </>
  );
};

export default MyApproval;
