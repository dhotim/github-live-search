import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Repos from "./components/Repos";
import { remoteRoutes, endPoints } from "./data/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Container from "./components/Container";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  function handleErrors(response) {
    if (!response.ok) {
      return response.json();
    }

    return response;
  }
  console.log("The USer", username.length);

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
        .catch((e) => {
          console.log(`The user ${username} was not found`);
        });
  }, [username]);

  return (
    <Router>
      <div>
        <Navbar />
      </div>
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

export default App;
