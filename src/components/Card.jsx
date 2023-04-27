import React from "react";
import { Card } from "react-bootstrap";

export const Card = () => {
  return (
    <Card>
      <Card.body>
        <Card.title>Digital Rport</Card.title>
        <Card.text>
          Get All reports online 24x7 using your phone number or email-id
        </Card.text>
        <button variant="primary">Download</button>
      </Card.body>
    </Card>
  );
};
