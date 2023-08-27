import { Routes, Route } from "react-router-dom";

// import main scss file
import "./styles/main.scss";
import "./styles/library/classes.scss";

// import layouts & components
import Nav from "./layouts/nav";
import Header from "./layouts/header";

// import pages
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Projects from "./pages/projects";
import Files from "./pages/files";
import Friends from "./pages/friends";
import Courses from "./pages/courses";
import Plans from "./pages/plans";

function App() {
  return (
    <>
      <div className="page">
        <Nav />
        <div className="content">
        <Header />
          <Routes>
            <Route path="/Dashboard" index element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/files" element={<Files />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/plans" element={<Plans />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
