import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the world's most iconic skyscrapers",
    imageUrl:
      "https://th.bing.com/th/id/OLC.lp5u7VeEyp0Iew480x360?w=210&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748444,
      lng: -73.985667,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the world's most iconic skyscrapers",
    imageUrl:
      "https://th.bing.com/th/id/OLC.lp5u7VeEyp0Iew480x360?w=210&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748444,
      lng: -73.985667,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
