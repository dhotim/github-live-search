import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Repos from "./components/Repos";
import { remoteRoutes, endPoints } from "./data/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Container from "./components/Container";

export function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  function handleErrors(response) {
    if (!response.ok) {
      return response.json();
    }

    return response;
  }

  useEffect(() => {
    username.length > 0 &&
      fetch(`${remoteRoutes.getUser}/${username}`, {
        headers: {
          Authorization: `Token ${atob(process.env.REACT_APP_TOKEN)}`,
        },
      })
        .then(handleErrors)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((e) => {});
  }, [username]);

  console.log("App Data", data);
  return (
    <Router>
      <div>
        <Search handleSearch={(item) => setUsername(item)} />
      </div>

      <Switch>
        {username ? (
          <>
            <Route
              path="/follow"
              component={() => (
                <Container data={data} endpoint={endPoints.followers}>
                  <Repos />
                </Container>
              )}
            ></Route>
            <Route exact path="/" component={() => <Cards data={data} />} />
            <Route
              path="/repos"
              component={() => (
                <Container data={data} endpoint={endPoints.repos}>
                  <Repos />
                </Container>
              )}
            ></Route>
          </>
        ) : (
          <NotFound />
        )}
      </Switch>
    </Router>
  );
}
