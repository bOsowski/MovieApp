import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage.js";
import MoviePage from './pages/moviePage.js';
import FavoriteMoviesPage from './pages/favoritesMoviesPage.js';
import MovieReviewPage from './pages/movieReviewPage.js';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext"
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import AuthContextProvider from './contexts/authContext'

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      {/* New Header  */}
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
	      <AuthContextProvider>
              <Switch>
	 	<Route exact path="/login" component={LoginPage} />
	        <Route path="/signup" component={SignupPage} /> />
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
	      </AuthContextProvider>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
