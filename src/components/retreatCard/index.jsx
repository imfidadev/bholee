import React, { useState } from "react";
import { retreatCardInfo } from "./helper";
import "./style.scss";
import CardAccordion from "./Accordion";
import { toast } from "react-toastify";
import { calculatePricingDetail } from "../../helpers/pricing";

const CardElement = ({ item, index, handleSelected }) => {
  const [isShowMoreFirstCard, setIsShowMoreFirstCard] = useState(false);

  return (
    <div className="retreat-card" key={index} id="retreatCard">
      <div className="card-img">
        <img src={item.cardImg} alt="card-img" />
      </div>

      <div className="card-content">
        <h2>
          {item.id}. {item.cardTitle}
        </h2>

        <p className="card-desc">{item.cardDesc}</p>

        <div
          className={`retreat-accordion ${isShowMoreFirstCard ? "show" : ""}`}
        >
          <CardAccordion
            data={item.prices}
            discount={item.discount}
            index={index}
          />
        </div>

        <div className="check-in-out">
          <p>Check-in: {item.checkIn}</p>
          <p>Check-out: {item.checkOut}</p>
        </div>

        <div className="card-bottom">
          <button
            onClick={() => {
              const value = document.querySelector(
                `input[name="${index}-planRadio"]:checked`
              )?.value;

              if (value === null || value === undefined) {
                setIsShowMoreFirstCard(true);
                toast.error("Please select a price");
                return;
              }

              const ind = value.split("-");
              const priceObj = { ...retreatCardInfo[ind[0]].prices[ind[1]] };
              priceObj.type = priceObj.amounts[ind[2]].title;
              priceObj.amount = priceObj.amounts[ind[2]].amount;

              priceObj.priceDetail = calculatePricingDetail(
                item.discount,
                priceObj.amount
              );

              delete priceObj.amounts;

              const resp = {
                ...item,
                price: priceObj,
              };

              delete resp.prices;
              delete resp.discount;

              handleSelected(resp);
            }}
          >
            Book Your Slot
          </button>
          <span
            onClick={() => setIsShowMoreFirstCard(!isShowMoreFirstCard)}
          >{`${isShowMoreFirstCard ? "See Less" : "See More"}`}</span>
        </div>
      </div>
    </div>
  );
};

const RetreatCard = ({ handleSelected }) => {
  return (
    <>
      {retreatCardInfo.map((item, index) => (
        <CardElement
          item={item}
          index={index}
          handleSelected={handleSelected}
        />
      ))}
    </>
  );
};

export default RetreatCard;
