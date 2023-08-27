// json files:
import courses from "../json/courses.json";

// style files:
import "../styles/pages/other.scss";
import "../styles/library/classes.scss";

function Courses() {
  return (
    <>
      <h1>Courses</h1>
      <div class="courses-page">
        {
          courses.map((course) => {
            // destructure the course object.
            const{id, courseName, avatar, courseImg, about, price, learnersCount} = course;
            return(
              <div key={id} className="course">
                <div class="head">
                  <img src={require(`../imgs/${courseImg}`)} alt="cource-background" class="cover" />
                  <img src={require(`../imgs/${avatar}`)} alt="instructor" class="instructor" />
                </div>
                <div class="about">
                  <h4>{courseName}</h4>
                  <p>{about}</p>
                </div>
                <div class="info">
                  <span>
                    <i class="fa-regular fa-user"></i> {price}
                  </span>
                  <button class="btn-blue">course info</button>
                  <span>
                    <i class="fa-solid fa-dollar-sign"></i> {learnersCount}
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Courses;