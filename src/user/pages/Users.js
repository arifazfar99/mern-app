import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Arif Azfar",
      image: "https://placehold.co/400",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
