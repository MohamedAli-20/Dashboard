// json files:
import friends from "../json/friends.json";

// style files:
import "../styles/pages/other.scss";
import "../styles/library/classes.scss";

function Friends() {
  return (
    <>
      <h1>Friends</h1>
      <div className="friends-page">
        {friends.map((friend) => {
          const { id, name, job, avatar, friendsCount, projectsCount, articlesCount, joinDate, vip } = friend;

          return (
            <div key={id} class={`friend widget ${vip? "vip" : ""}`}>
              <div className="icon">
                <i className="fa-solid fa-phone mr-5"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="person">
                <img src={require(`../imgs/${avatar}`)} alt="avatar" />
                <h4>{name}</h4>
                <p>{job}</p>
              </div>
              <div className="data">
                <div>
                  <i className="fa-regular fa-face-smile fa-fw"></i>
                  <span> {friendsCount} friends</span>
                </div>
                <div>
                  <i className="fa-solid fa-code-commit fa-fw"></i>
                  <span> {projectsCount} projects</span>
                </div>
                <div>
                  <i className="fa-regular fa-newspaper fa-fw"></i>
                  <span> {articlesCount} articles</span>
                </div>
              </div>
              <div className="foot">
                <p>joined {joinDate}</p>
                <div className="options">
                  <button className="btn-blue mr-5">profile</button>
                  <button className="btn-red">remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Friends;