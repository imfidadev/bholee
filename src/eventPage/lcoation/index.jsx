import React from "react";
import "./style.scss";
import { youtubeThumb } from "../../assets/images/images";

const EventLocation = () => {
  return (
    <section className="event-location">
      <h2>The location</h2>
      <h4>OBX 4x4 wild horses Beach, NC</h4>
      <div class="youtube-thumbnail">
        <a
          href="https://www.youtube.com/watch?v=pJoFu_pvFYE"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeThumb} alt="YouTube Video" />
        </a>
      </div>
    </section>
  );
};

export default EventLocation;
