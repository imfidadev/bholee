import { dateTimeToString } from "../utils/dateTime";

const calSellingPrice = (isDiscount, price, percentage) => {
  return price > 0
    ? isDiscount
      ? price - parseFloat(((price * percentage) / 100).toFixed(2))
      : price
    : 0;
};

export const calculatePricingDetail = (discount, price) => {
  let { percentage, active, start, end } = discount;
  price = price || 0;
  percentage = percentage || 0;

  if (price == 0) return { isDiscount: false, till: "", price: 0 };

  // discount
  const today = new Date();
  const isDiscount = !!(
    active &&
    percentage > 0 &&
    ((start && end && today >= new Date(start) && today <= new Date(end)) ||
      (start && !end && today >= new Date(start)) ||
      (end && !start && today <= new Date(end)))
  );

  const salePrice = calSellingPrice(isDiscount, price, percentage);

  return {
    isDiscount,
    till: end ? `Till ${dateTimeToString(end.split("T")[0])}` : "Now",
    price: parseFloat(salePrice),
  };
};
