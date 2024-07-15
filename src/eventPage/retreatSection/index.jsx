import React from "react";
import { retreatImg1, retreatImg2 } from "../../assets/images/images";
import "./style.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const RetreatSection = () => {
  return (
    <>
      <section className="retreat-section">
        <div className="img-section">
          <img src={retreatImg2} alt="img" />
          <div className="info">
            <h2>Sept 22-25</h2>
            <div>
              <h2>A Journey Inward.</h2>
            </div>
            <p>A holistic journey to harmonize your mind, body, and soul </p>
          </div>
        </div>
        <div className="retreat-text-section">
          <h3>A holistic journey to harmonize your mind, body, and soul </h3>
          <p>
            Discovering inner harmony is a journey- a sacred pilgrimage through
            the landscapes of our souls. This four-day, three-night retreat
            offers a respite from the noise of daily routine for you to renew
            your sense of clarity, alignment and peace. Energize the next
            chapter of your life with the knowledge and tools to thrive from a
            joyful core.
          </p>

          <p>
            Give yourself the gift of immersion on this holistic journey
            designed to harmonize your mind, body, and soul. Expect to look
            within for solutions, instead of looking out. Come away with a
            greater sense of self and deep-rooted connection with your own self.
            Return home renewed with the harmony your soul years for.
          </p>
        </div>
      </section>
      <div className="faq retreat-faq">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Offerings and Tentative Schedule
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="">
                <b>A Journey Inward</b>
              </p>
              <p className="">
                <b>On this retreat a general day schedule we follow:</b>
              </p>
              <p>
                <b>6:30 - 8:00 am:</b> Guided Sunset and Sunrise Yoga, Guided
                Meditation (H’oponopono, Mindfulness, Self Love), Breathwork,
                Cleansing ocean dip.
              </p>
              <p>
                <b>8:00 - 9:30 am:</b> Breakfast followed by Community
                Circle (gratitude, journaling prompts, reflection)
              </p>
              <p>
                <b>10:00am-12pm:</b> Workshops (Hip and Shoulder Mobility
                leading to arm balances and advanced asanas, Breathwork
                Workshop, Somatic Work, Ecstatic Dance and Cacao Ceremony)
              </p>
              <p>
                <b>1:00-4:00 pm:</b> Lunch & Free Time. Enjoy delicious meals,
                soups, salads, pastas, DIY taco bar & curries. Soak in the sun
                by the pool or beach. Use this time for journaling, massage, one
                on one yoga sessions, photoshoot, dry needling/acupuncture and
                spinal adjustments
              </p>
              <p>
                <b>4:00 pm:</b> light snacks and tea.
              </p>
              <p>
                <b>5:00 -7:00 pm:</b> Guided Sunset Yoga, Meditation,
                Breathwork. 
              </p>
              <p>
                <b>8:00 pm:</b> Dinner (Welcome Ceremony on first night, White
                dress party and burning ceremony on last night)
              </p>
              <p>
                <b>9:00 pm:</b> Yin Yoga, Yoga Nidra, Sound Bath under the stars
                (weather depending)
              </p>
              <p>
                <b>During the free time schedule your massage:</b>
                <br /> one on one yoga sessions, photoshoot, dry
                needling/acupuncture and spinal adjustments sessions. And
                experience the wild horses of Corolla, enjoy the pool, hot tub,
                game room, immerse yourself in some peace and quiet on
                the beach.
              </p>
              <p>
                <b>Breakfast includes:</b>
                <br /> Fresh fruit/berries, toast, variety of granolas and
                cereals and fresh squeezed juice, eggs, bread, smoothies, oats,
                chia pudding and a lot of other options.
              </p>
              <p>
                <b>Coffee/Teas/Juices and snacks available all day. </b>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <section className="retreat-section">
        <div className="img-section">
          <img src={retreatImg1} alt="img" />
          <div className="info">
            <h2>Sept 25-28</h2>
            <div>
              <h2>The Body Holiday</h2>
            </div>
            <p>Sacred Rest and Reset for your mind, body, and soul.</p>
          </div>
        </div>
        <div className="retreat-text-section">
          <h3>Sacred Rest and Reset Yoga and Meditation Retreat</h3>
          <p>
            Feeling drained and cut off from your life force? In the whirlwind
            of daily life, our mind and bodies often cry out for a break—a
            moment to pause, breathe, and rest. Daily self-care is a must if we
            are to live with vitality and positivity and this retreat is all
            about that! This is a slow paced, gentle retreat for anyone in need
            of some healing space and inspiration.
          </p>

          <p>
            This luxurious four-day, three-night experience offers you present
            moment consciousness practices, nature immersion, and tangible
            mind-body techniques. You will learn tools to quiet the mind clutter
            that blocks awareness in daily life, allowing you to feel your
            energy flow more freely.
          </p>

          <p>
            Embark on a journey to ignite your inner light through holistic
            wellness practices of power up and power yoga sessions, guided
            meditations, yoga nidra, deep stretching promoting relaxation and
            healing. The Body Holiday includes immersive experiences like
            acupuncture, massage, breathwork, soul-nourishing organic meals
            designed to heal from the inside out, sound healing, aroma therapy
            and music to soothe and uplift your spirit.
          </p>

          <p>
            In the in between moments amidst the tranquil embrace of nature
            experience the wild horses of Corolla, enjoy the pool, hot tub, game
            room, adventure into the natural gifts of the sea, immerse yourself
            in some peace and quiet on the beach with serene sunrises. Reconnect
            with yourself to abide in your inner light
          </p>
        </div>
      </section>
      <div className="faq retreat-faq">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Offerings and Tentative Schedule
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="">
                <b>The Body Holiday</b>
              </p>
              <p className="">
                <b>On this retreat a general day schedule we follow:</b>
              </p>
              <p>
                <b>6:30 - 8:00 am:</b> Guided Sunset and Sunrise Yoga, Guided
                Meditation (H’oponopono, Mindfulness, Self Love), Breathwork,
                Cleansing ocean dip.
              </p>
              <p>
                <b>8:00 - 9:30 am:</b> Breakfast followed by Community
                Circle (gratitude, journaling prompts, reflection)
              </p>
              <p>
                <b>10:00am-12pm:</b> Workshops (Hip and Shoulder Mobility
                leading to arm balances and advanced asanas, Breathwork
                Workshop, Somatic Work, Ecstatic Dance and Cacao Ceremony)
              </p>
              <p>
                <b>1:00-4:00 pm:</b> Lunch & Free Time. Enjoy delicious meals,
                soups, salads, pastas, DIY taco bar & curries. Soak in the sun
                by the pool or beach. Use this time for journaling, massage, one
                on one yoga sessions, photoshoot, dry needling/acupuncture and
                spinal adjustments
              </p>
              <p>
                <b>4:00 pm:</b> light snacks and tea.
              </p>
              <p>
                <b>5:00 -7:00 pm:</b> Guided Sunset Yoga, Meditation,
                Breathwork. 
              </p>
              <p>
                <b>8:00 pm:</b> Dinner (welcome ceremony on first night, White
                dress party and burning ceremony and ecstatic dance on last
                night)
              </p>
              <p>
                <b>9:00 pm:</b> Yin Yoga, Yoga Nidra, Sound Bath under the stars
                (weather depending)
              </p>
              <p>
                <b>During the free time schedule your massage:</b>
                <br /> one on one yoga sessions, photoshoot, dry
                needling/acupuncture and spinal adjustments sessions. And
                experience the wild horses of Corolla, enjoy the pool, hot tub,
                game room, immerse yourself in some peace and quiet on
                the beach.
              </p>
              <p>
                <b>Breakfast includes:</b>
                <br /> Fresh fruit/berries, toast, variety of granolas and
                cereals and fresh squeezed juice, eggs, bread, smoothies, oats,
                chia pudding and a lot of other options.
              </p>
              <p>
                <b>Coffee/Teas/Juices and snacks available all day. </b>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default RetreatSection;
