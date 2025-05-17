import axios from "axios";
import { useState } from "react";

const UserCard = ({ name, email, avatar, user }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserDetail = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setSelectedUser(response.data.data); // .data.data holds the user object
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      <div className="pt-4 ">
        <button
          className="hover:bg-amber-400 border-1 px-2 py-1 rounded-full"
          onClick={() => handleUserDetail(user.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
