import React, { useState } from "react";
import { RecordVideoButton } from "react-dadan-extension";
function App() {
  const [videos, setVideos] = useState([]);
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <img
            src="https://dadan.io/wp-content/uploads/2020/11/dadan.svg"
            alt=""
            height="32"
          />
        </h5>
        <nav className="my-2 my-md-0 mr-md-3"></nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 mb-3">
            <RecordVideoButton
              showSvg={true}
              title="Select Video"
              copyToClipboard={true}
              showPreview={true}
              type="select"
              buttonClass="dd__record__button__default__class"
              buttonStyle={{}}
              onFailure={handleResponse}
              onSuccess={handleResponse}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{renderVideos()}</div>
        </div>
      </div>
    </>
  );
  function renderVideos() {
    return (
      <>
        {videos.length > 0 ? (
          <>
            <ul className="list-group">
              {videos.map((video, index) => {
                const {
                  title,
                  thumbnailUrl,
                  sharedUrl,
                  embedUrl,
                  customHtmlFormat,
                } = video;
                return (
                  <li className="list-group-item" key={index}>
                    <div>
                      <code>title : {title}</code>
                    </div>
                    <div>
                      <code>thumbnailUrl : {thumbnailUrl}</code>
                    </div>
                    <div>
                      <code>sharedUrl : {sharedUrl}</code>
                    </div>
                    <div>
                      <code>embedUrl : {embedUrl}</code>
                    </div>
                    <div>
                      <code>customHtmlFormat : {customHtmlFormat}</code>
                    </div>
                    <div>
                      <code>
                        =============================================================================================================
                      </code>
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
      </>
    );
  }
  function handleResponse({ success, data, message }) {
    if (success) {
      if (data) {
        setVideos(data);
      }
    } else {
      setVideos([]);
      console.log(message);
    }
  }
}
export default App;
