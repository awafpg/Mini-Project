import React from "react";

const index = () => {
  return (
    <div>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>
            Name: {selectedUser.first_name} {selectedUser.last_name}
          </p>
          <p>Email: {selectedUser.email}</p>
          <img src={selectedUser.avatar} alt={selectedUser.first_name} />
        </div>
      )}
    </div>
  );
};

export default index;
