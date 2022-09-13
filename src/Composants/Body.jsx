import React, { useState } from "react";
import '../Styles/body.css'
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
  const [resultSearch, setResultSearch] = useState({ listOfTracksSearch: [] });
  const [search, setSearch] = useState("");

  const changePlayer = (id, type) => {
    setIdp(id);
    setType(type);
  };

  return (
    <div className="container">
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
    </div>
  );
}
export default React.memo(Body);
