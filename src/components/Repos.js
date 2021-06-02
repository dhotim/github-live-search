import React, { useEffect, useState } from "react";
import { Card, Divider } from "semantic-ui-react";
import { auth, remoteRoutes } from "../data/constants";
import NotFound from "./NotFound";

export default function Repos({ data }) {
  const [rep, setRep] = useState();

  useEffect(() => {
    fetch(`${remoteRoutes.getUser}${data.login}/repos`, {
      headers: auth,
    })
      .then((res) => res.json())
      .then((data) => {
        setRep(data);
      });
  }, [data]);

  return data.message ? (
    <>
      <div className="cards">
        <Card>
          <Card.Content>
            <Card.Header>User Not Found</Card.Header>
          </Card.Content>
        </Card>
      </div>

      <NotFound />
    </>
  ) : (
    <>
      <div className="cards">
        <h3> {data.name ? data.name : data.login}'s Repositories</h3>
      </div>
      <Divider hidden />
      <div className="repo">
        <Card fluid>
          {rep &&
            (rep.length === 0 ? (
              <Card.Content>
                <Card.Description>No repositories found</Card.Description>
              </Card.Content>
            ) : (
              rep.map((item) => (
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
