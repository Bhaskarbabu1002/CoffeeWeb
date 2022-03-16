import React, {useState} from 'react'
import Popup from '../../../../Components/GlobalComponents/Popup';
import "./style.scss";
import UploadVideoAddPopup from './UploadVideoAddPopup';
import {ReactComponent as AddIcon} from "../../../../Assets/Icons/Plus-circle.svg";
import {ReactComponent as Trash} from "../../../../Assets/Icons/trash.svg"; 
import {ReactComponent as EditIcon} from "../../../../Assets/Icons/edit.svg"; 
import {ReactComponent as DownloadIcon} from "../../../../Assets/Icons/Download_Icon.svg"; 
const UploadVideo = () => {
    const [addVideoPopup, setAddVideoPopup] = useState();
  return (
    <>
  <div className="upload_video_section container ">
   <div className='upload_heading my-4 row '>
     <div className='col-md-6 text-left'>
    <h5 translate="yes" style={{fontWeight: 'bold', paddingBottom: 5}}>
      News Feed Videos
    </h5>
    </div>
    <div className='col-md-6 text-right'>
    <button id="btnUploadVideo" type="button" className="btn addnew_btn"
                  onClick={() => {
                    setAddVideoPopup(true)
                                }}>
      <AddIcon  stroke={"#fff"}/> Add New
    </button>
    </div>
    </div>
  <div className="" translate="yes">
    <div className="card upload_video_card">
      <div className="card-body upload_video_card-body">
        <div className="row paginated">
          <div className="col-sm-3 col-md-3 col-xs-12 indvideobox nfv35">
            <div className="title">
              The rainfall is expected to be scattered, heavy, very heavy and extremely heavy in specific regions and light to moderate in most other places
            </div>
            <div className="video-frame">
              <video style={{width: '100%', height: '100%'}} controls>
                <source src="/Upload/NewsFeedVideos/VID-20210605-WA0007.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="desc">Amid heavy rains reported across Tamil Nadu and parts of Andhra Pradesh and Karnataka over the past few days, the India Meteorological Department (IMD) said that a depression has formed over the southwest Bay of Bengal. The depression was formed around noon on Wednesday, November 10, and it is likely to cross Tamil Nadu and southern coastal Andhra Pradesh on the evening of Thursday. The weather system is likely to bring widespread rainfall in Tamil Nadu for the next three to four days. The rainfall is expected to be scattered, heavy, very heavy and extremely heavy in specific regions and light to moderate in most other places.</div>
            <div className="descicons">
              <a className='upload_card_icons' title="Download" href="/Upload/NewsFeedVideos/VID-20210605-WA0007.mp4" download><DownloadIcon stroke={"green"} style={{width: 20}}/></a>
              <a className="btnedit upload_card_icons" title="Edit" data-at-id={35} style={{paddingRight: 10}} href=""><EditIcon stroke={"#2163f3"} style={{width: 20}}/></a>
              <a className="btndelete upload_card_icons" title="Delete" data-at-id={35} style={{color: 'red'}} href=""><Trash stroke={"red"} style={{width: 20}}/></a>
            </div>
            {/* <div className="descicons">
              <a title="Download" style={{color: 'green', paddingRight: 10}} href="/Upload/NewsFeedVideos/VID-20210605-WA0007.mp4" download><i className="fa fa-download" aria-hidden="true" /></a>
              <a className="btnedit" title="Edit" data-at-id={35} style={{paddingRight: 10}} href="javascript:void(0)"><i className="fa fa-edit" aria-hidden="true" /></a>
              <a className="btndelete" title="Delete" data-at-id={35} style={{color: 'red'}} href="javascript:void(0)"><i className="fa fa-trash-alt" aria-hidden="true" /></a>
            </div> */}
          </div>
          <div className="col-sm-3 col-md-3 col-xs-12 indvideobox nfv31">
            <div className="title">
              Sample QA Video Upload
            </div>
            <div className="video-frame">
              <video oncontextmenu="return false;" style={{width: '100%', height: '100%'}} controls controlslist="nodownload">
                <source src="/Upload/NewsFeedVideos/sample-mp4-file-small.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="desc">Sample QA Video Upload</div>
            <div className="descicons">
              <a className='upload_card_icons' title="Download" href="/Upload/NewsFeedVideos/VID-20210605-WA0007.mp4" download><DownloadIcon stroke={"green"} style={{width: 20}}/></a>
              <a className="btnedit upload_card_icons" title="Edit" data-at-id={35} style={{paddingRight: 10}} href=""><EditIcon stroke={"#2163f3"} style={{width: 20}}/></a>
              <a className="btndelete upload_card_icons" title="Delete" data-at-id={35} style={{color: 'red'}} href=""><Trash stroke={"red"} style={{width: 20}}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Popup trigger={addVideoPopup} setTrigger={setAddVideoPopup}>
     <UploadVideoAddPopup />
 </Popup>
</div>


    </>
  )
}

export default UploadVideo