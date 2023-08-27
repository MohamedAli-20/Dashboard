// json files:
import files from "../json/files.json";
import filesStat from "../json/files-stat.json";

// scss files:
import "../styles/pages/dashboard.scss";
import "../styles/library/classes.scss";

// imgs:
import pdf from "../imgs/pdf.svg";

function Files() {
  return (
    <>
      <h1>Files</h1>
      <div className="files-page">
        <div className="files">
          {files.map((file) => {
            const { id, fileName, author, fileImg, date, size } = file;
            return (
              <div key={id} className="file widget">
                <div className="head">
                  <i className="fa-solid fa-download"></i>
                  <img src={pdf} alt="file" />
                  <span>{fileName}</span>
                  <p>{author}</p>
                </div>
                <div className="foot">
                  <span>{date}</span>
                  <span>{size}MB</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="files-stats widget">
          <h2>files statistics</h2>
          {filesStat.map((file) => {
            const { id, name, fileIcon, type, count, size } = file;
            return (
              <div key={id} className={name}>
                <i className={`${fileIcon}`}></i>
                <div className="count">
                  <p>{type}</p>
                  <span>{count} files</span>
                </div>
                <div className="size">{size} GB</div>
              </div>
            );
          })}
          <button className="btn-blue fs-13">
            <i className="fa-solid fa-angles-up"></i> Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default Files;
