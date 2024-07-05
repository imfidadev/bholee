import React from "react";
import EventHero from "./hero";
import CardSection from "./cardSection";
import RetreatSection from "./retreatSection";
import EventLocation from "./lcoation";
import EventProperty from "./property";
import Facilitators from "./facilitators";
import Faq from "./faq";

const EventPage = () => {
  return (
    <>
      <EventHero />
      <CardSection />
      <RetreatSection />
      <EventLocation />
      <EventProperty />
      <Facilitators />
      <Faq />
    </>
  );
};

export default EventPage;
