// scss files:
import "../styles/pages/profile.scss";
import "../styles/library/classes.scss";

function Profile() {
  return (
    <>
      <h1>profile</h1>
      <div className="profile-page">
        <div class="personal-data">
          <div class="main flex-center">
            <img src={require("../imgs/avatar.png")} alt="avatar" />
            <h3>osama elzero</h3>
            <span>level 20</span>
            <div class="load"></div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>550 rating</p>
          </div>
          <div class="general">
            <div class="row">
              <h4>general information</h4>
              <div class="data">
                <p>
                  full name: <span>osama mohamed</span>
                </p>
                <p>
                  gender: <span>male</span>
                </p>
                <p>
                  country: <span>egypt</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    class="toggle-check"
                  />
                  <div class="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div class="row">
              <h4>personal information</h4>
              <div class="data">
                <p>
                  email: <span class="txt-lower">o@nn.sa</span>
                </p>
                <p>
                  phone: <span>019123456789</span>
                </p>
                <p>
                  date of birth: <span>25/10/1982</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    class="toggle-check"
                  />
                  <div class="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div class="row">
              <h4>job information</h4>
              <div class="data">
                <p>
                  title: <span>full stack developer</span>
                </p>
                <p>
                  programming language: <span>python</span>
                </p>
                <p>
                  years of experience: <span>15+</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    class="toggle-check"
                  />
                  <div class="toggle-switch"></div>
                </label>
              </div>
            </div>
            <div class="row">
              <h4>billing information</h4>
              <div class="data">
                <p>
                  payment method: <span>paypal</span>
                </p>
                <p>
                  email: <span class="txt-lower">email@website.com</span>
                </p>
                <p>
                  subscription: <span>monthly</span>
                </p>
                <label>
                  <input
                    type="checkbox"
                    name="on"
                    id="on"
                    class="toggle-check"
                  />
                  <div class="toggle-switch"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="other-data">
          <div class="skills widget">
            <div class="widget-info">
              <h2>my skills</h2>
              <p>complete skills list</p>
            </div>
            <ul>
              <li>
                <span class="btn-grey">HTML</span>
                <span class="btn-grey">pugjs</span>
                <span class="btn-grey">HAML</span>
              </li>
              <li>
                <span class="btn-grey">CSS</span>
                <span class="btn-grey">SASS</span>
                <span class="btn-grey">Stylus</span>
              </li>
              <li>
                <span class="btn-grey">JavaScript</span>
                <span class="btn-grey">TypeScript</span>
              </li>
              <li>
                <span class="btn-grey">vuejs</span>
                <span class="btn-grey">Reactjs</span>
              </li>
              <li>
                <span class="btn-grey">jest</span>
                <span class="btn-grey">jasmine</span>
              </li>
              <li>
                <span class="btn-grey">PHP</span>
                <span class="btn-grey">laravel</span>
              </li>
              <li>
                <span class="btn-grey">python</span>
                <span class="btn-grey">django</span>
              </li>
            </ul>
          </div>
          <div class="activities widget">
            <div class="widget-info">
              <h2>latest activities</h2>
              <p>latest activities done by the user</p>
            </div>
            <div class="row">
              <img src={require("../imgs/activity-01.png")} alt="activity" />
              <div class="txt">
                <h4>store</h4>
                <p>bought the mastering python course</p>
              </div>
              <div class="time">
                <p class="hour">18:10</p>
                <p class="day">yesterday</p>
              </div>
            </div>
            <div class="row">
              <img src={require("../imgs/activity-02.png")} alt="activity" />
              <div class="txt">
                <h4>academy</h4>
                <p>got the PHP certificate</p>
              </div>
              <div class="time">
                <p class="hour">16:05</p>
                <p class="day">yesterday</p>
              </div>
            </div>
            <div class="row">
              <img src={require("../imgs/activity-03.png")} alt="activity" />
              <div class="txt">
                <h4>badges</h4>
                <p>unlocked the 10 skills badge</p>
              </div>
              <div class="time">
                <p class="hour">18:06</p>
                <p class="day">yesterday</p>
              </div>
            </div>
            <div class="row">
              <img src={require("../imgs/activity-01.png")} alt="activity" />
              <div class="txt">
                <h4>store</h4>
                <p>bought the TypeScript course</p>
              </div>
              <div class="time">
                <p class="hour">12:05</p>
                <p class="day">yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;