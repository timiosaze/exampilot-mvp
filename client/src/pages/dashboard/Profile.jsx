import { getInitials } from "./getInitials.js";

const Profile = ({ username, email }) => {
  return (
    <div className="flex items-center w-full justify-center h-full text-center">
      <div className="">
        <div className="mb-4 mx-auto flex items-center font-bold justify-center rounded-full w-23 h-23 text-4xl border-2 border-primary-700 bg-gray-100 text-gray-900">
          <p>{getInitials(username)}</p>
        </div>
        <p className="text-gray-900 font-extrabold text-3xl mb-2">{username}</p>
        <p className="text-primary-700 font-light text-lg">{email}</p>
      </div>
    </div>
  );
};
export default Profile;
