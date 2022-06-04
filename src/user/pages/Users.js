import React from "react";
import UsersList from "../components/UsersList";

export const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Vaibhav",
      image:
        "https://images.unsplash.com/photo-1557995744-18c7f67f4307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      places: "3",
    },
    {
      id: "2",
      name: "Sakshi",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      places: "1",
    },
  ];

  return <UsersList items={USERS} />;
};
