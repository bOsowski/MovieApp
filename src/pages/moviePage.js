import React from "react";
import { Link, Route } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import CreditsList from "../components/credits";
import Videos from "../components/videos";

const MoviePage = props => {
    const { id } = props.match.params;
    const [movie] = useMovie(id)
    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                        <Videos movie={movie} />
                    </PageTemplate>
                    <div className="row">
                        <div className="col-12 ">
                            {!props.history.location.pathname.endsWith("/reviews") ? (
                                <Link
                                    className="btn btn-primary btn-block active"
                                    to={`/movies/${id}/reviews`}
                                >
                                    Show Reviews
                                </Link>
                            ) : (
                                    <Link
                                        className="btn btn-primary btn-block active"
                                        to={`/movies/${id}`}
                                    >
                                        Hide Reviews
                                    </Link>
                                )}
                        </div>
                    </div>
                    <Route
                        path={`/movies/:id/reviews`}
                        render={props => <MovieReviews movie={movie} {...props} />}
                    />
                    <div className="row">
                        <div className="col-12 "></div>
                        <div className="col-12 ">
                            {!props.history.location.pathname.endsWith("/cast") ? (
                                <Link
                                    className="btn btn-primary btn-block active"
                                    to={`/movies/${id}/cast`}
                                >
                                    Show Cast
                                </Link>
                            ) : (
                                    <Link
                                        className="btn btn-primary btn-block active"
                                        to={`/movies/${id}`}
                                    >
                                        Hide Cast
                                    </Link>
                                )}
                        </div>
                    </div>
                    <Route
                        path={`/movies/:id/cast`}
                        render={props => <CreditsList movie={movie}></CreditsList>}
                    />
                </>
            ) : (
                    <p>Waiting for contact details</p>
                )}
        </>
    );
};

export default MoviePage;