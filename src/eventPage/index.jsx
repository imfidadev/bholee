import React from "react";
import EventHero from "./hero";
import CardSection from "./cardSection";
import RetreatSection from "./retreatSection";
import EventLocation from "./lcoation";
import EventProperty from "./property";

const EventPage = () => {
  return (
    <>
      <EventHero />
      <CardSection />
      <RetreatSection />
      <EventLocation />
      <EventProperty />
    </>
  );
};

export default EventPage;
