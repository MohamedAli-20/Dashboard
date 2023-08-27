// scss files:
import "../styles/pages/other.scss";
import "../styles/library/classes.scss";

function Plans() {
  return (
    <>
      <h1>Plans</h1>
      <div className="plans-page">
        <div className="free plan widget">
          <div className="head bg-green">
            <h2>free</h2>
            <span>
              <sup>$</sup>0.00
            </span>
          </div>
          <ul>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all text lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all videos lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>appear on leaderboard</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>browse content without ads</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>access all assignments</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>get daily prizes</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>earn certificate</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>1 GB space for hosting files</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>access badge system</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
          </ul>
          <div className="foot">
            <button type="button" className="btn-green fs-16">
              join
            </button>
          </div>
        </div>
        <div className="basic plan widget">
          <div className="head bg-blue">
            <h2>basic</h2>
            <span>
              <sup>$</sup>7.99
            </span>
          </div>
          <ul>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all text lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all videos lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>appear on leaderboard</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>browse content without ads</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all assignments</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>get daily prizes</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>earn certificate</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>1 GB space for hosting files</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-xmark fa-fw"></i>
              <span>access badge system</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
          </ul>
          <div className="foot">
            <button type="button" className="btn-blue fs-16">
              join
            </button>
          </div>
        </div>
        <div className="premium plan widget">
          <div className="head bg-orange">
            <h2>premium</h2>
            <span>
              <sup>$</sup>19.99
            </span>
          </div>
          <ul>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all text lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all videos lessons</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>appear on leaderboard</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>browse content without ads</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access all assignments</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>get daily prizes</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>earn certificate</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>1 GB space for hosting files</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
            <li>
              <i className="fa-solid fa-check fa-fw yes"></i>
              <span>access badge system</span>
              <i className="fa-solid fa-circle-info help"></i>
            </li>
          </ul>
          <div className="foot">
            <p className="txt">this is your current plan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;