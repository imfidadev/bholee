import React from "react";
import "./style.scss";
import { youtubeThumb } from "../../assets/images/images";

const EventLocation = () => {
  return (
    <section className="event-location" id="location">
      <h2>The location</h2>
      <h4>Corolla OBX 4x4 Wild Horses Beach, NC</h4>
      <p>
        Located near the Currituck National Wildlife Refuge, just south of the
        Virginia border, our 4x4home gives you access to the wild side of the
        Outer Banks, where wild horses roam free. This is a one of a kind
        experiences where you are likely to see a wild mustang walking freely in
        the area.
      </p>
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
