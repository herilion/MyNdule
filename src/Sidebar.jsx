import React from "react";
import styled from "styled-components";
import {
  MdHomeFilled,
  MdSearch,
  MdLibraryMusic,
  MdSettings,
} from "react-icons/md";

function Sidebar({ genres, setIde, setYourSearch }) {
  console.log(genres.listOfGenresFromAPI);

  return (
    <Container>
      <div className="desk">
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
          <div className="line"></div>

          <ul className="categorie">
            <span>CATEGORIES</span>
            {genres.listOfIconFromAPi &&
              genres.listOfIconFromAPi.map((icon, i) => {
                return (
                  <li
                    key={i}
                    value={icon.id}
                    onClick={() => {
                      setIde(icon.id);
                      setYourSearch("POPULAR PLAYLIST");
                    }}
                  >
                    <img
                      src={icon.icon[0] && icon.icon[0].url}
                      width={30}
                      alt=""
                    />

                    {icon.name}
                  </li>
                );
              })}
          </ul>
          <div className="line"></div>
          <div className="card"></div>
          <ul className="end">
            <li>
              <MdSettings />
              <span>Settings</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="mobile">
        <div
          className="logo"
          onClick={() => {
            window.location.reload();
          }}
        ></div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: #2d2d2d;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(20px);
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  width: 20vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;

  .mobile {
    display: none;
  }
  .card {
    margin-top: 18%;
    border-radius: 5px;
    height: 150px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: #925ff0;
  }
  .top_links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
    }
    img {
      cursor: pointer;
      max-inline-size: 80%;
      block-size: auto;
    }
  }
  .end {
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      font-size: 15px;
      &:hover {
        border-left: 2px solid blue;
        color: blue;
      }
    }
  }

  .categorie {
    height: 65vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: blue;
      }
    }
  }
  @media (max-width: 900px) {
    background-color: #2d2d2d;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(20px);
    heigth: 15px;
    display: flex;

    margin-top: -30px;
    width: 100vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
    .card {
      margin-top: 18%;
      border-radius: 5px;
      height: 150px;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      background-color: #925ff0;
    }
    .mobile {
      display: flex;
    }
    .top_links {
      display: flex;

      .logo {
        text-align: center;
        margin: 1rem 0;
      }
      img {
        cursor: pointer;
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    .end {
    }
    ul {
      list-style-type: none;
      display: flex;

      gap: 1rem;
      padding: 1rem;

      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

        font-size: 15px;
        &:hover {
          border-left: 2px solid blue;
          color: blue;
        }
      }
    }

    .categorie {
      height: 65vh;
      max-height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
          background-color: blue;
        }
      }
    }
  }
`;
export default React.memo(Sidebar);
