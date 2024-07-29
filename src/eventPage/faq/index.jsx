import React from "react";
import "./style.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <section className="faq">
      <h2>frequently asked questions</h2>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is included in our OBX retreats?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <span>-Daily Hatha/Restorative Flow Yoga</span>
            <br />
            <span>-Daily Guided Meditations</span>
            <br />
            <span>-Daily Breathwork</span>
            <br />
            <span>
              -Daily Life/Health & Soul Coaching Workshops that will inspire you
              long after the retreat. Take home workbook included. 
            </span>
            <br />
            <span>-Cleansing Ocean Swim, White Sandy Beach Time</span>
            <br />
            <span>-Sound Energy Healing with Crystal & Tibetan Bowls</span>
            <br />
            <span>-Exam and chiropractic adjustment</span>
            <br />
            <span>-Dry needling, acupuncture and cupping</span>
            <br />
            <span>
              -Community Circles  (Guided reflection activities, introspective
              journaling prompts)
            </span>
            <br />
            <span>
              -All meals and beverages (don't worry, these are all hot, hardy
              soups, stews, curries, pastas and salads; delicious entrees that
              will have you coming back for more)
            </span>
            <br />
            <span>
              -Pick up and drop off from the satellite parking with Off roading
              experience on the white beachy sand along the ocean
            </span>
            <br />
            <span>-Wifi connection</span>
            <br />
            <span>-Heated swimming pool and hot tub</span>
            <br />
            <span>-Aromatherapy</span>
            <br />
            <span>-Somatic Work and Tapping</span>
            <br />
            <span>-Mobility Work</span>
            <br />
            <span>-Music</span>
            <br />
            <span>-Hands on Adjustments</span>
            <br />
            <span>-Closing Ceremony White dress party</span>
            <br />
            <span>-Ecstatic Dance</span>
            <br />
            <span>-Optional Cacao Ceremony</span>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is not included in the package?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="list-item">Airfare</p>
            <p className="list-item">Airport & Ground Transfers</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Who is this retreat for?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Whether you are an advanced yogi or looking to start a new healthy
              lifestyle, this retreat is for you. It is a great way to bring
              your body, mind, and soul into harmony, as you re-modulate through
              a different biorhythm.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              I am new to yoga, will I be able to keep up?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              All levels are welcome Beginner, Intermediate and Advanced.
              <br />
              Our facilitators will make sure you feel like you are comfortable
              and belong on the mat by providing modifications, hands on assists
              and encouraging you to go at you own pace.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What if I am traveling solo?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We got you covered! About most yoga retreat participants and
              adventure seekers travel alone. You will meet like-minded people,
              and be part of a supportive community.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are the different packages?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              All packages are all inclusive. Shared occupancy room shared rooms
              with Jack n Jill bathrooms shared by the retreaters who choose
              this package. Single occupancy rooms are private king rooms for
              one person. The double occupancy rooms are private king with
              private bathrooms to be shared by no more than 2 people. For
              example, a couple, 2 family members and or 2 friends. If you are
              looking to share the room and cost but don’t have someone, email
              mao@bholee.com and we will do our best to find a roommate for you,
              although we cannot guarantee that we do.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is unique about 4×4 area?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              4×4 area has wide beaches, dense maritime forests. This is 11 mile
              stretch of sand north of Corolla and south of Virginia border. A
              four-wheel drive vehicle is required to explore this beach
              community, as there are no paved roads. It is an experience like
              no other. Once you are staying at our 4×4 beach property, you will
              drive on the beach and behind the dunes to access your vacation
              home. You will have an opportunity to observe the Corolla wild
              horses right in your backyard. This is just an Amazing experience.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to get to the retreat location and what type of vehicles are
              allowed?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Property is only accessible by All wheel drive vehicles. </p>

            <div className="scenario">
              <h3>Scenario 1: Drive Your Own AWD/4WD Vehicle</h3>
              <span>
                To reach our property, an AWD or 4WD vehicle with at least 7.5
                inches of ground clearance is required. Ideal vehicles include
                the Toyota 4Runner, Lexus GX, Toyota Tacoma, Nissan Frontier,
                Ford Bronco, Jeep Wrangler, Chevy Tahoe, and most trucks.
              </span>
              <span>
                Before driving on the sand/beach, please stop at our{" "}
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/1113+Village+Lane,+Corolla,+NC+27927,+USA/@36.3753843,-75.8297241,15z/data=!4m6!3m5!1s0x89a52c17d2af40af:0x3d198fc3d40962fa!8m2!3d36.3757334!4d-75.8294614!16s%2Fg%2F11c18fg5gb?entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
                  rel="noreferrer"
                >
                  Free Air Down Station
                </a>{" "}
                to reduce your tire pressure to between 18-20 PSI. You will then
                drive 2.5 miles along the beach to reach our property.
              </span>
              <span>
                For more information, watch this{" "}
                <a
                  href="https://www.youtube.com/watch?v=-zh36hNoEVk&t=133s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  video on driving on the beach.
                </a>
              </span>
            </div>
            <div className="scenario">
              <h3>Scenario 2: Group Members Without a 4WD Vehicle</h3>
              <span>
                If some members of your group do not have a 4WD vehicle, they
                can park their 2WD vehicles at one of our two satellite parking
                locations near Historic Corolla Park. For parking prices and
                locations, visit this{" "}
                <a
                  href="https://www.outerbankbeachhomes.com/our-trusted-vendors-573998693"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  page.
                </a>
              </span>
              <span>
                After parking join the group members who have 4WD vehicles for
                the trip to our property or let us know in advance for pick up
                from satellite parking.
              </span>
            </div>
            <div className="scenario">
              <h3>Scenario 3: Group members flying in</h3>
              <span>
                Virginia’s Norfolk International Airport (ORF) is the closest
                major airport to the Outer Banks and is an approximately 2-hour
                drive from the OBX. If you are flying, please Opt for our
                shuttle service or uber. For more details, visit this{" "}
                <a
                  href="https://www.outerbankbeachhomes.com/our-trusted-vendors-573998693"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  page.
                </a>
              </span>
            </div>
            <p>
              Please let us know if whichever option you are choosing to travel
              and we will help you out in every way we can.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
