import React from "react";
import { localRoutes } from "../data/constants";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NotFound } from "./EmptyState/NotFound";

export default function Cards({ data }) {
  const joinDate = new Date(data.created_at).toLocaleDateString();

  return (
    <>
      {data.message ? (
        <NotFound />
      ) : (
        <div className="cards">
          <Card>
            <Image src={data.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{data.name ? data.name : data.login}</Card.Header>
              <Card.Meta>
                <span className="date">
                  <Icon name="calendar outline" />
                  {data.created_at &&
                    `
                  Joined on ${joinDate}`}
                </span>
              </Card.Meta>
              <Card.Description>{data.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={localRoutes.repos}>
                <Icon name="archive" />
                {data.public_repos} Public Repo{data.public_repos > 1 && "s"}
              </Link>
            </Card.Content>

            <Card.Content extra>
              <Link to={localRoutes.follow}>
                <Icon name="user" />
                {data.followers} Follower{data.followers > 1 && "s"}
              </Link>
            </Card.Content>
          </Card>
        </div>
      )}
    </>
  );
}
