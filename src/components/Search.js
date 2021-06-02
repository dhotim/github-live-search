import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { localRoutes } from "../data/constants";

export default function Search(props) {
  return (
    <div className="search">
      <Form>
        <Form.Group>
          <Link to={localRoutes.home}>
            <Form.Button circular icon="home" />
          </Link>
          <Form.Input
            focus
            icon={<Icon name="search" inverted circular link />}
            placeholder="Live user search"
            name="search"
            onChange={(e) => props.handleSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
