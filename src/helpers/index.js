import {
  POPULARITY_API_URL,
  TITLE_API_URL,
  VOTE_COUNT_API_URL,
  RELEASE_DATE_API_URL,
  VOTE_AVERAGE_API_URL,
} from "../constants";

export const handleSort = (str) => {
  if (str === "release date") {
    return RELEASE_DATE_API_URL;
  } else if (str === "title") {
    return TITLE_API_URL;
  } else if (str === "vote count") {
    return VOTE_COUNT_API_URL;
  } else if (str === "vote average") {
    return VOTE_AVERAGE_API_URL;
  } else {
    return POPULARITY_API_URL;
  }
};
