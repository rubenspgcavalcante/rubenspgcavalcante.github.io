import Component from './containers/Projects';
import { BANNER_SUMMER } from "../ui/constants/banners";
import reducer from "./reducers/index";

export default {
  Component,
  reducer,
  picture: BANNER_SUMMER,
  title: "My projects",
  subtitle: "A little about what I've done until now"
}