// scss files:
import "../styles/pages/settings.scss";
import "../styles/library/classes.scss";

function Settings() {
  return (
    <>
      <h1>settings</h1>
      <div className="settings-page">
        <div className="site-s widget">
          <div className="widget-info">
            <h2>site control</h2>
            <p>control the website if there is maintenance</p>
          </div>
          <div className="option">
            <div className="info">
              <span>website control</span>
              <p>open/close website and type the reason</p>
            </div>
            <label>
              <input type="checkbox" className="toggle-check" />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <textarea placeholder="close message content"></textarea>
        </div>
        <div className="general-s widget">
          <div className="widget-info">
            <h2>general info</h2>
            <p>general information about your account</p>
          </div>
          <div className="field">
            <label for="first">first name</label>
            <input type="text" placeholder="first name" id="first" />
          </div>
          <div className="field">
            <label for="last">last name</label>
            <input type="text" placeholder="last name" id="last" />
          </div>
          <div className="field">
            <label for="email">email</label>
            <form>
              <input type="email" placeholder="o@nn.sa" id="email" disabled />
              <button onclick="">Change</button>
            </form>
          </div>
        </div>
        <div className="security-s widget">
          <div className="widget-info">
            <h2>security info</h2>
            <p>security information about your account</p>
          </div>
          <div className="sec-box">
            <div>
              <span>password</span>
              <p>last change on 25/10/2021</p>
            </div>
            <a href="#" className="btn-blue">
              change
            </a>
          </div>
          <div className="sec-box">
            <div>
              <span>Two-Factor authentication</span>
              <p>Enable/Disable the feature</p>
            </div>
            <label>
              <input type="checkbox" className="toggle-check" />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <div className="sec-box">
            <div>
              <span>devices</span>
              <p>check the login devices list</p>
            </div>
            <a href="#" className="btn-grey">
              devices
            </a>
          </div>
        </div>
        <div className="social-s widget">
          <div className="widget-info">
            <h2>social info</h2>
            <p>social media information</p>
          </div>
          <div className="username">
            <div>
              <i className="fa-brands fa-twitter"></i>
              <input
                type="text"
                name="twitter-us"
                placeholder="Twitter Username"
              />
            </div>
            <div>
              <i className="fa-brands fa-facebook-f"></i>
              <input
                type="text"
                name="facebook-us"
                placeholder="Facebook Username"
              />
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
              <input
                type="text"
                name="linkedin-us"
                placeholder="Linkedin Username"
              />
            </div>
            <div>
              <i className="fa-brands fa-youtube"></i>
              <input
                type="text"
                name="youtube-us"
                placeholder="Youtube Username"
              />
            </div>
          </div>
        </div>
        <div className="widgets-control widget">
          <div className="widget-info">
            <h2>widgets control</h2>
            <p>Show/Hide widgets</p>
          </div>
          <div className="check">
            <input type="checkbox" id="draft" />
            <label for="draft">quick draft</label>
          </div>
          <div className="check">
            <input type="checkbox" id="yearly-targets" />
            <label for="yearly-targets">yearly targets</label>
          </div>
          <div className="check">
            <input type="checkbox" id="stats" />
            <label for="stats">tickets statistics</label>
          </div>
          <div className="check">
            <input type="checkbox" id="news" />
            <label for="news">latest news</label>
          </div>
          <div className="check">
            <input type="checkbox" id="tasks" />
            <label for="tasks">latest tasks</label>
          </div>
          <div className="check">
            <input type="checkbox" id="search-items" />
            <label for="search-items">top search items</label>
          </div>
        </div>
        <div className="backup-s widget">
          <div className="widget-info">
            <h2>backup manager</h2>
            <p>control backup time and location</p>
          </div>
          <div className="chosen">
            <div>
              <input type="radio" name="time" id="daily" />
              <label for="daily">daily</label>
            </div>
            <div>
              <input type="radio" name="time" id="weekly" />
              <label for="weekly">weekly</label>
            </div>
            <div>
              <input type="radio" name="time" id="monthly" />
              <label for="monthly">monthly</label>
            </div>
          </div>
          <div className="servers">
            <input type="radio" name="server" id="mega" />
            <div className="server">
              <label for="mega">
                <i className="fa-solid fa-server"></i>megaman
              </label>
            </div>
            <input type="radio" name="server" id="zero" />
            <div className="server">
              <label for="zero">
                <i className="fa-solid fa-server"></i>zero
              </label>
            </div>
            <input type="radio" name="server" id="sigma" />
            <div className="server">
              <label for="sigma">
                <i className="fa-solid fa-server"></i>sigma
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
