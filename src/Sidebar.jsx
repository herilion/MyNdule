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
          <img src="logo.png" alt="" width={130} />
        </div>
        <div className="line"></div>
        <ul>
          <span>MENU</span>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <MdLibraryMusic />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default React.memo(Sidebar);
