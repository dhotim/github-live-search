import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { remoteRoutes } from "../data/constants";
import NotFound from "./NotFound";

export default function Container({ data, endpoint, children }) {
  const [childProp, setChildProp] = useState();

  useEffect(() => {
    fetch(`${remoteRoutes.getUser}${data.login}${endpoint}`, {
      headers: { Authorization: `Token ${atob(process.env.REACT_APP_TOKEN)}` },
    })
      .then((res) => res.json())
      .then((rData) => {
        setChildProp(rData);
      });
  }, [data.login, endpoint]);

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
    <>{React.cloneElement(children, { data: childProp })}</>
  );
}
