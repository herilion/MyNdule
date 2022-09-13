import React from "react";
import { FaSearch } from "react-icons/fa";
import '../Styles/navBar.css'

import axios from "axios";
function Navbar({
  search,
  setSearch,
  trackSearch,
  token,
  setPlaylist,
  setIde,
  setAlbumSearch,
  setTrackSearch,
  playlist,
}) {
  const mySearch = (e) => {
    setSearch(e.target.value);
  };
  const changeContent = (event) => {
    event.preventDefault();
    setSearch(search);
    axios(
      `https://api.spotify.com/v1/search?q=${encodeURI(
        search
      )}&type=track,artist,album,playlist&limit=50`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setPlaylist({
        listOfIdPlaylistFromAPI: tracksResponse.data.playlists.items.map(
          (url) => ({
            id: url.id,
            type: url.type,
          })
        ),

        listOfPlaylistFromAPI: tracksResponse.data.playlists.items,
      });
      setIde(playlist.listOfIdPlaylistFromAPI.id);
      setAlbumSearch({
        listOfAlbumFromAPISearch: tracksResponse.data.albums.items,

        listOfIconAlbumFromAPiSearch: tracksResponse.data.albums.items.map(
          (genre) => ({
            type: genre.type,
            icon: genre.images,
            id: genre.id,
            name: genre.name,
          })
        ),
      });
      setTrackSearch({
        listOfTrackIdFromAPISearch: tracksResponse.data.tracks.items.map(
          (urle) => ({
            id: urle.id,
            type: urle.type,
          })
        ),

        listOfTrackFromAPISearch: tracksResponse.data.tracks.items,
      });

      setIde(trackSearch.listOfTrackIdFromAPISearch.id);
    });

    setSearch("");
  };

  return (
    <div className="navBar">
      <div className="search_bar">
        <form action="" onSubmit={changeContent}>
          <input
            type="text"
            placeholder="Artist, song"
            required
            value={search}
            onChange={mySearch}
          />
          <div className="search">
            <button type="submit">
              <span>
                <FaSearch />
              </span>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Navbar;
