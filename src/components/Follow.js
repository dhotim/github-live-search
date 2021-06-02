import React, { useEffect, useState } from "react";
import { Card, Image, Divider } from "semantic-ui-react";
import { remoteRoutes } from "../data/constants";
import NotFound from "./NotFound";

export default function Follow({ data }) {
  const [follow, setFollow] = useState();

  useEffect(() => {
    fetch(`${remoteRoutes.getUser}${data.login}/followers`, {
      headers: { Authorization: `Token ${atob(process.env.REACT_APP_TOKEN)}` },
    })
      .then((res) => res.json())
      .then((rData) => {
        setFollow(rData);
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
        <h3> {`${data.name ? data.name : data.login}'s Followers`}</h3>
      </div>
      <Divider hidden />
      <div className="follow">
        <Card fluid>
          {follow &&
            (follow.length === 0 ? (
              <Card.Content>
                <Card.Description>No Followers found</Card.Description>
              </Card.Content>
            ) : (
              follow.map((item) => (
                <Card.Content key={item.id}>
                  <Image
                    src={item.avatar_url}
                    avatar
                    circular
                    verticalAlign="middle"
                  />{" "}
                  <span>{item.login}</span>
                </Card.Content>
              ))
            ))}
        </Card>
      </div>
    </>
  );
}
