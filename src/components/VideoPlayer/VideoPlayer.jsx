import React, { useRef } from "react";
import css from "./VideoPlayer.module.css";
import video from "../../assets/video.mp4";

export const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`${css.videoPlayer} ${playState ? "" : css.hide}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};
