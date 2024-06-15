import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const CardAccordion = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Shared room + shared bathroom (level 1) <br /> 6 rooms, 12 spots
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="firstSingle"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="firstSingle">Single occupancy</label>
            </div>
            <div className="price">$1450</div>
          </div>
          <div className="description">
            <p>(includes all part of the retreat)</p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Private room + private bathroom (level 1) <br /> 4 rooms, 8 spots
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="secondSingle"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="secondSingle">Single occupancy</label>
            </div>
            <div className="price">$1450</div>
          </div>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="secondDouble"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="secondDouble">Double occupancy</label>
            </div>
            <div className="price">$3400</div>
          </div>
          <div className="description">
            <p>
              (includes all part of the retreat + All Meals + 30 minute
              Photoshoot + Massage session)
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            VIP beachfront Private king + private bathroom (level 3) <br /> 2
            rooms, 4 spots
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="thirdDouble"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="thirdDouble">Double occupancy</label>
            </div>
            <div className="price">$4300</div>
          </div>
          <div className="description">
            <p>
              (includes all part of the retreat + All Meals + 30 minute
              Photoshoot + One on one partner Yoga session with retreat host +
              One hour massage)
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Private king + private bathroom (level 3) <br /> 4 rooms, 8 spots
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="fourthSingle"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="fourthSingle">Single occupancy</label>
            </div>
            <div className="price">$1850</div>
          </div>
          <div className="accordion-body">
            <div className="selection">
              <input
                type="radio"
                id="fourthDouble"
                name="customRadio"
                value="1"
                className="custom-radio"
              />
              <label for="fourthDouble">Double occupancy</label>
            </div>
            <div className="price">$3400</div>
          </div>
          <div className="description">
            <p>
              (includes all part of the retreat + All Meals + 30 minute
              Photoshoot + One on one partner Yoga session with retreat host +
              One hour massage)
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CardAccordion;
