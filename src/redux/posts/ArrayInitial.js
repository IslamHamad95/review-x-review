import { initialPostBody } from "./InitalPostBody";
import tlou from "../../storage/loba.png";
import hades from "../../storage/Hades.jpg"
import cyperpunk from "../../storage/cyperpunk.png"
import reviewImage from"../../storage/reviewPhoto.png"
import acValhalla from "../../storage/ACValhalla.jpg"
export const arrayInitalState = {
  postsArray: [
    {
      id: "0",
      title: "FIRST GAMING NEWS",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: cyperpunk,
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "VALHALLA IS PUSHING AC WORLD FORWORD",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: acValhalla,
      date: new Date(2020, 10, 13).toDateString(),
    },
    {
      id: "2",
      title: "DO NOT SLEEP ON HADES",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: hades,
      date: new Date(2020, 10, 13).toDateString(),
    },

    {
      id: "3",
      title: "TLOU2 COULD DOMINATE THE GAME AWARDS",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: tlou,
      date: new Date(2020, 10, 14).toDateString(),
    },

    {
      id: "4",
      title: "CYPERPUNK 2077 IS OUT",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: cyperpunk,
      date: new Date(2020, 10, 15).toDateString(),
    },
    {
    id: "5",
    title: "THE WITCHER 3 REVIEW",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date(2020, 7, 1).toDateString(),
  },
  {
    id: "6",
    title: "THE LAST OF US 2 REVIEW",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: tlou,
    date: new Date(2020, 7, 30).toDateString(),
  },
  {
    id: "7",
    title: "HADES REVIEW",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: hades,
    date: new Date(2020, 10, 2).toDateString(),
  },

  {
    id: "8",
    title: "AC VALHALLA REVIEW",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: acValhalla,
    date: new Date(2020, 10, 30).toDateString(),
  },

  {
    id: "9",
    title: "CYPERPUNK 2077 REVIEW",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: cyperpunk,
    date: new Date(2020, 11, 1).toDateString(),
  },
  ],
};
