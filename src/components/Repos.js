import React from "react";
import { Card } from "semantic-ui-react";

export default function Repos({ data }) {

  return (

    <>
    
      <div className="repo">
        <Card fluid>
          {data &&
            (data.length === 0 ? (
              <Card.Content>
                <Card.Description>No repositories found</Card.Description>
              </Card.Content>
            ) : (
              data.map((item) => (
                <Card.Content key={item.id}>
                  <Card.Header>{item.full_name}</Card.Header>
                  <Card.Description>{item.description}</Card.Description>
                </Card.Content>
              ))
            ))}
        </Card>
      </div>
    </>
  );
}
