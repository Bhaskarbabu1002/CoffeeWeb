import React from 'react'
import "./style.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const EditNewsFeed = () => {
  return (
    <>
<div  className="Edit_newsfeed container">
  <div className="" style={{textTransform: 'uppercase'}}>
    <h5 translate="yes">
      {/* <a className="no-display goback" title="Back"><i className="fas fa-arrow-circle-left" aria-hidden="true" /></a> */}
      News Feed
    </h5>
  </div>
  <div className="row prog">
    <div className="col-md-8">
      <div className='summernote'>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello CoffeeWeb</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      {/* <input type="hidden"  id="henNewsid" defaultValue={0} />
      <textarea className='w-100 h-100' id="summernote" defaultValue={""} /> */}
      </div>
    </div>
    <div className="col-md-4 ">
      <div className="card Editnews_card">
        <div className="msg no-display" style={{textAlign: 'center'}} />
        <div className="card-body">
          <form id="news-form" data-parsley-validate data-parsley-focus="none" className="php-email-form">
            <div className="form-group mt-3">
              <label translate="yes" style={{paddingBottom: 5}}>News Author</label>
              <input autoComplete="off" type="text" className="form-control" name="subject" id="txtAuthor" value="John" />
            </div>
            <div className="form-group mt-3">
              <label translate="yes" style={{paddingBottom: 5}}>News Heading</label>
              <textarea autoComplete="off" className="form-control" name="message" rows={5} id="txtHeading" required defaultValue={""} value="Video to check youtube" />
            </div>
            <div className="form-group mt-3">
              <label translate="yes" style={{paddingBottom: 5, width: '100%'}}>
                News Thumbnail Image
              </label>
              <div className="input-group">
                <label translate="yes" className="input-group-btn">
                  <span className="btn browse-btn" style={{height: 38}}>
                    Browse <input accept="image/png, image/jpg, image/jpeg" type="file" className="fDoc" style={{display: 'none'}} id="fDoc" />
                  </span>
                </label>
                <input type="text" className="form-control itmtxt" readOnly />
              </div>
              <div translate="yes" className="imginfo" style={{fontSize: 12, marginTop: 10}}>
                <span>Best viewed resolution <b>Width:200 Height:200</b></span>
                <span>Click <a style={{fontWeight: 'bold'}} target="_blank" href="https://redketchup.io/image-resizer">here</a> to resize image online.</span>
              </div>
            </div>
            <div className="form-group mt-3">
              <div translate="yes" className="text-center form-group mt-3">
              <div className='differential_btns'>
              <button type="button" className="btn save_btn">Save</button>
             <button type="button" className="btn reset_btn">Reset</button>
             </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default EditNewsFeed