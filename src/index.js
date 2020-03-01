import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage.js";
import MoviePage from './pages/movieDetailsPage.js'
import FavoriteMoviesPage from './pages/favoritesMoviesPage.js'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <div className="container-fluid">
        <ul className="navbar-nav text-black">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/movies/favorites">
              Favorites
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));