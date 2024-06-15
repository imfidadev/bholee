import api from "./index";
import {
  CONTACT_US,
  BOOKING_MAIL,
  GET_POSTS,
  CREATE_PAYMENT_INTENT,
} from "./endPoints";

export const contactUs = async (values) => await api.post(CONTACT_US, values);

export const bookingMail = async (values) =>
  await api.post(BOOKING_MAIL, values);

export const getPosts = async () => await api.get(GET_POSTS);

export const createPaymentIntent = async (values) =>
  await api.post(CREATE_PAYMENT_INTENT, values);
