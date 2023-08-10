"use client";

import React from "react";
import { trpc } from "~/utils/trpc";

export default function ListUsers() {
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Client Users</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {users?.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}