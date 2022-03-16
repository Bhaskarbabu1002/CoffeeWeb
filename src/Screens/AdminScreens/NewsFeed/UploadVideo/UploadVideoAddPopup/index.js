import React from 'react'
import "./style.scss";
const UploadVideoAddPopup = () => {
  return (
    <>
    <div className='video_add_popup row'>
         <div className="col-md-12">
                  <h4 className="modal-title">Upload New Video File</h4>
                </div>
                <div className="modal-body videoform">
                  <div className="msg no-display" />
                  <form action="/Admin/UploadVideo" encType="multipart/form-data" method="post">                                        <input type="hidden" id="hdnNewsId" name="id" defaultValue={0} />
                    <div className="form-group">
                      <label style={{float: 'left'}}>Author</label>
                      <div className="input-group">
                        <input className="form-control upload_form-control" type="text" id="txtAuthor" name="author" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{float: 'left'}}>Subject</label>
                      <div className="input-group">
                        <input className="form-control upload_form-control" type="text" required id="txtSubject" name="subject" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label style={{float: 'left'}}>Description</label>
                      <div className="input-group">
                        <textarea className="form-control upload_form-control" id="txtDescription" name="description" rows={5} defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check video_form_check">
                        <input className="form-check-input" type="checkbox" name="isdownload" id="inlineRadio1100" />
                        <label className="form-check-label" htmlFor="inlineRadio1100">Allow Download</label>
                      </div>
                    </div>
                    <div className="form-group">
                    <div className="input-group inpgroupaddfile">
  <div className="custom-file">
<input type="file" id="myFile" name="filename" />

    {/* <input type="file" accept="video/*" id="fileupload" name="fileupload" className="custom-file-input" required="required" autoComplete="off" />
    <label className="custom-file-label" /> */}
  </div>
</div>

                      {/* <div className="input-group editfilenameouter no-display" style={{fontWeight: 'bold', fontSize: 12, paddingRight: 10}}>
                        <span style={{paddingRight: 10}}>File Name : </span><span className="editfilename" />
                      </div> */}
                    </div>
                    <div className="form-group">
                      <div className>
                        <input type="submit" id="btnUpload" className="btn upload_btn" defaultValue="Submit" style={{float: 'right'}} />
                      </div>
                    </div>
                  </form>                              </div>
              </div>
          
    </>
  )
}

export default UploadVideoAddPopup