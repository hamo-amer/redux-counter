import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{user.name}</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>{user.email}</ListGroup.Item>
          <ListGroup.Item>{user.phone}</ListGroup.Item>
          <ListGroup.Item>{user.website}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );
}

export default UserCard;
