import React, { useState } from "react";
import { retreatCardInfo } from "./helper";
import "./style.scss";
import CardAccordion from "./Accordion";

const RetreatCard = () => {
  const [isShowMoreFirstCard, setIsShowMoreFirstCard] = useState(false);
  // const [isShowMoreSecondCard, setIsShowMoreSecondCard] = useState(false);
  return (
    <>
      {retreatCardInfo.map((item, index) => {
        return (
          <div className="retreat-card" key={index}>
            <div className="card-img">
              <img src={item.cardImg} alt="card-img" />
            </div>
            <div className="card-content">
              <h2>
                {item.id}. {item.cardTitle}
              </h2>
              <p className="card-desc">{item.cardDesc}</p>
              <div
                className={`retreat-accordion ${
                  isShowMoreFirstCard ? "show" : ""
                }`}
              >
                <CardAccordion />
              </div>
              <div className="check-in-out">
                <p>Check-in: {item.checkIn}</p>
                <p>Check-out: {item.checkOut}</p>
              </div>
              <div className="card-bottom">
                <button>Book Your Slot</button>
                <span
                  onClick={() => {
                    setIsShowMoreFirstCard(!isShowMoreFirstCard);
                  }}
                >{`${isShowMoreFirstCard ? "See Less" : "See More"}`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RetreatCard;
