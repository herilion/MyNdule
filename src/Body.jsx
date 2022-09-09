import React, { useState } from "react";

import styled from "styled-components";
import Navbar from "./Navbar";
function Body({
  user,
  playlist,
  setIdp,
  setPlaylist,
  tracks,
  trackSearch,
  setTracks,
  token,
  track,
  yourSearch,
  setYourSearch,
  album,
  setIde,
  setType,
  setAlbumSearch,
  setTrackSearch,
  albumSearch,

  setIdq,
  setYourSearchAlbum,
  setYourSearchTrack,
  yourSearchALbum,
  yourSearchTrack,
}) {
  console.log("newtrack", track);
  const [resultSearch, setResultSearch] = useState({ listOfTracksSearch: [] });
  const [search, setSearch] = useState("");
  console.log("playlist", playlist.listOfIdPlaylistFromAPI);

  const changePlayer = (id, type) => {
    setIdp(id);
    setType(type);
  };

  return (
    <Container>
      <Navbar
        setPlaylist={setPlaylist}
        playlist={playlist}
        search={search}
        token={token}
        setSearch={setSearch}
        tracks={tracks}
        setTracks={setTracks}
        resultSearch={resultSearch}
        setResultSearch={setResultSearch}
        setYourSearch={setYourSearch}
        setIde={setIde}
        setAlbumSearch={setAlbumSearch}
        setTrackSearch={setTrackSearch}
        album={album}
        setIdq={setIdq}
        setYourSearchAlbum={setYourSearchAlbum}
        setYourSearchTrack={setYourSearchTrack}
        user={user}
        trackSearch={trackSearch}
      />
      <div className="entete">
        <span>{yourSearch}</span>

        <span className="detail">SEE DETAIL</span>
      </div>
      <ul className="playlist">
        {playlist.listOfPlaylistFromAPI &&
          playlist.listOfPlaylistFromAPI.map((image, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setIdp(image.id);
                  setType(image.type);
                }}
              >
                <img src={image.images[0] && image.images[0].url} alt="" />
                {image.name}
              </li>
            );
          })}
      </ul>
      <br />
      <div className="entete">
        <span>{yourSearchALbum}</span>
      </div>

      <ul className="playlist">
        {albumSearch.listOfIconAlbumFromAPiSearch &&
          albumSearch.listOfIconAlbumFromAPiSearch.map((image, i) => {
            return (
              <li key={i} onClick={() => changePlayer(image.id, image.type)}>
                <img src={image.icon[0] && image.icon[0].url} alt="" />
                {image.name}
              </li>
            );
          })}
      </ul>
      <br />
      <div className="entete">
        <span>{yourSearchTrack}</span>
      </div>

      <ul className="playlist">
        {trackSearch.listOfTrackFromAPISearch &&
          trackSearch.listOfTrackFromAPISearch.map((image, i) => {
            return (
              <li key={i} onClick={() => changePlayer(image.id, image.type)}>
                <img
                  src={image.album.images[0] && image.album.images[0].url}
                  alt=""
                />
                {image.album.name}
              </li>
            );
          })}
      </ul>
      <br />
      <div className="entete">
        <span>POPULAR ALBUM</span>
      </div>

      <ul className="playlist">
        {album.listOfIconAlbumFromAPi &&
          album.listOfIconAlbumFromAPi.map((image, i) => {
            return (
              <li key={i} onClick={() => changePlayer(image.id, image.type)}>
                <img src={image.icon[0] && image.icon[0].url} alt="" />
                {image.name}
              </li>
            );
          })}
      </ul>
      <br />
      <div className="entete">
        <span>POPULAR TRACK</span>
      </div>

      <ul className="playlist">
        {track.listOfTrackFromAPI &&
          track.listOfTrackFromAPI.map((image, i) => {
            return (
              <li key={i} onClick={() => changePlayer(image.id, image.type)}>
                <img
                  src={image.album.images[0] && image.album.images[0].url}
                  alt=""
                />
                {image.album.name}
              </li>
            );
          })}
      </ul>

      {/* <div className="tracks">
        <span className="span">
          <MdQueueMusic />{" "}
        </span>{" "}
        TRACKS
      </div> */}

      {/* <div className="contcard">
        <div className="card">
          {items.map((item, idx) => (
            <div>
              <li key={idx}>
                <img src={item.track.album.images[0].url} alt="" />
                {item.track.name}
              </li>
            </div>
          ))}
        </div>
      </div> */}
    </Container>
  );
}
const Container = styled.div`
  .entete {
    margin-left: 30px;
    margin-right: 38px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .detail {
      color: #1161e8;
    }
  }

  .playlist {
    margin: 0 2rem;
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    width: 54vw;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 0.2rem;
      &-thumb {
        background-color: blue;
      }
    }
    gap: 1rem;
    li {
      padding-bottom: 0.5rem;
      list-style: none;
      font-size: 12px;
      img {
        height: 11rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
      }
    }
    li:hover {
      transition: 0.7s;
      transform: scale(1.1);
    }
  }
  .contcard {
    display: flex;
    justify-content: center;

    gap: 2rem;
    overflow: hidden;
  }
  .card {
    padding-top: 2%;
    background: linear-gradient(
      135deg,
      rgb(255, 255, 255, 0.1),
      rgb(255, 255, 255, 0)
    );
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid rgb(255, 255, 255, 0.18);
    border-radius: 10px;

    width: 90%;
    height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: blue;
      }
    }
    li {
      margin-bottom: 2%;
      font-size: 12px;
      cursor: pointer;
      border-bottom: 1px solid rgba(167, 165, 165, 0.105);
    }
    li:hover {
      color: blue;
    }
    img {
      width: 30px;
      border-radius: 50%;
    }
  }

  .span {
    font-size: 25px;
    color: blue;
  }
  .tracks {
    margin-top: 7%;
    margin-left: 3%;
  }
  @media (max-width: 900px) {
    .playlist {
      margin: 0 2rem;
      display: flex;
      padding-bottom: 10px;
      align-items: center;
      width: 90vw;
      max-height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        height: 0.2rem;
        &-thumb {
          background-color: blue;
        }
      }
    }
  }
`;
export default React.memo(Body);
