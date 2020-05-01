import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import CreditsCard from "../src/components/creditsCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import MovieReviews from "../src/components/movieReviews";
import MovieReview from "../src/components/movieReview";
import Videos from "../src/components/videos";
import ReviewForm from "../src/components/reviewForm"
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import CreditsList from "../src/components/credits";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const sampleCast = {"id":419704,"cast":[{"cast_id":271,"character":"Roy McBride","credit_id":"5e93b22dd55e4d001a19f94a","gender":2,"id":287,"name":"Brad Pitt","order":1,"profile_path":"/tJiSUYst4ddIaz1zge2LqCtu9tw.jpg"},{"cast_id":272,"character":"H. Clifford McBride","credit_id":"5e93b248875d1a001944ef1d","gender":2,"id":2176,"name":"Tommy Lee Jones","order":2,"profile_path":"/rdKKuq8zWCDYlKSxIfwGo2RUjpN.jpg"},{"cast_id":273,"character":"Helen Lantos","credit_id":"5e93b2afd55e4d001a19fa27","gender":1,"id":17018,"name":"Ruth Negga","order":3,"profile_path":"/aL4nmTVtQU2uQDNdBCarTy413CZ.jpg"},{"cast_id":274,"character":"Lieutenant General Rivas","credit_id":"5e93b30c54508d001a177e3a","gender":2,"id":40543,"name":"John Ortiz","order":4,"profile_path":"/o2SOFI53N6Gv5S3fDEBNbeimbzY.jpg"},{"cast_id":275,"character":"Eve","credit_id":"5e93b31f54508d001517734e","gender":1,"id":882,"name":"Liv Tyler","order":5,"profile_path":"/jrOj6t9pH8TqO65pnsRuvRNhwqx.jpg"},{"cast_id":276,"character":"Thomas Pruitt","credit_id":"5e93b33154508d001a177e6a","gender":2,"id":55636,"name":"Donald Sutherland","order":6,"profile_path":"/pvk7fjJNg9kZQTeuG6ZlfJ8t2Ze.jpg"},{"cast_id":277,"character":"Chip Garnes","credit_id":"5e93b52184448e001a90f074","gender":2,"id":231,"name":"Greg Bryk","order":7,"profile_path":"/1I3SxKFvQSam6KOMT4j5f0nFxRg.jpg"},{"cast_id":278,"character":"Donald Stanford","credit_id":"5e93b531cedac4001bebaead","gender":2,"id":11628,"name":"Loren Dean","order":8,"profile_path":"/zCYDwYJjrY4lpeueZYSzAXKLD5h.jpg"},{"cast_id":279,"character":"Lorraine Deavers","credit_id":"5e93b5428e87020014cd5d03","gender":1,"id":55314,"name":"Kimberly Elise","order":9,"profile_path":"/pAYWZdsWYrGc9lvMCivUU7STSWf.jpg"},{"cast_id":280,"character":"Brigadier General Stroud","credit_id":"5e93b570ccb15f00136fe748","gender":2,"id":9277,"name":"John Finn","order":10,"profile_path":"/caCHMsqfpfEcK1tUlkLWV9KkEbS.jpg"},{"cast_id":281,"character":"Adjutant General Vogel","credit_id":"5e93b58584448e001a90f131","gender":1,"id":64908,"name":"LisaGay Hamilton","order":11,"profile_path":"/bqfowff4gF0cGaQ1c7F89HAL3DH.jpg"},{"cast_id":282,"character":"Captain Lawrence Tanner","credit_id":"5e93b5da8e87020013cd3fb1","gender":2,"id":83223,"name":"Donnie Keshawarz","order":12,"profile_path":null},{"cast_id":283,"character":"Franklin Yoshida","credit_id":"5e93b5eb54508d001a17813f","gender":2,"id":1545016,"name":"Bobby Nish","order":13,"profile_path":"/fuJyCgr9iZwFT5fEXuf0s4noCRg.jpg"},{"cast_id":284,"character":"Willie Levant","credit_id":"5e93b601d55e4d00151a24ee","gender":2,"id":62093,"name":"Sean Blakemore","order":14,"profile_path":"/oHarc1jlzPHV3WEeJcWcyicw5yc.jpg"},{"cast_id":285,"character":"Captain Lu","credit_id":"5e93b6128e87020016ccf1fa","gender":1,"id":51754,"name":"Freda Foh Shen","order":15,"profile_path":null}]}
const sampleVideos = {"id":419704,"results":[{"id":"5cf81bfb92514153b7b9e733","iso_639_1":"en","iso_3166_1":"US","key":"P6AaSMfXHbA","name":"Official Trailer #1","site":"YouTube","size":1080,"type":"Trailer"},{"id":"5d313d7c326c1900101eba51","iso_639_1":"en","iso_3166_1":"US","key":"nxi6rtBtBM0","name":"Official Trailer #2","site":"YouTube","size":2160,"type":"Trailer"},{"id":"5d894d8a79b3d4001f832e8d","iso_639_1":"en","iso_3166_1":"US","key":"t6g0dsQzfqY","name":"Official Trailer #3","site":"YouTube","size":1080,"type":"Trailer"},{"id":"5d894d21d9f4a6000e4dc169","iso_639_1":"en","iso_3166_1":"US","key":"stOVFXuyyWQ","name":"Moon Rover","site":"YouTube","size":1080,"type":"Clip"},{"id":"5d894d5179b3d4002782dd61","iso_639_1":"en","iso_3166_1":"US","key":"Nvb9cDDFHtk","name":"Lima Project","site":"YouTube","size":1080,"type":"Clip"},{"id":"5d894d5cd9f4a600204da4ea","iso_639_1":"en","iso_3166_1":"US","key":"ykC_wu6ffOU","name":"Antenna","site":"YouTube","size":1080,"type":"Clip"}]}

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });


storiesOf("Movie Details Page/CreditsCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <CreditsCard
      cast={sampleCast.cast[0]}
    ></CreditsCard>
  ))

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

storiesOf("Movie Details Page/MovieReviews", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <MovieReviews movie={sample} />
  });

  storiesOf("Movie Details Page/CreditsList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const credits = sampleCast;
    return <div className="row movies">{credits.cast ? credits.cast.map(c => {
      return <CreditsCard key={c.cast_id} cast={c} />
    }) : ("Waiting for cast info")}</div>;
  });

  storiesOf("Movie Details Page/Videos", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const videos = sampleVideos
    return (
      <div class="video-div">
      {videos.results ? videos.results.filter(v =>  v.site === 'YouTube').map( video => {
     return <iframe
          width="550"
          height="315"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameborder="0"
          allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true">
       </iframe>
      }) : "Waiting for videos"}
      </div>
    );
  });

storiesOf("Movie Details Page/MovieReview", module)
  .add("default", () => {
    return <MovieReview review={{ author: "Bartosz Osowski", content: "Test review." }} />
  });

storiesOf("Write a Review Page/ReviewForm", module)
  .add("default", () => {
    return <ReviewForm movie={sample} />
  })