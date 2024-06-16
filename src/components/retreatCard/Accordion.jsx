import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const CardAccordion = ({ data, index }) => {
  return (
    <Accordion>
      {data.map((item, priceIndex) => (
        <AccordionItem key={priceIndex}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.title}</AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {item.amounts.map((amountItem, amountIndex) => (
              <div className="accordion-body" key={amountIndex}>
                <div className="selection">
                  <input
                    type="radio"
                    id={`${index}-planRadio-${priceIndex}-${amountIndex}`}
                    name={`${index}-planRadio`}
                    value={`${index}-${priceIndex}-${amountIndex}`}
                    className="custom-radio"
                  />
                  <label
                    for={`${index}-planRadio-${priceIndex}-${amountIndex}`}
                  >
                    {amountItem.title}
                  </label>
                </div>
                <div className="price">{`$${amountItem.amount}`}</div>
              </div>
            ))}

            <div className="description">
              <p>{item.description}</p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CardAccordion;
