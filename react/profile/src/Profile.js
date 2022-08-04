import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  return (
    <div className="app">
      {data &&
        data.map((user) => (
          <CardComponent name={user.name} email={user.email} />
          // <div className="item-container">
          //   Id:{user.id} <div className="title">Title:{user.title}</div>
          // </div>
        ))}
    </div>
  );
}

export default Profile;

// // map to the fields we're interested in using
// const newData = json.map(object => ({
//   //  only use these fields for newData
//   id: object.id,
//   email: object.email,
//   website: object.website,
//   phone: object.phone,
//   name: object.name,
// }));

// // copy the existing previous data with the new data we just fetched
// setData(previousData => [...previousData, ...newData]);
