// json files:
import projects from "../json/projects.json";

// scss files:
import "../styles/pages/other.scss";
import "../styles/library/classes.scss";

function Projects() {
  // function to change color by the progress state.
  function progressColor(num) {
    let bgClass;

    if (num <= 50) {
      bgClass = "bg-red";
    } else if (num > 50 && num < 100) { // condition
      bgClass = "bg-green";
    } else {
      bgClass = "bg-blue";
    }

    return bgClass;
  }

  return (
    <>
      <h1>projects</h1>
      <div className="projects-page">
        {projects.map((project) => {
          const { id, name, team, skills, progress, date, price } = project;

          return (
            <div key={id} className="widget">
              <span className="date">{date}</span>
              <div className="head">
                <h4>{name}</h4>
                <p>{`${name} project ${skills.join(" and ")}.`}</p>
              </div>
              <div className="team">
                {team.map((person) => {
                  return (
                    <img
                      key={team.indexOf(person)}
                      src={require(`../imgs/${person}.png`)}
                      alt={person}
                    />
                  );
                })}
              </div>
              <div className="skills">
                {skills.map((skill) => {
                  return (
                    <span key={skills.indexOf(skill)} className="btn-grey">
                      {skill}
                    </span>
                  );
                })}
              </div>
              <div className="progress">
                <div className="load">
                  <div
                    className={`${progressColor(progress)} wd-${progress}`}
                  ></div>
                </div>
                <span>
                  <i className="fa-solid fa-dollar-sign"></i> {price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;