import React from "react";
import { Card } from "semantic-ui-react";

export default function NotFound(props) {
  return (
    <div className="cards">
      <Card>
        <Card.Content>
          <Card.Header>Enter Github username</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            User not entered or Invalid user detected. Please enter a valid
            Github username above to Live search
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
}
