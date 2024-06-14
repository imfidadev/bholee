import api from "./index";
import { CONTACT_US, BOOKING_MAIL, GET_POSTS } from "./endPoints";

export const contactUs = async (values) => await api.post(CONTACT_US, values);

export const bookingMail = async (values) =>
  await api.post(BOOKING_MAIL, values);

export const getPosts = async () => await api.get(GET_POSTS);
