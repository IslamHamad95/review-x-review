import { initialPostBody } from "./InitalPostBody";
import image from "../../storage/loba.png";
export const arrayInitalState = {
  postsArray: [
    {
      id: "0",
      title: "The Last of Us is Coming Out This Year",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "GOD OF WAR is Coming Out This Year",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
    {
      id: "2",
      title: "FALLOUT is Coming Out This Year",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },

    {
      id: "3",
      title: " AC Odyssay is Coming Out This Year",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },

    {
      id: "4",
      title: "Avengers Game Is Coming Out This Year",
      body: initialPostBody,
      category: "News",
      author: "Islam Hamad",
      photo: image,
      date: new Date().toDateString(),
    },
  ],
};
