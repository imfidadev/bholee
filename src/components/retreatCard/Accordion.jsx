import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { calculatePricingDetail } from "../../helpers/pricing";

const CardAccordion = ({ data, discount, index }) => {
  return (
    <Accordion allowMultipleExpanded>
      {data.map((item, priceIndex) => (
        <AccordionItem key={priceIndex}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.title}</AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            {item.amounts.map((amountItem, amountIndex) => {
              const priceDetail = calculatePricingDetail(
                discount,
                amountItem.amount
              );

              return (
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
                  <div className="price">
                    <span
                      className={priceDetail.isDiscount ? "line-through" : ""}
                    >{`$${amountItem.amount}`}</span>{" "}
                    {priceDetail.isDiscount && (
                      <>
                        ${priceDetail.price}
                        <p>{priceDetail.till}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}

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
