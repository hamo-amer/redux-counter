import { users } from "../data/users";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(user => user.id === Number(id));
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h6>
        Address: {user.address.street} {user.address.city}
      </h6>
      <br />
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}

export default Profile;
