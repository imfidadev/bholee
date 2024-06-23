import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);

const DATE_FORMATE = {
  1: "DD/MMM/YYYY hh:mm:ss A",
  2: "MMM DD, YYYY hh:mm:ss A",
  3: "MMM DD, YYYY hh:mm A",
  4: "DD/MMM/YYYY HH:mm:ss",
  5: "HH:mm:ss",
  6: "MMM DD, YYYY",
  7: "hh:mm:ss A",
  8: "hh:mm A",
  9: "YYYY-MM-DD",
  10: "DD/MM/YYYY",
};

export const toLocalDateTime = (DateTimeObj, DateFormat = DATE_FORMATE[2]) =>
  dayjs
    .utc(dayjs(DateTimeObj).format(DATE_FORMATE[1]))
    .local()
    .format(DateFormat);

export const dateTimeToString = (DateTimeObj, DateFormat = DATE_FORMATE[6]) =>
  dayjs(DateTimeObj).format(DateFormat);

export const formReadableDT = (date, formate = DATE_FORMATE[6]) =>
  dayjs(toLocalDateTime(date, formate));
