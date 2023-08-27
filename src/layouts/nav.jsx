import { useState } from "react";
import { Link } from "react-router-dom";

// scss file:
import "../styles/layouts/layouts.scss";

function Nav() {
  const [links, setLinks] = useState([
    {
      id: "1",
      page: "dashboard",
      icon: "fa-regular fa-chart-bar fa-fw",
      active: true,
    },
    {
      id: "3",
      page: "settings",
      icon: "fa-solid fa-gear fa-fw",
      active: false,
    },
    {
      id: "2",
      page: "profile",
      icon: "fa-regular fa-user fa-fw",
      active: false,
    },
    {
      id: "4",
      page: "projects",
      icon: "fa-solid fa-diagram-project fa-fw",
      active: false,
    },
    {
      id: "7",
      page: "courses",
      icon: "fa-solid fa-graduation-cap fa-fw",
      active: false,
    },
    {
      id: "6",
      page: "friends",
      icon: "fa-regular fa-circle-user fa-fw",
      active: false,
    },
    { id: "5", page: "files", icon: "fa-regular fa-file fa-fw", active: false },
    {
      id: "8",
      page: "plans",
      icon: "fa-regular fa-credit-card fa-fw",
      active: false,
    },
  ]);

  function visit(btn) {
    // make new arrays to clone links
    const newLinks = [];

    // change the active property in each link and add it in newLinks
    links.map((link) => {
      if (link.id === btn) {
        link.active = true;
      } else {
        link.active = false;
      }
      return newLinks.push(link);
    });

    console.log(links);
    setLinks(newLinks);
  }

  return (
    <nav>
      <h3>elzero</h3>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={`/${link.page}`}
                className={link.active ? "active" : null}
                onClick={() => visit(link.id)}
              >
                <i className={link.icon}></i>
                <span>{link.page}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;