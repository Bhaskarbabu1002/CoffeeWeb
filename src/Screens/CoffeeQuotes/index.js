import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./style.scss";
import Data from "../../Utils/data.json";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/trash.svg";
const dateformat = (arg) => {
  let date = new Date(arg);
  return date.toLocaleDateString();
};
const CoffeQuotes = () => {
  const [tableData, settableData] = useState(Data);
  const [keys, setkeys] = useState([]);
  let date = new Date();
  useEffect(() => {
    // console.log("data", Object.keys(tableData));
    settableData(Data);
    setkeys(Object.keys(tableData[0]));
  }, []);
  return (
    <>
     <div className='coffee_quotes_table'>
     <div className="post_head">
        <h6>TRENDING NEWS</h6>
        <p>String</p>
      </div>
      <div className="main_table">
        <div className="table-card ">
          {/* <div className="d-flex"> */}
          <div class="row heading first-heading">
            <div class="col-sm">
              <div className="d-flex">
                <div>
                  {" "}
                  <p className="mb-0 bg-white px-2 font-weight-bold">
                    Time : {`${date.getHours()}:${date.getMinutes()}`}
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="mb-0 bg-white ml-3 px-2 font-weight-bold">
                    Date :{" "}
                    {`${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()}`}
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <div class="col-sm d-none d-md-block">
              <div className=" text-center">
                <p className=" pl-5 mb-0 main_heading">ROBUSTA MARKET</p>
              </div>
            </div>
            <div class="col-sm d-block d-md-none my-3">
              <div className="d-flex justify-content-end align-items-center">
                <select className="form-control font-weight-bold">
                  <option className="">RM</option>
                  <option className="">RM</option>
                  <option className="">RM</option>
                </select>
                <div className="form-group mx-sm-3 mb-0">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="RMU21"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
            <div class="col-sm d-block d-md-none">
              <div className=" text-center">
                <p className=" pl-5 mb-0 main_heading">ROBUSTA MARKET</p>
              </div>
            </div>
            <div class="col-sm d-none d-md-block">
              <div className="d-flex justify-content-end align-items-center">
                <select className="form-control font-weight-bold">
                  <option className="">RM</option>
                  <option className="">RM</option>
                  <option className="">RM</option>
                </select>
                <div className="form-group mx-sm-3 mb-0">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="RMU21"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="">
            <Table
              className="table table-striped align-items-center table-flush"
              responsive
            >
              <thead className=" font-weight-bold">
                <tr className="text-white">
                  <th scope="col">
                    <span className="pr-5">Contract</span>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Chg</th>
                  <th scope="col">%</th>
                  <th scope="col">Vol</th>
                  <th scope="col">High</th>
                  <th scope="col">$-High</th>
                  <th scope="col">Low</th>
                  <th scope="col">$-Low</th>
                  <th scope="col">Open</th>
                  <th scope="col">Prev</th>
                  <th scope="col">OPen Int</th>
                  <th scope="col">Bid</th>
                  <th scope="col">BSize</th>
                  <th scope="col">Ask</th>
                  <th scope="col">ASize</th>
                  <th scope="col">Option Exp</th>
                  <th scope="col">First Notice</th>
                  <th></th>
                  {/* {keys.map((item)=>{
        console.log("map",item);
        return(
          <th scope="col">{item}</th>
        )
      })} */}

                  {/* [
    "id",
    "symbol",
    "marketId",
    "serviceType",
    "status",
    "symbolExpiration",
    "priceFormatDenominator",
    "priceDenominator",
    "quantityDenominator",
    "transactionTime",
    "tradeDate",
    "tradingStatus",
    "bidPrice",
    "bidQuantity",
    "offerPrice",
    "offerQuantity",
    "openPrice",
    "high",
    "low",
    "last",
    "volume",
    "openInterest",
    "symbolStart",
    "symbolEnd",
    "isActive",
    "symbolType",
    "displayOrder",
    "apiKeyId",
    "lastUpdatedDate",
    "displayName",
    "previous",
    "channelId",
    "change",
    "percentage",
    "firstNotice"
] */}
                </tr>
              </thead>
              <tbody>
                {Data.map((item) => {
                  // console.log("mP",item);
                  return (
                    <tr>
                      <td className="contract">{item.displayName}</td>
                      <td>{item.last}</td>
                      <td>
                        <span className="zero">{item.change}</span>
                      </td>
                      <td>{item.percentage}</td>
                      <td>{item.volume}</td>
                      <td>{item.high}</td>
                      <td>2131</td>
                      <td>{item.low}</td>
                      <td>2109</td>
                      <td>{item.openPrice}</td>
                      <td>{item.previous}</td>
                      <td>{item.openInterest}</td>
                      <td>
                        <span className="zero">{item.bidPrice}</span>
                      </td>
                      <td>
                        <span className="zero">{item.bidQuantity}</span>
                      </td>
                      <td>
                        <span className="zero">{item.offerPrice}</span>
                      </td>
                      <td>
                        <span className="zero">{item.offerQuantity}</span>
                      </td>
                      <td>{dateformat(item.symbolExpiration)}</td>
                      <td>{item.firstNotice === null && "null"}</td>
                      <td>
                        <div>
                          {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                          <DeleteIcon stroke={"#ff0000"} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="">
            <div className="heading text-center">
              <p className=" pl-5 mb-0 main_heading">ARABICA MARKET</p>
            </div>
            <Table
              className="table table-striped align-items-center table-flush"
              responsive
            >
              <thead className="">
                <tr className="text-white">
                  <th scope="col">
                    <span className="pr-5">Contract</span>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Chg</th>
                  <th scope="col">%</th>
                  <th scope="col">Vol</th>
                  <th scope="col">High</th>
                  <th scope="col">$-High</th>
                  <th scope="col">Low</th>
                  <th scope="col">$-Low</th>
                  <th scope="col">Open</th>
                  <th scope="col">Prev</th>
                  <th scope="col">OPen Int</th>
                  <th scope="col">Bid</th>
                  <th scope="col">BSize</th>
                  <th scope="col">Ask</th>
                  <th scope="col">ASize</th>
                  <th scope="col">Option Exp</th>
                  <th scope="col">First Notice</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="contract">KCZ-21(DEC-21)</td>
                  <td>193.45</td>
                  <td>
                    <span className="zero">0.00</span>
                  </td>
                  <td>0</td>
                  <td>11587</td>
                  <td>194.95</td>
                  <td>191.85</td>
                  <td>194.95</td>
                  <td>191.85</td>
                  <td>192.55</td>
                  <td>193.45</td>
                  <td>132331</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">KCH-22(MAR-22)</td>
                  <td>196.4</td>
                  <td>
                    <span className="zero">0.0</span>
                  </td>
                  <td>0</td>
                  <td>3626</td>
                  <td>197.85</td>
                  <td>194.85</td>
                  <td>197.85</td>
                  <td>194.85</td>
                  <td>195.7</td>
                  <td>196.4</td>
                  <td>73521</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">KCK-22(MAY-22)</td>
                  <td>197.55</td>
                  <td>
                    <span className="zero">0.00</span>
                  </td>
                  <td>0</td>
                  <td>1677</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>196.85</td>
                  <td>197.55</td>
                  <td>47220</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">KCK-22(MAY-22)</td>
                  <td>197.55</td>
                  <td>
                    <span className="zero">0.00</span>
                  </td>
                  <td>0</td>
                  <td>1677</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>196.85</td>
                  <td>197.55</td>
                  <td>47220</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">KCK-22(MAY-22)</td>
                  <td>197.55</td>
                  <td>
                    <span className="zero">0.00</span>
                  </td>
                  <td>0</td>
                  <td>1677</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>199</td>
                  <td>196.1</td>
                  <td>196.85</td>
                  <td>197.55</td>
                  <td>47220</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="">
            <div className="heading text-center">
              <p className="pl-5 mb-0 main_heading">WORKBOOK FOR ROBUSTA</p>
            </div>
            <Table
              className="table table-striped align-items-center table-flush"
              responsive
            >
              <thead className="">
                <tr className="text-white">
                  <th scope="col">
                    <span className="pr-3">Contract</span>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Chg</th>
                  <th scope="col">Net Price</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Last</th>
                  <th scope="col">Differential</th>
                  <th scope="col">Total</th>
                  <th scope="col">Expense In $</th>
                  <th scope="col">Grand Total </th>
                  <th scope="col">
                  <div className="d-flex justify-content-center">
                  FX-
                  <select className="select-form font-weight-bold">
                  <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                </select>
                </div>
                  </th>
                  <th scope="col">FX_PRE/DIS</th>
                  <th scope="col">FX NET</th>
                  <th scope="col">Net Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>

                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>

                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                {/* <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Larry</td>
    </tr> */}
              </tbody>
            </Table>
          </div>
          <div className="">
            <div className="heading text-center">
              <p className="pl-5 mb-0 main_heading">WORKBOOK FOR ARABICA</p>
            </div>
            <Table
              className="table table-striped align-items-center table-flush"
              responsive
            >
              <thead className="">
                <tr className="text-white">
                  <th scope="col">
                    <span className="pr-3">Contract</span>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Chg</th>
                  <th scope="col">Net Price</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Last</th>
                  <th scope="col">Differential</th>
                  <th scope="col">Total</th>
                  <th scope="col">Expense In $</th>
                  <th scope="col">Grand Total </th>
                  <th scope="col">
                  <div className="d-flex justify-content-center">
                  FX-
                  <select className="select-form font-weight-bold">
                  <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                   <option className="">USD</option>
                </select>
                </div>
                  </th>
                  <th scope="col">FX_PRE/DIS</th>
                  <th scope="col">FX NET</th>
                  <th scope="col">Net Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">RMX-21(NOV-21)</td>
                  <td>2116</td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.Screen 18"
                      />
                    </div>
                  </td>
                  <td>2121</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>51095</td>
                  <td>2111</td>
                  <td>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control work-forms"
                        id="inputPassword2"
                        placeholder="Eg.123"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="">
            <div className="heading text-center">
              <p className="pl-5 mb-0 main_heading">FOREX</p>
            </div>
            <Table
              className="table table-striped align-items-center table-flush"
              responsive
            >
              <thead className="">
                <tr className="text-white">
                  <th scope="col">
                    <span className="pr-5">Contract</span>
                  </th>
                  <th scope="col">Last</th>
                  <th scope="col">Chg</th>
                  <th scope="col">%</th>
                  <th scope="col">Vol</th>
                  <th scope="col">High</th>
                  <th scope="col">$-High</th>
                  <th scope="col">Low</th>                
                  <th scope="col">$-Low</th>
                  <th scope="col">Open</th>
                  <th scope="col">Prev</th>
                  <th scope="col">OPen Int</th>
                  <th scope="col">Bid</th>
                  <th scope="col">BSize</th>
                  <th scope="col">Ask</th>
                  <th scope="col">ASize</th>
                  <th scope="col">Option Exp</th>
                  <th scope="col">First Notice</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="contract">EURUSD</td>
                  <td>1.15</td>
                  <td>
                    <span className="text-danger font-weight-bold">-0.01</span>
                  </td>
                  <td>-0.86</td>
                  <td>44855</td>
                  <td>1.16</td>
                  <td>1.16</td>
                  <td>1.15</td>
                  <td>1.15</td>
                  <td>1.16</td>
                  <td>1.16</td>
                  <td>0</td>
                  <td>
                    <span className="zero">1.15</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">1.15</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/08/2021</td>
                  <td>10/08/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="contract">USDEUR</td>
                  <td>0.87</td>
                  <td>0.00</td>
                  <td>0</td>
                  <td>8043</td>
                  <td>0.87</td>
                  <td>0.87</td>
                  <td>0.86</td>
                  <td>0.86</td>
                  <td>0.87</td>
                  <td>0.87</td>
                  <td>0</td>
                  <td>
                    <span className="zero">0.87</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>
                    <span className="zero">0.87</span>
                  </td>
                  <td>
                    <span className="zero">0</span>
                  </td>
                  <td>10/07/2021</td>
                  <td>10/07/2021</td>
                  <td>
                    <div>
                      {/* <img className="delete-icon" src={DeleteIcon} alt="DeleteIcon"/> */}
                      <DeleteIcon stroke={"#ff0000"} />
                    </div>
                  </td>
                </tr>
                {/* <tr>
      <td>KCK-22(MAY-22)</td>
      <td>197.55</td>
      <td>0.00</td>
      <td>0</td>
      <td>1677</td>
      <td>199</td>
      <td>196.1</td>
      <td>196.85</td>
      <td>197.55</td>
      <td>47220</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>10/07/2021</td>
      <td>10/07/2021</td>
    </tr>
    <tr>
      <td>KCK-22(MAY-22)</td>
      <td>197.55</td>
      <td>0.00</td>
      <td>0</td>
      <td>1677</td>
      <td>199</td>
      <td>196.1</td>
      <td>196.85</td>
      <td>197.55</td>
      <td>47220</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>10/07/2021</td>
      <td>10/07/2021</td>
    </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      </div>
   
    </>
  )
}

export default CoffeQuotes