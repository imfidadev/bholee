import React from "react";
import "./style.scss";
import { eventCardImg } from "../../assets/images/images";

const EventProperty = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="event-property">
      <h2>our property</h2>
      <p>
        Located near the Currituck National Wildlife Refuge, just south of the
        Virginia border, our 4x4home gives you access to the wild side of the
        Outer Banks, where wild horses roam free. This is a one of a kind
        experiences where you are likely to see a wild mustang walking freely in
        the area. 
      </p>
      <div className="event-card">
        <div className="event-card-img">
          <img src={eventCardImg} alt="card-img" />
        </div>
        <div className="event-card-info">
          <h3>
            The Mark Twain Grand Ocean Front Home at The Three Authors- Outer
            Banks, North Carolina
          </h3>
          <p>
            Located near the Currituck National Wildlife Refuge, just south of
            the Virginia border, our 4x4home gives you access to the wild side
            of the Outer Banks, where wild horses roam free. This is a one of a
            kind experiences where you are likely to see a wild mustang walking
            freely in the area. 
          </p>
          <div className="card-bottom">
            <button onClick={() => scrollToSection("retreatCard")}>
              Book Your Slot
            </button>
          </div>
        </div>
      </div>
      <div className="event-text">
        <h4>The Mark Twain – Grand Ocean Front Home</h4>
        <p>
          Immerse in the perfect blend of grandeur and classic Outer Banks charm
          at The Mark Twain, an 18-bedroom beachfront retreat home. Luxurious
          indoor and outdoor idyllic spaces. It is an extended escape to
          reconnect, celebrate, and create a symphony of unforgettable memories.
        </p>
        <p>
          This magnificent home has a heated outdoor pool, a relaxing hot tub,
          gazebo, luxury bedrooms, spacious elevated decks overlooking the
          ocean, Game room for a little entertainment between activities with
          pool table, foosball table and plenty of places to enjoy sunrises on
          the ocean, sunsets on the sound, and the wild horses of Corolla! There
          are several transportation options for you at this 4-wheel drive-only
          property.
        </p>
      </div>
    </section>
  );
};

export default EventProperty;
