import React from "react";
import { useParams } from "react-router-dom";
import { PlaceList } from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state builing",
    description: "One of the most famus sky scaper",
    imageUrl:
      "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    address: " 9/3-5 , bikas nagar ",

    location: {
      lat: 26.884857,
      lng: 80.968282,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire state builing",
    description: "One of the most famus sky scaper",
    imageUrl:
      "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    address: " 9/3-5 , bikas nagar ",

    location: {
      lat: 26.884857,
      lng: 80.968282,
    },
    creator: "u2",
  },
];

export const UserPlaces = () => {
  console.log(useParams());
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
