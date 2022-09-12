import React from "react";

import styled from "styled-components";

function Sideleftbar({ idp, type }) {
  return (
    <div className='sideLeftbar' >
      <Container>
        <iframe
          src={`https://open.spotify.com/embed/${type}/${idp}?utm_source=generator`}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Container>
    </div>
  );
}
const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${'' /* width: 20vw; */}
  background-color: red;
  height: 128vh;
  iframe {
    height: 100%;
    right: 0;
  }

  img {
    position: absolute;
    bottom: 353.5px;
    right: 74px;
    border-radius: 50%;
  }
  .track {
    width: 130px;
    height: 130px;
    ${'' /* margin-right: auto;
    margin-left: auto; */}
    margin-top: 30%;
    border: 2px solid white;
    border-radius: 50%;
    border-top: #000000;
    animation: circular-loader 2s linear infinite;
  }
  @keyframes circular-loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .playing {
    border-radius: 10px;
    height: 400px;
    background-color: #925ff0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .play {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 25%;
      height: 20%;
      background-color: #0b0b0b;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: blue;
      }
    }
    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: blue;
      }
      img {
        width: 35px;
        border-radius: 50%;
      }
    }
  }
  @media (max-width: 900px) {
    height: 170px;
    width: 80%;

    margin-left: 10%;
  }
`;
export default Sideleftbar;
