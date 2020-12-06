import { initialPostBody } from "./InitalPostBody";
import image from "../../storage/loba.png";
import reviewImage from"../../storage/reviewPhoto.png"
export const arrayInitalState = {
  postsArray: [
    {
      id: "0",
      title: "FIRST GAMING NEWS",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "SECOND GAMING NEWS",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
    {
      id: "2",
      title: "THIRD GAMING NEWS",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },

    {
      id: "3",
      title: " LATEST GAMING NEWS 1",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },

    {
      id: "4",
      title: "LATEST GAMING NEWS TWO",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
    {
    id: "5",
    title: "FIRST GAMING Review",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date().toDateString(),
  },
  {
    id: "6",
    title: "SECOND GAMING Review",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date().toDateString(),
  },
  {
    id: "7",
    title: "THIRD GAMING Review",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date().toDateString(),
  },

  {
    id: "8",
    title: " LATEST GAMING Review 1",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date().toDateString(),
  },

  {
    id: "9",
    title: "LATEST GAMING Review TWO",
    body: initialPostBody,
    category: "Review",
    author: "Islam Hamad",
    photo: reviewImage,
    date: new Date().toDateString(),
  },
  ],
};
