import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Repos from "./components/Repos";
import { auth, remoteRoutes } from "./data/constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Follow from "./components/Follow";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${remoteRoutes.getUser}${username}`, {
      headers: auth,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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
            <Route path="/follow" component={() => <Follow data={data} />} />
            <Route exact path="/" component={() => <Cards data={data} />} />
            <Route path="/repos" component={() => <Repos data={data} />} />
          </>
        ) : (
          <NotFound />
        )}
      </Switch>
    </Router>
  );
}

export default App;
