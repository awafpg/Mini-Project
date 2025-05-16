const UserCard = ({ name, email, avatar }) => {
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
    </div>
  );
};

export default UserCard;
