import React from "react";
import notFound from "next/navigation";
import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";

const API_URL = "https://api.themoviedb.org/3";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
