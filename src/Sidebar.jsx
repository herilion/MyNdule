import React from "react";
import './sidebar.css'
import {
  MdHomeFilled,
  MdSearch,
  MdLibraryMusic,
} from "react-icons/md";

function Sidebar({ genres, setIde, setYourSearch }) {
  console.log(genres.listOfGenresFromAPI);

  return (
    <div className="sidebarRigth">
      <div className="top_links">
        <div
          className="logo"
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src="logo.png" alt="" width={80} />
          <h2>My NDULE</h2>
        </div>
        <div className="line"></div>
        <ul className="menuprincipal">
          <span className="menu">MENU</span>
          <li>
            <span><MdHomeFilled /></span>
            <span>Home</span>
          </li>
          <li>
            <span><MdSearch /></span>
            <span>Search</span>
          </li>
          <li>
            <span><MdLibraryMusic /></span>
            <span>Your Library</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default React.memo(Sidebar);
