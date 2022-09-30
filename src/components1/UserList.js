import { users } from "../data/users";
import UserCard from "./UserCard";

function UserList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "90%",
        margin: "50px auto",
        gap: "30px",
      }}
    >
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
